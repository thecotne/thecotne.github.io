# thecotne.github.io

Personal portfolio of **Tsotne Nazarashvili** — senior software engineer specializing in video streaming and AI agents.

**Live:** https://thecotne.github.io

## Stack
- [TanStack Start](https://tanstack.com/start) (React 19) with static prerendering (SSG)
- Vite · TypeScript · Tailwind CSS
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build
```bash
npm run build      # static output in dist/client
```

Every push to `master` triggers the Actions workflow, which builds and deploys to GitHub Pages.
