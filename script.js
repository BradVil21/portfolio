document.addEventListener("DOMContentLoaded", function() {
    // Get the mission section element
    var missionSection = document.querySelector('.mission');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scroll event
    function handleScroll() {
        if (isInViewport(missionSection)) {
            missionSection.classList.add('visible');
            // Remove the event listener once the animation is triggered
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check to see if the mission section is already in view
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the "fade-in" class
    var fadeElements = document.querySelectorAll('.fade-in');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scroll event
    function handleScroll() {
        fadeElements.forEach(function(element) {
            if (isInViewport(element)) {
                element.classList.add('visible');
                // Remove the event listener once the animation is triggered
                window.removeEventListener('scroll', handleScroll);
            }
        });
    }

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check to see if any of the elements are already in view
    handleScroll();
});
