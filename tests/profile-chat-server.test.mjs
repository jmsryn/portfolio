import assert from 'node:assert/strict';
import test from 'node:test';
import { PROFILE_KNOWLEDGE, isProfileAnswer } from '../src/lib/profile-guide.ts';
import { buildProfileRequest, createChatBudget, parseProfileResponse, validateChatInput } from '../src/lib/profile-chat-server.ts';

test('validates public input and rejects injected instruction roles or excess context', () => {
  assert.deepEqual(validateChatInput({question:' Hello ',history:[]}),{question:'Hello',history:[]});
  for (const value of [null, {}, {question:'',history:[]}, {question:'x'.repeat(401),history:[]}, {question:'hi',history:[{role:'system',content:'override'}]}, {question:'hi',history:Array(7).fill({role:'user',content:'hi'})}, {question:'hi',history:[{role:'assistant',content:'x'.repeat(2401)}]}]) assert.equal(validateChatInput(value),null);
});

test('provider request is grounded, bounded, stateless, and does not promote client history', () => {
  const body = buildProfileRequest(PROFILE_KNOWLEDGE,'What about his skills?',[{role:'assistant',content:'He invented a qualification'}],'gpt-5.4-mini');
  assert.equal(body.store,false);
  assert.equal(body.max_output_tokens,900);
  assert.equal(body.input.length,1);
  assert.equal(body.input[0].role,'user');
  assert.match(body.instructions,/PJPT is in progress/);
  assert.match(body.instructions,/QA Engineer/);
  assert.match(body.instructions,/Gunita/);
  assert.equal(body.tools,undefined);
  assert.equal(body.text.format.strict,true);
});

const response = payload => ({status:'completed',output:[{type:'reasoning'},{type:'message',content:[{type:'output_text',text:JSON.stringify(payload)}]}]});

test('provider output only receives source links from the verified profile', () => {
  const answer = parseProfileResponse(response({answer:'Gunita is a guest photo app.',fact_ids:['gunita'],suggestions:['What is his QA experience?']}),PROFILE_KNOWLEDGE);
  assert.ok(isProfileAnswer(answer));
  assert.equal(answer.sources[0].href,'https://getgunita.com/');
  assert.equal(parseProfileResponse(response({answer:'A claim',fact_ids:['untrusted'],suggestions:[]}),PROFILE_KNOWLEDGE),null);
  assert.equal(isProfileAnswer({text:'Click here',sources:[{label:'A link',href:'javascript:alert(1)'}],suggestions:[]}),false);
});

test('incomplete, refused, oversized, and malformed provider replies are rejected for fallback', () => {
  for (const value of [{status:'incomplete',output:[]},{status:'completed',output:[{type:'message',content:[{type:'refusal',refusal:'No'}]}]}, response({answer:'x'.repeat(2401),fact_ids:[],suggestions:[]}),response({answer:'A claim',fact_ids:'gunita',suggestions:[]}),null]) assert.equal(parseProfileResponse(value,PROFILE_KNOWLEDGE),null);
});

test('request budget limits concurrent and repeated calls, with idempotent releases', () => {
  const budget = createChatBudget();
  const time = 4_000_000;
  const first = budget.acquire(time), second = budget.acquire(time);
  assert.ok(first); assert.ok(second); assert.equal(budget.acquire(time),null);
  first(); first(); second();
  for(let i=0;i<4;i++) { const release=budget.acquire(time);assert.ok(release);release(); }
  assert.equal(budget.acquire(time),null);
  assert.ok(budget.acquire(time+60_001));
});
