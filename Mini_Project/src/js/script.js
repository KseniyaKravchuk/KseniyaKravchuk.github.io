function parallaxEffectScroll() {
    document.querySelectorAll('.parallax-item').forEach(function(item) {
        var speed = item.getAttribute('data-speed');
        item.style.transform = 'translateY(' + pageYOffset*speed/600 + 'px)';
    })
}

function parallaxEffectMove(event) {
    document.querySelectorAll('.parallax-item').forEach(function(item) {
        var speed = item.getAttribute('data-speed');
        item.style.transform = 'translate(' + event.clientX*speed/1000 + 'px,' + event.clientY*speed/1000 + 'px)';
    })
}

if (window.location.href.indexOf('index') > -1) {
    document.removeEventListener('scroll', parallaxEffectScroll);
    document.addEventListener('mousemove', parallaxEffectMove);
} else if (window.location.href.indexOf('views') > -1) {
    document.removeEventListener('mousemove', parallaxEffectMove);
    document.addEventListener('scroll', parallaxEffectScroll);
}
