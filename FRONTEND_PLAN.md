# FreelanceHub Frontend Development Plan

## Overview
This document outlines the work division for the 4-person frontend team building the FreelanceHub landing page based on the Figma design.

## Work Breakdown

### 🧑‍💻 Person 1: Project Setup, Navigation, and Hero Section
*Focus: Foundational setup and the critical first impression.*
* **Project Initialization:** Set up the repository, framework (e.g., React/Next.js), styling approach (e.g., Tailwind CSS), and define the global color scheme and fonts.
* **Global Header:** Build the navigation bar (Logo, links, Log In / Sign Up buttons) and ensure it is responsive (hamburger menu for mobile).
* **Hero Section:** Build the main headline, the "I'm Hiring" / "I'm Freelancing" toggle state, the search input, and the popular skill tags below it.

### 🧑‍💻 Person 2: Categories & Freelancer Cards (Data & UI Grids)
*Focus: Grid layouts and reusable data-driven components.*
* **Browse Categories Section:** Build the grid of category cards (Web Development, UI/UX, etc.).
* **"All Categories" Modal:** Implement the interaction where clicking "View all" opens the All Categories grid modal.
* **Top Talent Section:** Build the complex freelancer profile cards (including the avatar, badges like "Top Rated", rating stars, skill tags, and pricing).
* **Card Interactions:** Implement the hover effects on these cards (e.g., the `scale(1.02)` hover lift).

### 🧑‍💻 Person 3: Process Flow & CTA Blocks (Interactivity)
*Focus: Sections with specific interactive states and large layout blocks.*
* **"How FreelanceHub Works" Section:** Build the horizontal/vertical process steps.
* **Accordion Logic:** Implement the interaction where clicking the process steps expands/collapses an accordion to show extra detail text.
* **Client vs. Freelancer Cards:** Build the large "For Clients" and "For Freelancers" feature blocks near the bottom of the page.
* **Forms/Modals (Optional):** Build "Step 2 / Step 3" job posting mock forms if applicable.

### 🧑‍💻 Person 4: Trust Elements, Imagery, and Footer
*Focus: Social proof, visual clusters, and footer.*
* **Image Cluster:** Build the overlapping image collage section, including the absolute-positioned "Payment Released" floating badge.
* **Stats Section:** Build the "Trusted by Teams At" logo cloud and the metric cards (2M+ Active Freelancers, 98% Satisfaction, etc.).
* **Global Footer:** Build the footer layout.
* **Footer Interactions:** Implement the generic "Coming Soon" Info modal that triggers when any footer link is clicked.

## Team Guidelines
1. **Component Library:** Agree on whether to build components from scratch or use a library (e.g., shadcn/ui, Material UI).
2. **Mock Data:** Have one person create a shared `data.ts` or `data.json` file early on with fake data for freelancers, categories, and stats so everyone has a single source of truth.
3. **Git Workflow:** Create individual branches for features (e.g., `feature/hero-section`, `feature/footer`) and review each other's Pull Requests before merging.
