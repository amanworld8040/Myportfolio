# Portfolio Setup Guide

## ✅ Project Created Successfully!

Your portfolio website is ready to go. Here's what you need to do next:

## 🚀 Quick Start

1. **Add Your Resume**
   - Place your resume PDF file in the `public/` directory
   - Name it `resume.pdf`
   - The download link will automatically work

2. **Run the Development Server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser

3. **Customize Your Content**
   - Update personal info: `src/data/personal.ts`
   - Add more projects: `src/data/projects.ts`
   - Update skills: `src/data/skills.ts`
   - Modify experience: `src/data/experience.ts`
   - Update education: `src/data/education.ts`

## 📝 Next Steps

### 1. Update Social Links
Edit `src/data/personal.ts` and update:
- GitHub URL
- LinkedIn URL
- Twitter URL (if you have one)

### 2. Add Your Resume
- Copy your resume PDF to `public/resume.pdf`

### 3. Add Profile Photo (Optional)
- Add your photo to `public/images/profile.jpg`
- Update the Hero component to use it

### 4. Integrate Contact Form
The contact form currently simulates submission. To make it work:

**Option A: Use Formspree (Free)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update `src/app/contact/page.tsx` to use the Formspree endpoint

**Option B: Use EmailJS (Free)**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Set up email service
3. Install: `npm install @emailjs/browser`
4. Update the contact form to use EmailJS

### 5. Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy! (It's free and automatic)

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#3b82f6',    // Change this to your brand color
  secondary: '#8b5cf6',   // Change this to your secondary color
  // ...
}
```

### Add More Sections
- Create new components in `src/components/`
- Add new pages in `src/app/`
- Update navigation in `src/components/Navbar.tsx`

## 📦 Project Structure

```
my-portfolio/
├── public/              # Static files (resume, images)
├── src/
│   ├── app/            # Next.js pages
│   ├── components/    # React components
│   ├── data/           # Data files (personal, projects, etc.)
│   └── types/          # TypeScript types
├── package.json
└── README.md
```

## 🐛 Troubleshooting

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

### Styling Issues
- Make sure Tailwind CSS is properly configured
- Check `tailwind.config.js` and `postcss.config.js`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## ✨ Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Dark mode support (via Tailwind)
- ✅ SEO optimized
- ✅ Fast performance (Next.js static generation)
- ✅ All sections from your resume
- ✅ Contact form (needs integration)
- ✅ Resume download
- ✅ Social media links

## 🎉 You're All Set!

Your portfolio is ready. Just customize the content and deploy!

