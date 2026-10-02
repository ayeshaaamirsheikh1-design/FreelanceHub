# FreelanceHub Development Phases

This document outlines the step-by-step development phases for the frontend team to ensure a smooth, conflict-free building process.

## Phase 1: Foundation & Setup (Days 1-2)
**Goal:** Get the project environment ready and establish shared resources.
* **Project Initialization (Person 1):** Set up the framework (React/Next.js), Tailwind CSS (or chosen UI library), and the Git repository.
* **Global Styles & Theme (Person 1):** Define color variables, fonts, and basic typography in the global CSS based on the Figma design.
* **Mock Data Creation (Person 2):** Create a shared `data.json` or `data.ts` file containing dummy data for freelancers, job categories, and metrics.
* **Component Skeleton (Person 3 & 4):** Set up empty folder structures for `/components`, `/pages`, `/assets`, and `/hooks`.

## Phase 2: Building Independent UI Components (Days 3-5)
**Goal:** Each team member builds their assigned UI components in isolation (using placeholder data).
* **Person 1:** Build the `<Navbar />` (including mobile menu) and the `<HeroSection />` with the toggle and search bar.
* **Person 2:** Build the `<CategoryCard />`, `<FreelancerProfileCard />`, and the grid layouts for these sections.
* **Person 3:** Build the `<ProcessSteps />` accordion component and the large `<ClientFreelancerCTA />` cards.
* **Person 4:** Build the `<ImageCluster />`, `<StatsCloud />`, and the global `<Footer />`.

## Phase 3: Interactivity & State Management (Days 6-7)
**Goal:** Wire up interactivity, modals, and local state.
* **Person 1:** Implement the "I'm Hiring" / "I'm Freelancing" toggle state logic.
* **Person 2:** Add hover effects (`scale(1.02)`) and build the "All Categories" grid modal logic.
* **Person 3:** Implement the expand/collapse logic for the Process Steps accordion.
* **Person 4:** Wire up the generic "Coming Soon" Info modal to trigger on footer links.

## Phase 4: Assembly & Integration (Days 8-9)
**Goal:** Combine all individual sections into the main `App.tsx` or `index` page.
* **All Team Members:** 
  * Merge feature branches into the main `develop` branch.
  * Resolve any merge conflicts together.
  * Arrange the components sequentially on the main landing page.
  * Pass the shared mock data down to components as props.

## Phase 5: Polish, Testing, and Deployment (Day 10)
**Goal:** Final review and taking the site live.
* **Responsive Audit:** Test the site on mobile, tablet, and desktop views. Fix any layout breaks.
* **Performance & Accessibility:** Ensure images are optimized, contrast is accessible, and buttons are keyboard-navigable.
* **Deployment:** Deploy the frontend to Vercel, Netlify, or another chosen hosting platform.
