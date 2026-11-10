# CV Showcase Website - Project Instructions

This is a React-based CV showcase website built with Vite for fast performance and excellent developer experience.

## Project Overview

A modern, component-based CV/resume website with the following features:
- Professional header with name and title
- Work experience section with highlights
- Skills organized by category
- Education section
- Contact information and links
- Responsive design with gradient styling
- Fast development with Vite HMR

## Technology Stack
- React 19
- Vite for fast builds
- CSS3 with responsive design and shared design tokens
- Component-based architecture

## Project Structure
```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Experience.jsx & Experience.css
│   ├── Skills.jsx & Skills.css
│   ├── Education.jsx & Education.css
│   ├── Contact.jsx & Contact.css
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Development Server
Run `npm run dev` to start the development server at http://localhost:5173

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh on file changes
- No page reload needed for most changes

### Build for Production
Run `npm run build` to create an optimized production build in the `dist/` folder

### Deployment
The `dist/` folder can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Traditional web hosting

## Customization Guide

### Update Your Information
Each section can be customized by editing the corresponding component:

1. **Header** - `src/components/Header.jsx`
   - Your name
   - Professional title
   - Professional summary

2. **Experience** - `src/components/Experience.jsx`
   - Job positions (add/remove as needed)
   - Company names and dates
   - Key achievements and highlights

3. **Skills** - `src/components/Skills.jsx`
   - Skill categories (e.g., Technical, Professional, Tools)
   - Individual skills in each category

4. **Education** - `src/components/Education.jsx`
   - Degrees and certifications
   - School/university names
   - Graduation years

5. **Contact** - `src/components/Contact.jsx`
   - Email address
   - LinkedIn profile
   - GitHub profile
   - Phone number

### Styling
- CSS is split per component (one stylesheet alongside each component) but uses the global cascade — it is not scoped like CSS Modules
- Main color scheme: blue-to-navy gradient (`#4c5fd5` to `#000269`), with `#3730a3` as the accent text colour on light backgrounds
- Palette and shared values live as CSS custom properties in `:root` inside `src/index.css`; consume the tokens instead of hardcoding colours
- Global styles, including the shared `.container` rule, are in `src/index.css`
- Modify colors, fonts, and spacing in the relevant component CSS file or in the tokens in `src/index.css`

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Notes
- The project uses Vite's React plugin with Oxc for fast transformation
- All components are functional components with hooks and named exports (`App` is the default export)
- CSS files are split per component but share the global cascade; there is no CSS-in-JS or CSS Modules
- The design is mobile-responsive and respects `prefers-reduced-motion`
