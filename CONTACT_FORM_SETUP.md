# Contact Form Setup Guide

Your portfolio currently has a simulated contact form. Here are several ways to make it actually send emails:

## Option 1: EmailJS (Client-side, No Backend Required)

### Setup Steps:
1. **Create EmailJS Account**
   - Go to [https://emailjs.com](https://emailjs.com)
   - Sign up for free (100 emails/month)
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

2. **Create `.env.local` file in project root:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. **Your Contact.tsx is already updated to use EmailJS!**

### EmailJS Template Setup:
Create a template in EmailJS with these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Your name (James Ryan Gaid)

---

## Option 2: Formspree (Easiest Setup)

### Setup Steps:
1. **Create Formspree Account**
   - Go to [https://formspree.io](https://formspree.io)
   - Sign up for free (50 submissions/month)
   - Create a new form
   - Get your form ID

2. **Add to `.env.local`:**
```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

3. **Use the Alternative Component**
   - Replace your `Contact.tsx` with `Contact-Formspree.tsx`
   - Or rename `Contact-Formspree.tsx` to `Contact.tsx`

---

## Option 3: Netlify Forms (If deploying to Netlify)

### Setup Steps:
1. **Add to your form tag:**
```html
<form netlify data-netlify="true" name="contact">
```

2. **Add hidden input:**
```html
<input type="hidden" name="form-name" value="contact" />
```

3. **Deploy to Netlify** - Forms will automatically work!

---

## Option 4: Simple Email Link (Immediate Solution)

Replace the current form submission with a mailto link:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  window.location.href = `mailto:james.gaid@email.com?subject=${subject}&body=${body}`;
};
```

---

## Recommendation

**For immediate deployment:** Use **Formspree** (Option 2) - it's the simplest to set up.

**For professional use:** Use **EmailJS** (Option 1) - more customizable and doesn't require backend.

**For Netlify hosting:** Use **Netlify Forms** (Option 3) - seamless integration.

---

## Current Status

✅ **EmailJS package installed**
✅ **Contact form updated with EmailJS integration**
✅ **Alternative Formspree component created**
🔄 **Waiting for your service setup**

Choose your preferred option and follow the setup steps above! 