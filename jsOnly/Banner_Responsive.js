
const video = document.getElementById('bannerVideo');
const source = document.getElementById('videoSource');

function updateVideoSource() {
    if (window.innerWidth <= 768) {
        source.src = 'assets/typebanner/3.mp4'; // Mobile video
    } else {
        source.src = 'assets/typebanner/5.mp4'; // Desktop video
    }
    video.load(); // Reload the video
}

// Stop video from looping (not necessary anymore since loop attribute is removed)
video.addEventListener('ended', () => {
    video.pause(); // Not strictly necessary since it will automatically stop at the end
});

// Initial check
updateVideoSource();

// Add event listener for window resize
window.addEventListener('resize', updateVideoSource);

