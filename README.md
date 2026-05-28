# Karana - Elite Engineering Agency

A production-ready, award-winning website built with React, Three.js, and Tailwind CSS.

## 🚀 Quick Start

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## 🎨 Branding & Customization

### Logo Replacement
To update the agency logo:
- Replace the placeholder in the `Navbar` and `Footer` components.
- Place your SVG logo in \`/public/logo.svg\`.
- Update the \`<Logo />\` component (if created) or the SVG paths in the layout components.

### Theme Configuration
The cosmic aesthetic is defined in \`tailwind.config.js\`. You can adjust the golden yellow and nebula purple colors there.

## 🛠 Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **3D/Animation:** Three.js, React Three Fiber, Framer Motion, GSAP, Lenis
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form, Zod
- **Communications:** EmailJS

## 📧 Contact Form Setup
The contact form uses EmailJS. To make it functional:
1. Create an account at [emailjs.com](https://www.emailjs.com/).
2. Create a new Email Service and Template.
3. Replace the following placeholders in \`src/pages/Contact.tsx\`:
   - \`YOUR_SERVICE_ID\`
   - \`YOUR_TEMPLATE_ID\`
   - \`YOUR_PUBLIC_KEY\`

## 📁 Project Structure
- \`src/data/\`: Static content for projects and services.
- \`src/components/cosmic/\`: 3D scenes, shaders, and particle systems.
- \`src/components/layout/\`: Global components like Navbar and Footer.
- \`src/pages/\`: Route-level components for the main site structure.
- \`src/lib/\`: Utility functions and helpers.

## 📈 Performance & SEO
- Optimized using Three.js frustum culling and instanced rendering.
- Responsive design across mobile, tablet, and desktop.
- Semantic HTML and ARIA labels for accessibility.
