# Sitio Dr Darwin Moncayo - Demo Package

This package contains a ready-to-edit React project for the Dr. Darwin Moncayo website demo.
It includes:
- LandingPage.jsx: main React component with hero, biography, services, blog (accordion), reviews, contact form, WhatsApp floating button and simple i18n detection.
- styles.css minimal file and public/index.html placeholder.
- Images should be placed in `/public/images/`: hero-dr-darwin.jpg, team.jpg, antes-despues.jpg, logo-dr-darwin.png, blog1.jpg..blog4.jpg

## How to run locally
1. Install dependencies:
   ```
   npm install
   ```
2. Start development server:
   ```
   npm start
   ```
3. Open http://localhost:3000/

## How to deploy to Vercel
1. Create a Vercel account (https://vercel.com) and connect your GitHub or upload project.
2. Import the project and Vercel will auto-detect React. Deploy.

## Notes & Next steps
- The project includes simple localStorage-based reviews. For production, integrate a backend (Firebase, Google Sheets, or your CRM).
- Bilingual content is implemented with a lightweight detection and a `lang` toggle in the header; tweak translations in `LandingPage.jsx` as needed.
- Replace placeholder images in `/public/images` with your approved visuals (webp for better performance).
