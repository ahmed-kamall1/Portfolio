const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        
    });
});
tabButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        
        // Remove "active" class from all buttons
        tabButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        
        // Add "active" class to the button that was just clicked
        button.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(function(content) {
            content.classList.add('hidden');
        });
        
        // Show only the matching content
        const targetTab = button.getAttribute('data-tab');
        document.getElementById(targetTab + '-content').classList.remove('hidden');
        
    });
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(function() {
        loader.classList.add('fade-out');
    }, 800);
});