document.addEventListener('DOMContentLoaded', function() {
    // Show What's New modal on page load
    setTimeout(function() {
        const modal = document.getElementById('whatsNewModal');
        modal.classList.add('show');
    }, 2000);

    // Close modal when clicking the close button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const modal = document.getElementById('whatsNewModal');
            modal.classList.remove('show');
        });
    }

    // Close modal when clicking the Next button
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const modal = document.getElementById('whatsNewModal');
            modal.classList.remove('show');
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('whatsNewModal');
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Tab switching in App World section
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you would typically load different content based on the selected tab
            // For this demo, we'll just log the tab name
            console.log('Selected tab:', this.textContent);
        });
    });

    // Show more button in App World section
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            // Here you would typically load more app cards
            console.log('Loading more apps...');
            // For demo purposes, we'll just show an alert
            alert('More apps would be loaded here in the actual implementation.');
        });
    }
});