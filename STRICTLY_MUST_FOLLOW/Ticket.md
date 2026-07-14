
```markdown
# Feature Ticket List
## Project Name: Text Tools Hub

**Document Version:** 1.0  
**Execution Strategy:** Feed each ticket block individually to the AI coding agent. Do not move to the next ticket until the acceptance criteria are met. 

---

### Ticket 1: Project Scaffolding & Core Layout
**Priority:** Must-Have  
**Dependencies:** None  

**Description:**  
Initialize the Astro framework with Tailwind CSS. Create a reusable `MainLayout.astro` that includes global SEO meta tags (dynamic title, description, canonical URL), a Header component (navigation bar), a Footer component, and an `AdSlot.astro` component for future Google AdSense placements. Create a central `tools.json` data file that will drive the homepage and navigation.

**Acceptance Criteria:**  
- [ ] Astro project is initialized with TypeScript (strict) and Tailwind CSS.  
- [ ] `MainLayout.astro` accepts props for `title`, `description`, and `canonicalURL`.  
- [ ] Header and Footer components are created and imported into `MainLayout.astro`.  
- [ ] `AdSlot.astro` component is created but conditionally renders only if an AdSense ID is present (blank for now).  
- [ ] `src/data/tools.json` is created with an array of tool objects (id, name, slug, icon, description).  
- [ ] The development server runs without errors on `localhost:4321`.  

**Prompt for AI Agent:**  
> "Act as a Senior Frontend Engineer. Initialize an Astro project with Tailwind CSS. Create a `MainLayout.astro` that takes props for SEO (title, description, canonicalURL). Build a Header and Footer component and include them in the layout. Create a `tools.json` file in `src/data/` with an array of objects representing text tools (word-counter, case-converter, json-formatter). Create an `AdSlot.astro` component that conditionally renders a placeholder div. Ensure the dev server runs cleanly."

---

### Ticket 2: Word & Character Counter Tool
**Priority:** Must-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build the Word Counter tool page and its core interactive component. The tool must take user text input (textarea) and instantly display the word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time. It must include a "Copy to Clipboard" button and a "Clear" button.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/word-counter.astro` using `MainLayout`.  
- [ ] An interactive UI component (e.g., `WordCounter.tsx` or `.astro` with inline JS) is created.  
- [ ] Word count updates live as the user types or pastes text.  
- [ ] Character count (with/without spaces), sentence count, paragraph count, and reading time (at 200 wpm) are calculated correctly.  
- [ ] "Copy to Clipboard" button uses `navigator.clipboard.writeText()` and provides visual feedback ("Copied!").  
- [ ] "Clear" button resets the textarea.  

**Prompt for AI Agent:**  
> "Build the Word Counter tool for an Astro site. Create a page at `src/pages/tools/word-counter.astro`. Create an interactive component that contains a textarea. Write vanilla JS/TypeScript to calculate live metrics: words, characters (with/without spaces), sentences, paragraphs, and reading time (200 wpm). Add a 'Copy to Clipboard' button using `navigator.clipboard.writeText` that shows 'Copied!' for 2 seconds, and a 'Clear' button. Use Tailwind for a clean, modern UI."

---

### Ticket 3: Case Converter Tool
**Priority:** Must-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build the Case Converter tool. The tool should feature a textarea for input and a series of buttons that instantly convert the text into: UPPERCASE, lowercase, Title Case, Sentence case, and camelCase. The converted text should populate the same textarea or a designated output area, with a copy button.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/case-converter.astro`.  
- [ ] Component includes a textarea input.  
- [ ] Buttons for UPPERCASE, lowercase, Title Case, Sentence case, and camelCase are present.  
- [ ] Clicking a button correctly transforms the text and updates the UI.  
- [ ] Includes a "Copy to Clipboard" button for the converted text.  

**Prompt for AI Agent:**  
> "Build the Case Converter tool for an Astro site. Create a page at `src/pages/tools/case-converter.astro`. Create a component with a textarea and five transformation buttons: UPPERCASE, lowercase, Title Case, Sentence case, and camelCase. Write pure TypeScript functions for each transformation. When a button is clicked, update the textarea with the transformed text. Add a 'Copy to Clipboard' button. Use Tailwind CSS for styling."

---

### Ticket 4: Remove Duplicate Lines Tool
**Priority:** Must-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build a tool that takes a block of text (multiple lines) and removes any duplicate lines. Provide toggle checkboxes for "Case-sensitive" comparison and "Trim whitespace before comparing". Output the cleaned text and show how many duplicates were removed.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/remove-duplicates.astro`.  
- [ ] Textarea for input.  
- [ ] Checkboxes for "Case-sensitive" and "Trim whitespace".  
- [ ] "Process" button executes the deduplication logic based on toggles.  
- [ ] Output area displays cleaned text.  
- [ ] UI displays a message: "Removed X duplicate lines."  
- [ ] "Copy Output" button is included.  

