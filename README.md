# LearnHub

A learning platform landing page with a dark theme and orange accent design.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **shadcn/ui**
- **next-themes** (dark/light mode)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm typecheck` | Run TypeScript check |

## Adding Components

To add shadcn/ui components:

```bash
npx shadcn@latest add button
```

Components are placed in `components/ui/`.

## Using Components

```tsx
import { Button } from "@/components/ui/button"
import { LandingPage } from "@/components/landing-page"
```
