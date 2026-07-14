Product Requirements Document (PRD)
Project Name: Text Tools Hub

1. Executive Summary
What the app does:
Text Tools Hub is a 100% free, web-based suite of lightweight, instant-utility text manipulation tools. It operates entirely client-side (in the user's browser) ensuring maximum privacy, zero latency, and zero server costs.

Problem it solves:
Writers, developers, students, and marketers frequently need to perform quick text operations (counting words, formatting JSON, removing duplicate lines). Existing tools are often bloated with ads, slow, require server uploads (privacy risk), or are scattered across different websites.

Solution:
A single, fast, clean, and SEO-optimized hub offering all essential text tools. By processing everything client-side, the tool is instant and secure.

2. Target Audience
Content Writers/Marketers: Need word counters, case converters, and lorem ipsum generators.
Developers: Need JSON formatters, Base64 encoders/decoders.
Students: Need word counters for essays, text-to-speech for studying.
Data Entry/Analysts: Need duplicate line removers and find-and-replace tools.
3. Technical Constraints & Architecture (Crucial for AI Agent)
Budget: $0. No paid APIs, no backend servers, no databases.
Tech Stack: Vanilla HTML/CSS/JS or Astro/Next.js (Static Export). Tailwind CSS for styling.
Processing: 100% Client-side. NO data is ever uploaded to a server.
Hosting: Vercel, Netlify, or GitHub Pages.
SEO Structure: Each tool MUST live on its own dedicated URL (e.g., /word-counter, /json-formatter) to capture search engine traffic. Do NOT build a single-page app with tabs.
4. Core Features (Must-Have vs. Nice-to-Have)
Must-Have (MVP)
Word & Character Counter
Features: Live count of words, characters, sentences, paragraphs, and estimated reading time.
Case Converter
Features: Buttons for UPPERCASE, lowercase, Title Case, Sentence case, and camelCase.
Remove Duplicate Lines
Features: Textarea input, option to trim whitespace, option to make case-sensitive, output cleaned text.
JSON Formatter & Validator
Features: Input area, "Format" (Beautify), "Minify", and "Validate" buttons. Show error messages if JSON is invalid.
Base64 Encode / Decode
Features: Two textareas (Plain Text <-> Base64). Live conversion or button-triggered.
Find and Replace Text
Features: Inputs for "Find" and "Replace with". Options for "Match Case" and "Regex".
Nice-to-Have (Post-MVP)
Lorem Ipsum Generator
Features: Generate by paragraphs, sentences, or words.
Text-to-Speech (TTS)
Features: Utilize the native browser Web Speech API (window.speechSynthesis). Dropdown for voice selection, Play/Pause/Stop buttons.
Markdown Previewer
Features: Split screen, write MD on left, live HTML preview on right.
5. User Flow (Start to Finish)
Acquisition: User searches Google for "online word counter" and lands on texthub.com/word-counter.
Landing: User sees a clean interface. A short 300-word SEO intro paragraph explains the tool. Below it is the tool input area.
Action: User pastes text into the textarea.
Instant Feedback: The tool instantly processes the text (e.g., live word count updates as they type/paste).
Output: User sees the results or receives the converted text. They click a "Copy to Clipboard" button.
Exploration: User notices a top navigation bar linking to "Other Tools". They click "JSON Formatter" to continue their workflow.
Exit / Monetization: Before leaving, user may interact with non-intrusive Google AdSense placements (Top Banner, Sidebar, or In-content).
6. MVP Definition
The MVP is a deployed, static website consisting of:

A Homepage listing all Must-Have tools with links to them.
6 dedicated tool pages (Word Counter, Case Converter, Remove Duplicates, JSON Formatter, Base64, Find & Replace).
Core legal/company pages: About Us, Contact Us, Privacy Policy (stating no data is collected), Terms of Service.
Responsive design (works flawlessly on mobile and desktop).
Basic on-page SEO (H1 tags, meta titles, meta descriptions, FAQ schema below each tool).
7. Success Metrics
Technical: 100% Lighthouse Performance score. 0 server costs. Loads in < 1 second.
SEO/Traffic: Indexed by Google Search Console within 7 days of deployment.
Monetization: Approved for Google AdSense within 30 days of launch.
User Engagement: Average time on page > 2 minutes (measured via Google Analytics).
8. Out of Scope (What we are NOT building in v1)
To ensure rapid deployment and $0 cost, we are explicitly NOT building:

User Accounts/Logins: No need for authentication.
Backend/Database: No saving documents, no user history, no server-side processing.
AI Integration: No OpenAI/Gemini API integrations for v1. Stick to deterministic JavaScript logic.
File Uploads: Users will copy/paste text rather than uploading .txt or .docx files.
Dark Mode: Can be added later, but not a priority for MVP launch.
AI Agent Instructions
When building this project, structure the file system to accommodate multiple static pages. Create a reusable "Layout" component containing the Header, Footer, and AdSense placeholders. Ensure all JavaScript logic for the text tools runs strictly in the browser.