**Prompt for AI Agent:**  
> "Build the Remove Duplicate Lines tool for an Astro site. Create a page at `src/pages/tools/remove-duplicates.astro`. Create a component with a textarea for multi-line input. Add checkboxes for 'Case-sensitive' and 'Trim whitespace'. Add a 'Remove Duplicates' button. Write a TypeScript function that splits the text by newline, applies the trim/case logic based on toggles, removes duplicates using a Set, and outputs the result. Display the count of removed lines. Add a 'Copy Output' button. Style with Tailwind."

---

### Ticket 5: JSON Formatter & Validator Tool
**Priority:** Must-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build a JSON Formatter tool. It should have an input textarea and an output area (or second textarea). Include buttons for "Format/Beautify", "Minify", and "Validate". If the JSON is invalid, display a clear error message highlighting the issue.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/json-formatter.astro`.  
- [ ] Two textareas: Input and Output.  
- [ ] "Format" button beautifies JSON (2-space indentation).  
- [ ] "Minify" button compacts JSON into a single line.  
- [ ] "Validate" button checks syntax and returns success or an error message.  
- [ ] Invalid JSON triggers a visible error alert (e.g., red text) without crashing the app.  
- [ ] "Copy Output" button is included.  

**Prompt for AI Agent:**  
> "Build a JSON Formatter & Validator tool for an Astro site. Create a page at `src/pages/tools/json-formatter.astro`. Create a component with two textareas (Input and Output) and three buttons: Format, Minify, and Validate. Use `JSON.parse` and `JSON.stringify` for operations. Wrap logic in try/catch blocks to display user-friendly error messages (in red text) if the JSON is invalid. Add a 'Copy Output' button. Style with Tailwind."

---

### Ticket 6: Base64 Encode / Decode Tool
**Priority:** Must-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build a tool that encodes plain text to Base64 and decodes Base64 back to plain text. Include a textarea, two buttons ("Encode" and "Decode"), and handle potential decoding errors gracefully.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/base64-encoder.astro`.  
- [ ] Single textarea for input/output.  
- [ ] "Encode to Base64" button uses `btoa()`.  
- [ ] "Decode from Base64" button uses `atob()`.  
- [ ] Handles UTF-8 characters correctly (optional but preferred).  
- [ ] Decoding errors are caught and displayed to the user without crashing.  
- [ ] "Copy" and "Clear" buttons included.  

**Prompt for AI Agent:**  
> "Build a Base64 Encode/Decode tool for an Astro site. Create a page at `src/pages/tools/base64-encoder.astro`. Create a component with a single textarea, an 'Encode' button, and a 'Decode' button. Use native JS `btoa()` and `atob()`. Ensure errors are caught (e.g., trying to decode invalid Base64) and show an error message to the user. Add 'Copy' and 'Clear' buttons. Style with Tailwind."

---

### Ticket 7: Find and Replace Text Tool
**Priority:** Must-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build a Find & Replace tool. The user pastes text into a main textarea. They enter a "Find" string and a "Replace with" string. Include options for "Match Case" and "Use Regex". Clicking "Replace All" updates the main textarea with the changes and shows how many replacements were made.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/find-and-replace.astro`.  
- [ ] Main textarea for text.  
- [ ] Inputs for "Find" and "Replace".  
- [ ] Checkboxes for "Match Case" and "Regex".  
- [ ] "Replace All" button executes the replacement.  
- [ ] If Regex is checked and the pattern is invalid, show an error.  
- [ ] UI shows "Replaced X instances."  

**Prompt for AI Agent:**  
> "Build a Find and Replace Text tool for an Astro site. Create a page at `src/pages/tools/find-and-replace.astro`. Create a component with a main textarea, two input fields ('Find' and 'Replace'), and checkboxes for 'Match Case' and 'Use Regex'. Add a 'Replace All' button. Write a TypeScript function that uses String.replace() with a dynamic RegExp based on the user's inputs. Handle invalid regex errors gracefully. Display the number of replacements made. Style with Tailwind."

---

### Ticket 8: Homepage & Tool Grid UI
**Priority:** Must-Have  
**Dependencies:** Tickets 1-7 (Tools must exist to link to)  

**Description:**  
Build the homepage (`index.astro`). It should dynamically read from `tools.json` and render a grid of cards. Each card should link to the respective tool's page, display an icon, the tool name, and a short description. Include SEO-optimized H1 and intro text.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/index.astro`.  
- [ ] H1 tag: "Free Online Text Tools Hub".  
- [ ] 300-word SEO intro paragraph below the H1.  
- [ ] Grid layout generated by mapping over `tools.json`.  
- [ ] Each card links to the correct `/tools/{slug}` URL.  
- [ ] Fully responsive (1 column on mobile, 3-4 columns on desktop).  

