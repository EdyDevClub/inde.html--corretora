window.addEventListener('scroll', function() {
    var videoSection = document.querySelector('.video-section');
    var rect = videoSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        videoSection.classList.add('visible');
    }
});
