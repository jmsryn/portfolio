'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* A "quality field": a matrix of tiles that breathes, rises toward the cursor,
   and is swept by a periodic test run that lights each tile it passes. */

const COLS = 64;
const ROWS = 34;
const GAP = 0.25;
const WIDTH = COLS * GAP;
const SWEEP_EVERY = 7;
const SWEEP_TIME = 3.4;

type Palette = { tile: string; accent: string };

function readPalette(): Palette {
  const style = getComputedStyle(document.documentElement);
  const fg = new THREE.Color(style.getPropertyValue('--foreground').trim() || '#141a26');
  const bg = new THREE.Color(style.getPropertyValue('--background').trim() || '#f6f7f9');
  const accent = style.getPropertyValue('--accent').trim() || '#2f5bff';
  const dark = document.documentElement.classList.contains('dark');
  return { tile: `#${bg.lerp(fg, dark ? 0.13 : 0.1).getHexString()}`, accent };
}

function Field({
  palette,
  pointer,
  still,
}: {
  palette: Palette;
  pointer: React.RefObject<THREE.Vector2 | null>;
  still: boolean;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const count = COLS * ROWS;
  const glow = useMemo(() => new Float32Array(count), [count]);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tile = useMemo(() => new THREE.Color(), []);
  const accent = useMemo(() => new THREE.Color(), []);
  const mixed = useMemo(() => new THREE.Color(), []);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);
  const hit = useMemo(() => new THREE.Vector3(999, 0, 999), []);
  const aim = useMemo(() => new THREE.Vector3(999, 0, 999), []);
  const { camera, raycaster, invalidate } = useThree();

  useLayoutEffect(() => {
    tile.set(palette.tile);
    accent.set(palette.accent);
    const m = mesh.current;
    if (!m) return;
    for (let i = 0; i < count; i++) m.setColorAt(i, tile);
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    invalidate();
  }, [palette, tile, accent, count, invalidate]);

  useFrame((state, delta) => {
    const m = mesh.current;
    if (!m) return;
    const t = still ? 2.4 : state.clock.elapsedTime;
    const dt = Math.min(delta, 0.05);

    const p = pointer.current;
    if (p && !still) {
      raycaster.setFromCamera(p, camera);
      if (raycaster.ray.intersectPlane(plane, aim)) hit.lerp(aim, 1 - Math.exp(-dt * 10));
      camera.position.x += (p.x * 0.7 - camera.position.x) * (1 - Math.exp(-dt * 2));
      camera.lookAt(0, 0, 0);
    } else {
      hit.set(999, 0, 999);
    }

    const cycle = t % SWEEP_EVERY;
    const sweepX = !still && cycle < SWEEP_TIME ? -WIDTH / 2 - 1 + (cycle / SWEEP_TIME) * (WIDTH + 2) : 999;
    const decay = Math.exp(-dt * 1.4);

    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      const z = (r - (ROWS - 1) / 2) * GAP;
      for (let c = 0; c < COLS; c++, i++) {
        const x = (c - (COLS - 1) / 2) * GAP;
        const wave = Math.sin(x * 0.5 + t * 0.55) * 0.14 + Math.cos(z * 0.75 + t * 0.4) * 0.1;

        const d = Math.hypot(x - hit.x, z - hit.z);
        let lens = Math.max(0, 1 - d / 2.1);
        lens = lens * lens * (3 - 2 * lens);

        if (Math.abs(x - sweepX) < GAP * 0.75 + Math.sin(z * 2.3) * 0.08) glow[i] = 1;
        else glow[i] *= decay;
        const g = glow[i];

        dummy.position.set(x, wave + lens * 0.45 + g * 0.12, z);
        dummy.scale.set(1, 1 + lens * 5 + g * 3.5, 1);
        dummy.updateMatrix();
        m.setMatrixAt(i, dummy.matrix);

        mixed.copy(tile).lerp(accent, Math.min(1, g * 0.95 + lens * 0.75));
        m.setColorAt(i, mixed);
      }
    }
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[GAP * 0.56, 0.04, GAP * 0.56]} />
      <meshStandardMaterial roughness={0.6} metalness={0.05} />
    </instancedMesh>
  );
}

export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef<THREE.Vector2 | null>(null);
  const [palette, setPalette] = useState<Palette | null>(null);
  const [visible, setVisible] = useState(true);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setStill(motion.matches);
    syncMotion();
    motion.addEventListener('change', syncMotion);

    setPalette(readPalette());
    const themeWatcher = new MutationObserver(() => setPalette(readPalette()));
    themeWatcher.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });

    const el = wrapper.current;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && !document.hidden));
    if (el) io.observe(el);
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const onMove = (e: PointerEvent) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (e.clientY > rect.bottom || e.clientY < rect.top) {
        pointer.current = null;
        return;
      }
      pointer.current ??= new THREE.Vector2();
      pointer.current.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    };
    const onLeave = () => { pointer.current = null; };
    if (finePointer) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
    }

    return () => {
      motion.removeEventListener('change', syncMotion);
      themeWatcher.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={wrapper} className={`hero-scene ${palette ? 'is-ready' : ''}`} aria-hidden="true">
      {palette && (
        <Canvas
          dpr={[1, 1.75]}
          frameloop={still ? 'demand' : visible ? 'always' : 'never'}
          camera={{ position: [0, 5.8, 8.4], fov: 32 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
          onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
          fallback={null}
        >
          <ambientLight intensity={2.1} />
          <directionalLight position={[-4, 8, 5]} intensity={1.6} />
          <Field palette={palette} pointer={pointer} still={still} />
        </Canvas>
      )}
    </div>
  );
}