**Prompt for AI Agent:**  
> "Build the Homepage for an Astro site at `src/pages/index.astro`. Import the `tools.json` data. Create an H1 tag 'Free Online Text Tools' and a dummy SEO-optimized paragraph. Below that, map over the tools data to render a responsive grid of cards using Tailwind CSS. Each card must be an anchor tag linking to `/tools/${slug}`, displaying the tool's name and description. Make it 1 column on mobile, 2 on tablet, 3 on desktop."

---

### Ticket 9: Legal & Compliance Pages
**Priority:** Must-Have  
**Dependencies:** Ticket 1  

**Description:**  
Create static pages for About Us, Contact Us, Privacy Policy, and Terms of Service. These are strictly required for Google AdSense approval. The Privacy Policy must explicitly state that all text processing is done client-side and no user data is stored on servers.

**Acceptance Criteria:**  
- [ ] Pages created: `about.astro`, `contact.astro`, `privacy.astro`, `terms.astro`.  
- [ ] All pages use `MainLayout`.  
- [ ] Privacy Policy includes a section stating: "Text Tools Hub operates entirely in your browser. We do not transmit, store, or collect any text inputted into our tools."  
- [ ] Footer contains links to all four pages.  

**Prompt for AI Agent:**  
> "Create four static pages in an Astro project: `src/pages/about.astro`, `contact.astro`, `privacy.astro`, and `terms.astro`. Use the existing `MainLayout`. For the Privacy Policy, include a specific clause stating: 'Text Tools Hub operates entirely in your browser. We do not transmit, store, or collect any text inputted into our tools.' Add generic placeholder text for the rest of the legal pages and About/Contact pages. Update the Footer component to include links to these four pages."

---

### Ticket 10: Lorem Ipsum Generator
**Priority:** Nice-to-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build a tool that generates dummy Lorem Ipsum text. User selects if they want output by Paragraphs, Sentences, or Words, and inputs a quantity. Clicking "Generate" outputs the text.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/lorem-ipsum-generator.astro`.  
- [ ] Dropdown for unit type (Paragraphs, Sentences, Words).  
- [ ] Number input for quantity.  
- [ ] "Generate" button outputs correctly formatted dummy text.  
- [ ] "Copy" button included.  

**Prompt for AI Agent:**  
> "Build a Lorem Ipsum Generator for an Astro site at `src/pages/tools/lorem-ipsum-generator.astro`. Create a component with a dropdown to select generation type (Paragraphs, Sentences, Words) and a number input for quantity. Write a TypeScript function that contains an array of standard Lorem Ipsum words and randomizes/generates the output based on the selected quantity and type. Output to a readonly textarea. Add a 'Copy' button. Style with Tailwind."

---

### Ticket 11: Text-to-Speech Tool
**Priority:** Nice-to-Have  
**Dependencies:** Ticket 1  

**Description:**  
Build a Text-to-Speech tool using the native browser Web Speech API. User pastes text, selects a voice from a dropdown, and clicks Play. Include Pause and Stop controls.

**Acceptance Criteria:**  
- [ ] Page created at `src/pages/tools/text-to-speech.astro`.  
- [ ] Textarea for input.  
- [ ] Dropdown populated with available system voices (`window.speechSynthesis.getVoices()`).  
- [ ] Play, Pause, and Stop buttons function correctly using `SpeechSynthesisUtterance`.  
- [ ] UI indicates when speech is active.  

**Prompt for AI Agent:**  
> "Build a Text-to-Speech tool for an Astro site at `src/pages/tools/text-to-speech.astro`. Create a component with a textarea, a dropdown for voice selection, and Play, Pause, and Stop buttons. Use the native browser `window.speechSynthesis` API. Write JS to load available voices into the dropdown dynamically. Implement the Play, Pause, and Stop functions using `SpeechSynthesisUtterance`. Style with Tailwind CSS."
```