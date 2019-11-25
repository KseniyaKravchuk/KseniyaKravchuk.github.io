function parallaxEffect(event) {
    document.querySelectorAll('.parallax-item').forEach(function(item) {
        var speed = item.getAttribute('data-speed');
        item.style.transform = 'translate(' + event.clientX*speed/1000 + 'px,' + event.clientY*speed/1000 + 'px)';
    })
}

document.addEventListener('mousemove', parallaxEffect);