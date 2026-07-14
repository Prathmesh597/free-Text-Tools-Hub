Technical Architecture Document
Project Name: Text Tools Hub
Architecture Type: JAMstack (Static Site Generation) / 100% Client-Side

1. System Overview & Architecture Philosophy
Text Tools Hub is designed as a stateless, static web application. The core philosophy is "Zero Backend, Maximum Edge." By generating static HTML pages and executing all text manipulation logic directly in the user's browser, we achieve near-zero latency, absolute data privacy, and $0 server hosting costs. This architecture scales infinitely without requiring load balancers or databases.

2. Recommended Tech Stack & Reasoning
Framework: Astro
Reasoning: Astro is the ultimate framework for SEO-focused, content-heavy static sites. It outputs pure, zero-JavaScript HTML by default, resulting in perfect Google Lighthouse scores. We can selectively add JavaScript ("Islands Architecture") only to the specific text tool components that need interactivity, keeping the bundle size microscopic.
Styling: Tailwind CSS
Reasoning: Allows for rapid UI development without context-switching between CSS files. It purges unused CSS in production, ensuring the final stylesheet is only a few kilobytes.
Language: TypeScript
Reasoning: Provides type safety for complex string manipulation logic (e.g., JSON parsing, Regex operations), reducing runtime errors significantly.
Hosting & CI/CD: Vercel (or Netlify)
Reasoning: Free tier supports custom domains, automated SSL certificates, and global CDN deployment directly via GitHub integration.
Analytics: Google Search Console + Plausible (or GA4)
Reasoning: Essential for tracking SEO indexing status and user acquisition for AdSense approval.
3. Database Schema & Data Management
CRITICAL NOTE: As defined in the PRD, THERE IS NO DATABASE.

Because all operations are 100% client-side, we do not store user data, text inputs, or generated outputs on any server. However, for state management and future scalability, we define the following client-side "Data Models" and storage strategies:

3.1. Client-Side Storage: localStorage
We use the browser's localStorage to remember non-sensitive user preferences.

Key: texthub_preferences
Value (JSON):
{  "theme": "light",   "lastUsedTool": "/word-counter"}
3.2. Tool Configuration Data Model (Static JSON)
To make the app easily extensible, the metadata for each tool is defined in a central static JSON file (/src/data/tools.json). This drives the homepage rendering and the navigation menu.

[  {    "id": "word-counter",    "name": "Word Counter",    "slug": "word-counter",    "icon": "file-text",    "description": "Instantly count words, characters, sentences, and reading time.",    "keywords": ["word count", "character count", "reading time"]  }]
3.3. State Flow (Per Tool Component)
Input State: string (User pasted text).
Options State: object (e.g., { caseSensitive: true } for duplicate remover).
Output State: string or object (Resulting text or error message).
All state is managed locally within the UI component and destroyed when the user navigates away or closes the tab.
4. Complete File & Folder Structure
The project follows a standard Astro/Next.js static project structure, optimized for SEO and component reusability.

text

text-tools-hub/
├── public/
│   ├── favicon.svg
│   ├── robots.txt              # SEO: Allows all crawlers
│   └── sitemap.xml             # SEO: Generated at build time
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro    # Global nav bar with tool links
│   │   │   ├── Footer.astro    # Links to Privacy, Terms, About
│   │   │   └── AdSlot.astro    # Reusable component for Google AdSense units
│   │   ├── ui/
│   │   │   ├── Button.tsx      # Reusable button (React/Vue/Vanilla)
│   │   │   ├── Textarea.tsx    # Reusable input area
│   │   │   └── CopyButton.tsx  # "Copy to Clipboard" logic
│   │   └── tools/              # Individual tool UI components
│   │       ├── WordCounter.tsx
│   │       ├── CaseConverter.tsx
│   │       └── JsonFormatter.tsx
│   ├── data/
│   │   └── tools.json          # Central registry of all tools (See 3.2)
│   ├── layouts/
│   │   └── MainLayout.astro    # Base HTML shell: <head>, meta tags, AdSense script
│   ├── lib/                    # Core utility logic (100% pure TypeScript functions)
│   │   ├── textProcessing.ts   # Word count, case conversion, duplicate removal
│   │   ├── jsonProcessing.ts   # JSON minify, beautify, validate
│   │   └── encoding.ts         # Base64 encode/decode
│   ├── pages/
│   │   ├── index.astro         # Homepage: Grid of all tools
│   │   ├── about.astro         # Company page (AdSense requirement)
│   │   ├── contact.astro       # Contact page (AdSense requirement)
│   │   ├── privacy.astro       # Privacy Policy (AdSense requirement)
│   │   ├── terms.astro         # Terms of Service (AdSense requirement)
│   │   └── tools/              # Dynamic/Static tool routes
│   │       ├── word-counter.astro
│   │       ├── case-converter.astro
│   │       ├── remove-duplicates.astro
│   │       ├── json-formatter.astro
│   │       ├── base64-encoder.astro
│   │       └── find-and-replace.astro
│   └── styles/
│       └── global.css          # Tailwind directives & global resets
├── astro.config.mjs            # Astro configuration (SEO integrations)
├── tailwind.config.mjs         # Tailwind theme config
├── package.json
├── tsconfig.json
└── .env                        # Environment variables (See Section 5)
5. Environment Variables & Configuration Notes
Before starting development, create a .env file in the root directory. Because there is no backend, these variables are primarily used for analytics and monetization scripts injected into the static HTML <head>.

env

# .env file

# Google AdSense Publisher ID (e.g., ca-pub-1234567890123456)
# Leave blank during MVP build; add when AdSense is approved.
PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX

# Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)
# Optional, but highly recommended for tracking user behavior.
PUBLIC_GA4_ID=G-XXXXXXXXXX

# Public Site URL (Used for canonical tags and sitemap generation)
PUBLIC_SITE_URL=https://your-app-name.vercel.app
Configuration Notes for AI Agent:
SEO Meta Tags: Ensure MainLayout.astro accepts props for title, description, and canonicalURL so each page has unique, optimized meta tags.
AdSense Script: The AdSense script tag should be placed in the <head> of MainLayout.astro, using the PUBLIC_ADSENSE_CLIENT_ID variable. It should only render in production environments.
Client/Server Boundary: All files in /src/lib/ must be pure functions. They must NOT use Node.js APIs (like fs or path). They must be importable directly into client-side components.
Copy to Clipboard: Implement the navigator.clipboard.writeText() API for all "Copy" buttons. Provide user feedback (e.g., changing button text to "Copied!" for 2 seconds).
AI Agent Execution Instructions
When scaffolding this project, initialize Astro with the TypeScript (strict) template. Add Tailwind CSS via the Astro integration. Create the folder structure defined in Section 4. Build the MainLayout and tools.json data structure first, before building any individual tool components.
```