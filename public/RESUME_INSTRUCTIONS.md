# How to Add Your Resume PDF

## Step-by-Step Instructions

### 1. Prepare Your Resume PDF
- Make sure your resume is saved as a PDF file
- Name it exactly: `resume.pdf` (lowercase, no spaces)

### 2. Add to Public Folder
- Copy your `resume.pdf` file
- Paste it directly into the `public` folder
- The path should be: `public/resume.pdf`

### 3. File Location
Your file structure should look like this:
```
My Portfolio/
└── public/
    ├── resume.pdf          ← Your PDF goes here
    ├── images/
    │   └── profile.jpg
    └── README.md
```

### 4. Verify It Works
- The file should be accessible at: `http://localhost:3000/resume.pdf`
- When you click "Download Resume" button, it should download automatically

## Important Notes
- ✅ File name must be exactly: `resume.pdf`
- ✅ File must be in the `public` folder (not in a subfolder)
- ✅ The download button is already configured to use `/resume.pdf`
- ✅ After adding the file, refresh your browser

## Testing
1. Add your PDF file to `public/resume.pdf`
2. Start/restart your dev server: `npm run dev`
3. Open: `http://localhost:3000`
4. Click the "Download Resume" button
5. The PDF should download automatically!

