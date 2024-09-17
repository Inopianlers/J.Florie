document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.ColorofMenu');
    const mobileDropdown = document.querySelector('.mobile-dropdown');

    // Function to toggle the dropdown menu
    function toggleDropdown() {
        mobileDropdown.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    }

    // Toggle the dropdown when the burger icon is clicked
    burgerIcon.addEventListener('click', (event) => {
        toggleDropdown();
        event.stopPropagation(); // Prevent event from bubbling up to the document
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!mobileDropdown.contains(event.target) && !burgerIcon.contains(event.target)) {
            mobileDropdown.classList.remove('active');
            burgerIcon.classList.remove('active');
        }
    });

    // Prevent the dropdown from closing when clicking inside it
    mobileDropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to the document
    });

    // Handle collapsible sections
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.style.display === 'block';
            document.querySelectorAll('.collapsible-content').forEach(content => {
                content.style.display = 'none'; // Hide all contents
            });
            content.style.display = isActive ? 'none' : 'block'; // Toggle current content
        });
    });
});