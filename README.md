# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15, React 19, and TailwindCSS. This portfolio showcases my projects, experience, and photography through a clean and intuitive interface.

## ✨ Features

- 📱 Responsive design with mobile-first approach
- 🎨 Modern UI using shadcn/ui components
- 📸 Photo gallery with optimized image loading
- 💼 Project showcase with detailed cards
- 🔗 Social links and contact information
- 🛠️ Tech stack display with logo animations
- 📄 Experience and current ventures section

## 🚀 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui + Radix UI
- **Package Manager:** pnpm
- **Deployment:** Vercel (recommended)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/public` - Static assets (images, logos)
- `/data` - JSON data for projects and content
- `/types` - TypeScript type definitions
- `/lib` - Utility functions and helpers

## 🔧 Configuration

The project uses several configuration files:
- `components.json` - shadcn/ui configuration
- `tailwind.config.js` - TailwindCSS configuration
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Making Changes

- Edit `app/page.tsx` to modify the home page
- Add new components in the `components` directory
- Update project data in `data/data.json`
- Add new images to `public/static` directories

## 📦 Dependencies

- React 19.0.0
- Next.js 15.2.4
- TailwindCSS 4
- Radix UI components
- lucide-react for icons
- TypeScript 5

## 🚀 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Deploy with one click

---

Built with ❤️ using Next.js and TailwindCSS
