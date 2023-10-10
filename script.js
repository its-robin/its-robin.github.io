document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Show the selected section when a menu item is clicked
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Hide all sections
                sections.forEach(section => {
                    section.style.display = 'none';
                });

                // Show the selected section
                targetElement.style.display = 'block';

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
