// Shared Mock Data for FreelanceHub

const mockCategories = [
    { id: 1, title: "Web Development", count: "12,400+ freelancers", icon: "💻" },
    { id: 2, title: "UI/UX Design", count: "8,200+ freelancers", icon: "🎨" },
    { id: 3, title: "Mobile Apps", count: "6,800+ freelancers", icon: "📱" },
    { id: 4, title: "Content Writing", count: "9,500+ freelancers", icon: "✍️" }
];

const mockFreelancers = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Full-Stack Developer",
        rating: 4.9,
        reviews: 143,
        rate: "₹2,500/hr",
        skills: ["React", "Node.js", "PostgreSQL"],
        badge: "Top Rated"
    },
    {
        id: 2,
        name: "Arjun Mehta",
        role: "Product Designer",
        rating: 4.8,
        reviews: 97,
        rate: "₹1,800/hr",
        skills: ["Figma", "Prototyping", "Branding"],
        badge: "Rising Star"
    }
];

// Exporting to global window object so it can be easily accessed by main.js
window.appData = {
    categories: mockCategories,
    freelancers: mockFreelancers
};
