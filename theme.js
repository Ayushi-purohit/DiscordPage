// Function to toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}

// Add event listener to the theme toggle button
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', toggleTheme);
