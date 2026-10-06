# Package Upgrade Backlog

Generated from `pnpm outdated -r`. Node modules were not installed at generation
time, so `Current` shows as `missing`; columns below compare the declared
`wanted` range against the latest published version.

## Safe upgrades (minor / patch)

| Package | Wanted | Latest | Dependents |
| --- | --- | --- | --- |
| `@radix-ui/react-accordion` | 1.2.12 | 1.2.20 | @workspace/ui |
| `@radix-ui/react-alert-dialog` | 1.1.15 | 1.1.23 | @workspace/ui |
| `@radix-ui/react-aspect-ratio` | 1.1.7 | 1.1.15 | @workspace/ui |
| `@radix-ui/react-checkbox` | 1.3.3 | 1.3.11 | @workspace/ui |
| `@radix-ui/react-collapsible` | 1.1.12 | 1.1.20 | @workspace/ui |
| `@radix-ui/react-dialog` | 1.1.15 | 1.1.23 | @workspace/ui |
| `@radix-ui/react-direction` | 1.1.1 | 1.1.4 | @workspace/ui |
| `@radix-ui/react-dropdown-menu` | 2.1.16 | 2.1.24 | @workspace/ui |
| `@radix-ui/react-hover-card` | 1.1.15 | 1.1.23 | @workspace/ui |
| `@radix-ui/react-label` | 2.1.7 | 2.1.15 | @workspace/ui |
| `@radix-ui/react-menubar` | 1.1.16 | 1.1.24 | @workspace/ui |
| `@radix-ui/react-navigation-menu` | 1.2.14 | 1.2.22 | @workspace/ui |
| `@radix-ui/react-popover` | 1.1.15 | 1.1.23 | @workspace/ui |
| `@radix-ui/react-progress` | 1.1.7 | 1.1.16 | @workspace/ui |
| `@radix-ui/react-scroll-area` | 1.2.10 | 1.2.18 | @workspace/ui |
| `@radix-ui/react-separator` | 1.1.7 | 1.1.15 | @workspace/ui |
| `@radix-ui/react-tabs` | 1.1.13 | 1.1.21 | @workspace/ui |
| `@radix-ui/react-toggle` | 1.1.10 | 1.1.18 | @workspace/ui |
| `@radix-ui/react-toggle-group` | 1.1.11 | 1.1.19 | @workspace/ui |
| `@radix-ui/react-tooltip` | 1.2.8 | 1.2.16 | @workspace/ui |
| `@radix-ui/react-avatar` | 1.1.10 | 1.2.6 | @workspace/ui |
| `@radix-ui/react-context-menu` | 2.2.16 | 2.3.7 | @workspace/ui |
| `@radix-ui/react-radio-group` | 1.3.8 | 1.4.7 | @workspace/ui |
| `@radix-ui/react-select` | 2.2.6 | 2.3.7 | @workspace/ui |
| `@radix-ui/react-slider` | 1.3.6 | 1.4.7 | @workspace/ui |
| `@radix-ui/react-slot` | 1.2.3 | 1.3.3 | @workspace/ui |
| `@radix-ui/react-switch` | 1.2.6 | 1.3.7 | @workspace/ui |
| `radix-ui` | 1.6.2 | 1.6.7 | @workspace/ui |
| `@hookform/resolvers` | 5.2.2 | 5.9.1 | @workspace/ui |
| `react-hook-form` | 7.82.0 | 7.89.0 | @workspace/ui |
| `recharts` | 3.9.2 | 3.10.1 | @workspace/ui |
| `input-otp` | 1.4.2 | 1.5.0 | @workspace/ui |
| `tailwind-merge` | 3.6.0 | 3.7.0 | @workspace/ui |
| `tw-animate-css` | 1.3.6 | 1.4.0 | @workspace/ui |
| `date-fns` | 4.1.0 | 4.4.0 | @workspace/ui, portfolio |
| `sonner` | 2.0.7 | 2.0.8 | @workspace/ui, learnings, portfolio |
| `lucide-react` | 1.25.0 | 1.48.0 | @workspace/ui, learnings, portfolio, web |
| `next` | 16.2.10 | 16.3.6 | learnings, portfolio, web |
| `react` | 19.2.7 | 19.3.0 | @workspace/ui, learnings, portfolio, web |
| `react-dom` | 19.2.7 | 19.3.0 | @workspace/ui, learnings, portfolio, web |
| `react-icons` | 5.5.0 | 5.7.0 | portfolio |
| `uuid` | 14.0.0 | 14.0.2 | @workspace/utils |
| `@types/react` | 19.2.17 | 19.3.0 | @workspace/ui, learnings, portfolio, web |
| `@types/react-dom` | 19.2.3 | 19.3.0 | @workspace/ui, learnings, portfolio, web |
| `@types/node` | 26.1.1 | 26.6.3 | @workspace/ui, learnings, portfolio, web |
| `prettier` | 3.9.5 | 3.9.9 | shadcn-ui-monorepo |
| `turbo` | 2.9.16 | 2.11.4 | shadcn-ui-monorepo |
| `@turbo/gen` | 2.10.5 | 2.11.4 | @workspace/ui |
| `eslint-plugin-turbo` | 2.10.5 | 2.11.4 | @workspace/eslint-config |
| `@typescript-eslint/eslint-plugin` | 8.64.0 | 8.70.1 | @workspace/eslint-config |
| `@typescript-eslint/parser` | 8.64.0 | 8.70.1 | @workspace/eslint-config |
| `typescript-eslint` | 8.64.0 | 8.70.1 | @workspace/eslint-config |
| `eslint-plugin-only-warn` | 1.1.0 | 1.2.1 | @workspace/eslint-config |

## Major upgrades (need testing / migration)

| Package | Wanted | Latest | Dependents | Notes |
| --- | --- | --- | --- | --- |
| `typescript` | 5.9.3 | 7.0.2 | all packages | Breaking; check tsconfig and tooling |
| `zod` | 3.25.76 | 4.6.5 | @workspace/ui | v3 → v4 API changes |
| `eslint` | 9.39.5 | 10.11.0 | @workspace/eslint-config, learnings, web | Flat config / plugin compat |
| `eslint-config-prettier` | 9.1.2 | 10.1.8 | @workspace/eslint-config | |
| `eslint-plugin-react-hooks` | 5.2.0 | 7.1.1 | @workspace/eslint-config | |
| `@next/eslint-plugin-next` | 15.4.5 | 16.3.6 | @workspace/eslint-config | Align with `next` |
| `globals` | 15.15.0 | 17.12.0 | @workspace/eslint-config | |
| `motion` | 12.23.22 | 13.4.4 | portfolio | |
| `react-resizable-panels` | 3.0.6 | 4.14.1 | @workspace/ui | |

## Upgrade commands

```bash
# safe, recursive
pnpm up -r

# safe, interactive
pnpm up -ri

# latest (majors), one at a time
pnpm up -r <package>@latest
```
