const wrapper = document.querySelector('.wrapper');
const images = document.querySelectorAll('.ig');
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');

let currentIndex = 0;
let animationRunning = true; // Track if keyframe animation is running

// Function to stop keyframe animation
function stopAnimation() {
    animationRunning = false;
    wrapper.style.animation = 'none'; // Stop the CSS keyframe animation
}

// Function to update slide position
function updateSlidePosition() {
    const slideWidth = images[0].clientWidth; // Calculate image width
    wrapper.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
    wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
    if (animationRunning) stopAnimation(); // Stop animation on first interaction
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first slide
    updateSlidePosition();
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    if (animationRunning) stopAnimation(); // Stop animation on first interaction
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last slide
    updateSlidePosition();
});

// Handle window resize to maintain responsive design
window.addEventListener('resize', updateSlidePosition);
