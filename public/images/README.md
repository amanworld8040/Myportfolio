# Profile Photo Instructions

## How to Add Your Profile Photo

1. **Save your profile photo** in this directory (`public/images/`)
2. **Name it exactly:** `profile.jpg` (or `profile.png` if it's a PNG file)
3. **Recommended size:** 800x800 pixels or larger (square format works best)
4. **File formats supported:** JPG, JPEG, PNG

## Current Setup

The portfolio is configured to look for:
- `/images/profile.jpg` (primary)
- If the image is not found or fails to load, it will show your initials "AR" as a fallback

## If You Want to Use a Different Name

If your image has a different name, update `src/components/Hero.tsx`:
- Find the line: `src="/images/profile.jpg"`
- Change it to your image name: `src="/images/your-image-name.jpg"`

## Image Optimization

The portfolio uses Next.js Image optimization, so your photo will be automatically optimized for:
- Fast loading
- Different screen sizes
- Web performance

