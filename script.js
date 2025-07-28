// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const resumeLink = document.getElementById('resume-link');
// Open Resume in New Tab
if (resumeLink) {  
    resumeLink.addEventListener('click', (e) => {
        e.preventDefault();
        const resumeUrl = resumeLink.getAttribute('href');
        window.open(resumeUrl, '_blank');
    });
}

// Show/Hide Back-to-Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll Back to Top
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Dark Mode Toggle
// const darkModeToggle = document.getElementById('dark-mode-toggle');

// // Add Event Listener to Toggle Button
// darkModeToggle.addEventListener('click', () => {
//     // Toggle dark-mode class on body
//     document.body.classList.toggle('dark-mode');

//     // Toggle dark-mode class on other elements
//     const navbar = document.querySelector('.navbar');
//     const cards = document.querySelectorAll('.card');
//     const buttons = document.querySelectorAll('.btn');

//     if (navbar) navbar.classList.toggle('dark-mode');
//     cards.forEach(card => card.classList.toggle('dark-mode'));
//     buttons.forEach(button => button.classList.toggle('dark-mode'));
// });


// // Check for Dark Mode Preference on Page Load
// if (localStorage.getItem('dark-mode') === 'enabled') {
//     document.body.classList.add('dark-mode');
//     document.querySelector('.navbar').classList.add('dark-mode');
//     document.querySelectorAll('.card').forEach(card => card.classList.add('dark-mode'));
//     document.querySelectorAll('.btn').forEach(button => button.classList.add('dark-mode'));
// }

// // Toggle Dark Mode and Save Preference
// darkModeToggle.addEventListener('click', () => {
//     const isDarkMode = document.body.classList.toggle('dark-mode');

//     document.querySelector('.navbar').classList.toggle('dark-mode');
//     document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
//     document.querySelectorAll('.btn').forEach(button => button.classList.toggle('dark-mode'));

//     // Save preference to localStorage
//     if (isDarkMode) {
//         localStorage.setItem('dark-mode', 'enabled');
//     } else {
//         localStorage.removeItem('dark-mode');
//     }
// });

