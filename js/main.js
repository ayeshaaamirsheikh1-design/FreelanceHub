// Main JavaScript File

document.addEventListener("DOMContentLoaded", () => {
    console.log("FreelanceHub loaded successfully!");
    console.log("Mock data available:", window.appData);

    // ==========================================
    // Person 1: Navigation & Hero Section Logic
    // ==========================================
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });
    }

    // Hero Section Toggle (Hiring vs Freelancing)
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const searchInput = document.getElementById('hero-search');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            
            const type = e.target.getAttribute('data-type');
            
            // Change the search placeholder text based on the toggle
            if (searchInput) {
                if (type === 'hiring') {
                    searchInput.placeholder = 'Search skills — React, Figma, Python...';
                } else {
                    searchInput.placeholder = 'Search jobs — Frontend, UI Design...';
                }
            }
        });
    });

    
    // ==========================================
    // Person 2: Categories & Top Talent Render
    // ==========================================
    // TODO: Add function to loop through window.appData.categories and inject HTML
    // TODO: Add function to loop through window.appData.freelancers and inject HTML

    
    // ==========================================
    // Person 3: Process Steps
    // ==========================================
    // TODO: Add expand/collapse accordion logic


    // ==========================================
    // Person 4: Modals
    // ==========================================
    // TODO: Add event listener to footer links to open 'Coming Soon' modal
});
