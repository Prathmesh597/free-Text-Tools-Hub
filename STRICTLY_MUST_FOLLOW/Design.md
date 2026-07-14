```markdown
# Frontend Specification Document
## Project Name: Text Tools Hub

**Document Version:** 1.0  
**Role:** Senior UI/UX Designer & Frontend Architect  
**Design Philosophy:** "Editorial Utility" — Inspired by ElevenLabs. The app reads like a quietly designed print magazine. The canvas is off-white, holding warm near-black ink. There is no neon "developer tools" aesthetic. Brand voltage comes from soft pastel atmospheric gradient orbs, while the UI relies on modest type weights, generous whitespace, and pure white content cards. 

---

### 1. Design System & Tokens (Tailwind Configuration)

*Instructions for AI Agent: Implement these exact tokens in `tailwind.config.mjs`.*

#### 1.1 Color Palette
```javascript
colors: {
  // Brand & Action
  primary: "#292524",          // Warm near-black ink (Primary CTAs)
  primaryActive: "#0c0a09",    // Press state
  
  // Surfaces
  canvas: "#f5f5f5",           // Off-white page floor
  canvasSoft: "#fafafa",       // Alternating bands
  surfaceCard: "#ffffff",      // Pure white cards/inputs
  surfaceStrong: "#f0efed",    // Badges, subtle highlights
  
  // Text
  ink: "#0c0a09",              // Display & headings
  body: "#4e4e4e",             // Default running text
  muted: "#777169",            // Sub-titles, placeholders
  mutedSoft: "#a8a29e",        // Disabled states
  
  // Hairlines & Borders
  hairline: "#e7e5e4",         // Default 1px borders
  hairlineStrong: "#d6d3d1",   // Input borders
  
  // Atmospheric Gradients (Decoration ONLY)
  gradientMint: "#a7e5d3",
  gradientPeach: "#f4c5a8",
  gradientLavender: "#c8b8e0",
  gradientSky: "#a8c8e8",
  
  // Semantic
  success: "#16a34a",
  error: "#dc2626"
}
```

#### 1.2 Typography
**Families:** 
- **Display:** `'EB Garamond', 'Times New Roman', serif` (Open-source substitute for Waldenburg. Weight MUST stay at 400/light to mimic weight 300).
- **Body/UI:** `'Inter', sans-serif`.

**Scale & Rules:**
- **Display Mega (H1):** 48px (mobile) / 64px (desktop) / Garamond / Weight 400 / Line-height 1.05 / Letter-spacing -1.92px.
- **Display Large (H2):** 36px / Garamond / Weight 400 / Line-height 1.17 / Letter-spacing -0.36px.
- **Title (H3/Card Headers):** 20px / Inter / Weight 500 / Line-height 1.35.
- **Body (Default):** 16px / Inter / Weight 400 / Line-height 1.5 / Letter-spacing 0.16px.
- **Caption/Badges:** 12px / Inter / Weight 600 / Letter-spacing 0.96px / Uppercase.
- **Buttons/Nav:** 15px / Inter / Weight 500.
*Rule: Never bold the Display serif. It stays light to maintain the editorial voice.*

#### 1.3 Spacing & Layout Rules
- **Base Unit:** 4px.
- **Scale:** 4px (xxs), 8px (xs), 12px (sm), 16px (base), 20px (md), 24px (lg), 32px (xl), 48px (xxl), 96px (section).
- **Container:** Max-width 1200px. Centered. 24px horizontal padding on mobile.
- **Section Rhythm:** 96px vertical padding between major page sections (Hero, Tool Grid, FAQ). 

#### 1.4 Border Radius & Elevation
- **Pills:** `9999px` (Used for ALL buttons and badges).
- **Cards/Inputs:** `8px` (md) for inputs, `16px` (xl) for cards.
- **Shadows:** `0 4px 16px rgba(0, 0, 0, 0.04)` (Used ONLY on hover for cards).
- **Borders:** `1px solid #e7e5e4` (Default hairline for cards).

---

### 2. Component Specifications

