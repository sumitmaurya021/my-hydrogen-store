# Shopify Hydrogen Setup — Error Resolution Log ✓ Resolved

> Setup documentation for creating and running a Shopify Hydrogen Skeleton project using **Node.js v22 + npm**.

**Author:** Sumit Maurya  
**Organization:** Ispark Shopify Apps  
**Date:** June 19, 2026

---

# Environment

| Component | Value |
|-----------|-------|
| Node.js | v22.23.0 (via nvm) ✓ |
| npm | 10.9.8 |
| Package Manager | npm (pnpm not used) |
| Shopify Store | app-development-sumit.myshopify.com |
| Data Source | mock.shop |
| Hydrogen Template | skeleton |
| Language | JavaScript |
| Styling | Tailwind CSS v4 |

---

# Prerequisites

Install the following before starting:

- Node.js v22.x
- npm
- nvm (recommended)
- Git
- VS Code

Verify installation:

```bash
node --version
npm --version
```

Expected:

```bash
v22.23.0
10.9.8
```

---

# Project Creation

Create a Hydrogen Skeleton project:

```bash
npm create @shopify/hydrogen@latest
```

During setup choose:

```text
Template: skeleton

Language: JavaScript

Styling: Tailwind CSS

Data source: Use sample data from mock.shop
```

Do NOT select:

```text
Link your Shopify account
```

if you're using a development store.

---

# Error Timeline & Fixes

## Error 1: Hydrogen Sales Channel Not Available

### Problem

Selecting:

```text
Link your Shopify account
```

showed:

```text
Couldn't access Hydrogen storefronts

The Hydrogen sales channel isn't installed on the store.
```

because:

```text
app-development-sumit.myshopify.com
```

is a development store.

### Fix

Use:

```text
Use sample data from mock.shop
```

instead.

### Why?

Hydrogen Sales Channel requires:

- Paid Shopify plan
- Not available on development/trial stores

---

## Error 2: Node Version Incompatibility

### Problem

Using Node v26 caused:

```text
npm ERR! code EUNSUPPORTEDPROTOCOL

Unsupported URL Type "workspace:": workspace:*
```

Hydrogen doesn't support Node v26.

### Fix

Install nvm:

```bash
nvm install 22

nvm use 22

node --version
```

Expected:

```bash
v22.23.0
```

---

## Error 3: package.json catalog: & workspace: Entries

### Problem

Hydrogen internally uses pnpm.

npm cannot understand:

```json
workspace:*
```

or

```json
catalog:
```

Errors:

```text
No catalog entry '@shopify/prettier-config' found

@shopify/hydrogen: "workspace:*"

react: "catalog:"
```

### Fix

Replace with actual versions.

### Updated Versions

```json
{
  "@shopify/hydrogen": "2026.4.4",

  "@shopify/hydrogen-codegen": "0.3.3",

  "@shopify/mini-oxygen": "4.1.0",

  "react": "^19.1.0",

  "react-dom": "^19.1.0",

  "@types/react": "^19.1.0",

  "@types/react-dom": "^19.1.0",

  "@shopify/prettier-config": "^1.1.2"
}
```

Then run:

```bash
npm install
```

---

## Error 4: Vite Version Incompatible

### Problem

Template shipped with:

```text
vite ^8.0.1
```

but:

```text
@shopify/mini-oxygen@4.1.0
```

supports only:

```text
vite 6.x
```

Error:

```text
The requested module 'vite'
does not provide an export named

'isFetchableDevEnvironment'
```

### Fix

Downgrade Vite:

```bash
npm install vite@6.3.5 --save-dev
```

---

## Error 5: Missing favicon.svg

### Problem

`root.jsx` imports:

```jsx
~/assets/favicon.svg
```

but file didn't exist.

Error:

```text
Cannot find module '~/assets/favicon.svg'
```

### Fix

Create folder:

```bash
app/assets
```

PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path app\assets

Set-Content app\assets\favicon.svg '<svg ...>'
```

---

## Error 6: root.jsx Corruption

### Problem

PowerShell regex replacements accidentally created:

```text
root.js
```

instead of updating:

```text
root.jsx
```

Error:

```text
SyntaxError:

This experimental syntax requires enabling

the parser plugin "jsx"

app/root.js:148:4

<html lang="en">
```

### Fix

Delete corrupted file:

```powershell
Remove-Item app\root.js
```

Keep:

```text
app/root.jsx
```

---

## Error 7: Missing ~ Alias in Vite

### Problem

Imports:

```jsx
~/lib/fragments
```

were failing.

Also duplicate:

```js
resolve
```

blocks were created.

Error:

```text
Cannot find module '~/lib/fragments'

Duplicate key "resolve"
```

### Fix

Manually edit:

```text
vite.config.js
```

Remove duplicates.

Add:

```js
import path from 'path';

resolve: {
  alias: {
    '~': path.resolve('./app')
  }
}
```

---

# Final Working vite.config.js

```javascript
import {defineConfig} from 'vite';
import path from 'path';

import {hydrogen} from '@shopify/hydrogen/vite';

import {oxygen} from '@shopify/mini-oxygen/vite';

import {reactRouter} from '@react-router/dev/vite';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    reactRouter(),
  ],

  resolve: {
    alias: {
      '~': path.resolve('./app'),
    },
  },

  build: {
    assetsInlineLimit: 0,
  },

  ssr: {
    optimizeDeps: {
      include: [
        'react-router > set-cookie-parser',
        'react-router > cookie',
        'react-router',
      ],
    },
  },

  server: {
    allowedHosts: ['.tryhydrogen.dev'],
  },
});
```

---

# Run the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Available URLs

Local App:

```text
http://localhost:3000/
```

GraphiQL:

```text
http://localhost:3000/graphiql
```

Subrequest Profiler:

```text
http://localhost:3000/subrequest-profiler
```

---

# Key Learnings

### 1. Hydrogen requires Node v22 or v24

Do not use:

```text
Node v26
```

Always check:

```json
engines
```

inside package.json.

Use:

```text
nvm
```

to manage Node versions.

---

### 2. Hydrogen uses pnpm internally

`workspace:*`

and

`catalog:`

are pnpm-only features.

If using npm, replace them manually.

---

### 3. Hydrogen Sales Channel requires a paid Shopify plan

Development stores cannot use Hydrogen Sales Channel.

For local development:

```text
Use mock.shop
```

Connect a real store only when the client has a paid plan.

---

### 4. Avoid editing JSX files with PowerShell

Avoid:

```powershell
Set-Content
```

and regex replacements.

Use:

```text
VS Code
```

for source code editing.

---

### 5. Match Vite with mini-oxygen

```text
@shopify/mini-oxygen@4.1.0
```

supports:

```text
vite 6.x
```

If the template installs Vite 8:

```bash
npm install vite@6.3.5 --save-dev
```

---

# Summary

| Item | Value |
|------|-------|
| Errors Resolved | 7 |
| Dev Server Status | Running ✓ |
| Node Version | v22.23.0 |
| Vite Version | v6.3.5 |
| Data Source | mock.shop |
| Package Manager | npm |
| Hydrogen Template | skeleton |

---

# Success ✓

Development server running successfully.

```text
✓ Local: http://localhost:3000/

✓ GraphiQL: http://localhost:3000/graphiql

✓ Profiler: http://localhost:3000/subrequest-profiler
```
