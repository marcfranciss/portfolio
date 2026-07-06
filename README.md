# Azure Cloud Portfolio

A componentized React + Tailwind recreation of the Azure Cloud Portfolio design.

## Structure

```
src/
  main.jsx                  # React entry point
  App.jsx                   # Assembles all sections
  index.css                 # Tailwind entry point
  context/
    ThemeContext.jsx        # Dark/light mode, shared via useTheme()
  hooks/
    useScrollNav.js         # Active nav link + smooth-scroll logic
  data/
    content.js              # Nav links, features, skills, projects, posts
  components/
    Navbar.jsx
    Hero.jsx
    OrbitNode.jsx            # Single orbiting icon used inside Hero
    Features.jsx
    About.jsx
    Certification.jsx
    Skills.jsx
    Projects.jsx
    Blog.jsx
    Footer.jsx
```

## Setup (Vite)

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

Copy the `src/` folder from this project into your new project (overwrite the
default `src/`).

### Install Tailwind CSS v4

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Update `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Install icon libraries

```bash
npm install lucide-react @icons-pack/react-simple-icons
```

> Lucide 1.0 removed all brand/logo icons (GitHub, Twitter, etc.) for
> trademark reasons, so the GitHub icon comes from
> `@icons-pack/react-simple-icons` (`SiGithub`) instead of `lucide-react`.

## Run

```bash
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Notes

- The profile photo and blog thumbnails are styled placeholders (gradients /
  initials / icons). Swap the placeholder `<div>`s in `About.jsx` and
  `Blog.jsx` for real `<img>` tags when you have actual images.
- Dark/light mode is handled globally via `ThemeContext` — call `useTheme()`
  in any component to read `dark` or call `toggleTheme()`.
- Active-section highlighting and smooth scrolling live in `useScrollNav`,
  shared by `Navbar`, `Hero`, and `Footer`.