#### 2.1 Buttons
*All buttons use `border-radius: 9999px` (pill shape).*
- **Primary:** Background `#292524`, Text `#ffffff`, Padding `10px 20px`, Font 15px/500. Hover: Background `#0c0a09`.
- **Secondary (Outline):** Transparent background, 1px border `#d6d3d1`, Text `#0c0a09`. Hover: Background `#f0efed`.
- **Icon Button (Copy/Clear):** Transparent background, 32px x 32px, icon color `#777169`. Hover: Icon color `#0c0a09`.

#### 2.2 Inputs & Textareas
- **Text Input:** Height 44px, Background `#ffffff`, Border 1px `#d6d3d1`, Border-radius 8px, Padding 12px 16px. Focus: Border changes to 2px `#292524`.
- **Textarea:** Same as input, but min-height 200px, `resize-y` enabled. Font 16px Inter.
- **Checkbox/Toggle:** Custom styled. 16px box, 4px border-radius, checked state background `#292524`.

#### 2.3 Cards (Tool Containers)
- **Tool Card:** Background `#ffffff`, Border 1px `#e7e5e4`, Border-radius 16px, Padding 24px or 32px. 
- **Homepage Feature Card:** Hover state adds `box-shadow: 0 4px 16px rgba(0,0,0,0.04)`.

#### 2.4 Atmospheric Decoration (The Signature)
- **Gradient Orbs:** Absolutely positioned `div`s with radial gradients. `filter: blur(80px)`. Opacity 0.6. Placed behind the homepage hero and subtly in the footer. NEVER used as button fills or text colors.

#### 2.5 Modals/Alerts
- **Error Alert:** Background `#ffffff`, Left border 4px `#dc2626`, Text `#4e4e4e`, Padding 16px, Border-radius 8px.

---

### 3. API & Integration Specification

*Instructions for AI Agent: Since this is a 100% client-side app, there are no backend API calls. All integrations are native Browser APIs or third-party script injections.*

#### 3.1 Native Browser API: Clipboard API
- **Service:** Copy to Clipboard
- **Purpose:** Allows users to copy converted text/formatted JSON instantly.
- **Method:** `navigator.clipboard.writeText(textToCopy)`
- **Payload (Sent):** `string` (The value of the output textarea).
- **Response (Expected):** Promise resolves. UI triggers a temporary state change on the button (e.g., text changes to "Copied!" for 2 seconds, icon changes to a checkmark).

#### 3.2 Native Browser API: Web Speech API
- **Service:** Text-to-Speech Engine
- **Purpose:** Reads user text aloud for the TTS tool.
- **Endpoints/Methods Called:** 
  1. `window.speechSynthesis.getVoices()` (Populates voice dropdown)
  2. `new SpeechSynthesisUtterance(text)` (Creates the audio payload)
  3. `window.speechSynthesis.speak(utterance)` (Executes playback)
- **Payload (Sent):** `string` (User text), `voice` object, `rate` (number), `pitch` (number).
- **Response (Expected):** Audio playback through browser. Fires `onend` event when complete to reset UI Play/Pause buttons.

#### 3.3 Third-Party Integration: Google AdSense
- **Service:** Ad Network Monetization
- **Purpose:** Display contextual ads to earn revenue.
- **Integration Method:** 
  1. Script injection in `<head>` of `MainLayout.astro`: 
     `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>`
  2. Ad Unit placement in `AdSlot.astro` component:
     `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXX" data-ad-slot="XXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  3. Initialization script: `(adsbygoogle = window.adsbygoogle || []).push({});`
- **Data Sent:** Standard AdSense cookies/parameters.
- **Response Expected:** Rendered HTML iframe containing advertisements.

#### 3.4 Third-Party Integration: Google Analytics 4 (GA4)
- **Service:** User Analytics
- **Purpose:** Track page views, tool usage, and bounce rates for AdSense approval.
- **Integration Method:** Standard gtag.js script injection in `<head>`.
- **Data Sent:** Page path, user session ID, referrer.
- **Response Expected:** HTTP 204 No Content (fire-and-forget).

---
### AI Agent Execution Instructions
*When building the UI components, strictly adhere to the "Editorial Utility" philosophy. Use the EB Garamond font (via Google Fonts) for all H1/H2 headings, and Inter for everything else. Ensure textareas and inputs have pure white (`#ffffff`) backgrounds to stand out against the off-white (`#f5f5f5`) page canvas. All interactive buttons must use the pill (9999px) border radius.*
```