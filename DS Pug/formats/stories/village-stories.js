(function() {
    var autoPlayIsPlaying = false;
    var _isMobile = mobilecheck();
    var steps = 3;
    var currentSlide = 1;
    var slider;
    var slides;
    var video;
    var button;
    var closeModalBtn;
    var timelines = [].slice.call(document.querySelectorAll('.hpmd_timelines>div'));
    var autoPlayControl = initAutoPlay(2500, function (progress) {
        timelines[currentSlide - 1].style.width = (100 * progress) + '%';

        if (progress === 1) {
            showNextSlide();
        }
    });
    var bannerContainer = document.querySelector('.hpmd_banner-container');
    var isPlaying = false;

    function findTimelines() {
        for (var i = 1; i <= steps; i++) {
            timelines.push(document.getElementsByClassName('hpmd_timeline' + i)[1])
        }

        return timelines
    };

    function clearTimeline(timeline) {
        timeline.classList.add('hpmd_timeline-invisible');
        timeline.classList.remove('hpmd_timeline-animate');
    }

    function animateTimeline(timeline) {
        timeline.classList.remove('hpmd_timeline-invisible');
        timeline.classList.add('hpmd_timeline-animate');
    }

    function fillTimeline(timeline) {
        timeline.classList.toggle("hpmd_timeline-invisible", false);
        timeline.classList.add('hpmd_timeline-visible');
        timeline.classList.remove('hpmd_timeline-animate');
    }

    let timeoutId;
    function autoPlay(step) {
        if (step < 4) {

            animateTimeline(timelines[step - 1]);

            if (step < 3) {
                timeoutId = setTimeout(function () {
                    slider.style.left = -step * 100 + '%';
                    currentSlide++;
                    autoPlay(step + 1);
                }, 6000)
            }

            if (currentSlide === 3) {
                setTimeout(function () {
                    slider.style.left = '0%';
                    currentSlide = 1;
                    for (let i = 0; i < steps; i++) {
                        clearTimeline(timelines[i]);
                    }
                    //clearTimeout(timeoutId);
                    // setTimeout(autoPlay, 100, curresntSlide)
                }, 6000);
            }
        }
    }

    function startArrowsWork() {
        const left_arrow = document.getElementById('hpmd_navigation-prev');
        const right_arrow = document.getElementById('hpmd_navigation-next');
        left_arrow.addEventListener('click', showPrevSlide);
        right_arrow.addEventListener('click', showNextSlide);
    }

    function capitilize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    function setTransform(node, value) {
        var transform = 'transform';
        var capTransform = capitilize(transform);
        var prefix = ['webkit', 'moz', 'o', ''];
        var prop = '';

        prefix.forEach(function (prefix) {
            prop = (prefix != '') ? (prefix + capTransform) : transform;
            node.style[prop] = value;
        });
    }
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemHalfHeight = rect.height * .5;
        var elemTop = rect.top + elemHalfHeight;
        var elemBottom = rect.bottom - elemHalfHeight;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        return isVisible;
    }

    function showPrevSlide() {
        if (currentSlide === steps) {
            setTransform(slides[0], 'translate3d(' + 100 * steps + '%, 0%, 0)');
        } else {
            setTransform(slides[0], 'translate3d(0%, 0%, 0)');
        }
        if (currentSlide === 1) {
            setTransform(slides[steps - 1], 'translate3d(' + (-100 * steps) + '%, 0%, 0)');
        } else {
            setTransform(slides[steps - 1], 'translate3d(0%, 0%, 0)');
        }
        autoPlayControl.stop();
        if (currentSlide === 1) {
            setTransform(slider, 'translate3d(' + (-100 / steps * -1) + '%, 0%, 0)');
            setTimeout(function () {
                slider.classList.add('hpmd-no-transition');
                setTransform(slides[steps - 1], 'translate3d(0%, 0%, 0)');
                setTransform(slider, 'translate3d(' + (-100 / steps * (steps - 1)) + '%, 0%, 0)');
                timelines[currentSlide - 1].classList.remove('hpmd-active');
                currentSlide = steps;
                if (currentSlide === 2 && isScrolledIntoView(video)) {
                    video.play();
                    isPlaying = true;
                    autoPlayControl.stop();
                } else {
                    video.pause();
                    video.currentTime = 0;
                    isPlaying = false;
                    timelines[currentSlide - 1].removeAttribute('style');
                    timelines.slice(0, -1).forEach(function (item) {
                        item.classList.add('hpmd-active');
                    });
                    setTimeout(function () {
                        slider.classList.remove('hpmd-no-transition');
                    }, 50);
                    autoPlayControl.start();
                }
                
            }, 410);
        } else {
            setTransform(slider, 'translate3d(' + (-(currentSlide - 2) * (100 / steps) + '%') + ', 0%, 0)');
            timelines[currentSlide - 1].removeAttribute('style');
            currentSlide--;
            timelines[currentSlide - 1].classList.remove('hpmd-active');
            setTimeout(function () {
                // autoPlayControl.start();
                if (currentSlide === 2 && isScrolledIntoView(video)) {
                    video.play();
                    isPlaying = true;
                } else {
                    video.pause();
                    video.currentTime = 0;
                    isPlaying = false;
                }
            }, 410);
        }
    }

    function showNextSlide() {
        if (currentSlide === steps) {
            setTransform(slides[0], 'translate3d(' + 100 * steps + '%, 0%, 0)');
        } else {
            setTransform(slides[0], 'translate3d(0%, 0%, 0)');
        }
        if (currentSlide === 1) {
            setTransform(slides[steps - 1], 'translate3d(' + (-100 * steps) + '%, 0%, 0)');
        } else {
            setTransform(slides[steps - 1], 'translate3d(0%, 0%, 0)');
        }
        autoPlayControl.stop();
        if (currentSlide === steps) {
            setTransform(slider, 'translate3d(' + (-100) + '%, 0%, 0)');
            setTimeout(function () {
                slider.classList.add('hpmd-no-transition');
                timelines.forEach(function (timeline) {
                    timeline.classList.remove('hpmd-active');
                    timeline.removeAttribute('style');
                });
                setTransform(slides[0], 'translate3d(0%, 0%, 0)');
                setTransform(slider, 'translate3d(0%, 0%, 0)');
                currentSlide = 1;
                if (currentSlide === 2 && isScrolledIntoView(video)) {
                    video.play();
                    isPlaying = true;
                    autoPlayControl.stop();
                } else {
                    video.pause();
                    video.currentTime = 0;
                    isPlaying = false;
                    autoPlayControl.start();
                    setTimeout(function () {
                        slider.classList.remove('hpmd-no-transition');
                    }, 50);
                }
            }, 410);
        } else {
            setTransform(slider, 'translate3d(' + (-currentSlide * (100 / steps) + '%') + ', 0%, 0)');
            timelines[currentSlide - 1].classList.add('hpmd-active');
            currentSlide++;
            if (currentSlide === 2 && isScrolledIntoView(video)) {
                video.play();
                isPlaying = true;
            } else {
                video.pause();
                video.currentTime = 0;
                isPlaying = false;
                setTimeout(function () {
                    autoPlayControl.start();
                }, 410);
            }
            
        }
    }

    function setContainerSize() {
        const bannerContainer = document.querySelector('.hpmd_banner-container');

        if (bannerContainer) {
            var w = window.innerWidth;
            var h = window.innerHeight;

            var height = _isMobile ?
                h :
                h - (h * 0.1);

            bannerContainer.style.height = height + 'px';
            console.log(_isMobile ? w : (height * 0.575) + 'px');
            bannerContainer.style.width = _isMobile ? w + 'px': (height * 0.575) + 'px';
        }
    }

    function getSize() {
        const muteButton = document.getElementsByClassName('hpmd_mute-button-wrapper')[0];
        if (muteButton) {
            const widthElem = muteButton.clientWidth;
            muteButton.style.height = widthElem + 'px';
        }
    }

    function setTextSizes() {
        if (window.innerWidth >= 600) return;

        var selectorsVW = {
            '.hpmd_button': 4.5,
            '.hpmd_h2': 6,
            '.hpmd_about-product p': 4.2,
            '.hpmd_note': 3,
            '.hpmd_video-and-about-product': 4
        };

        var bodyWidth = window.innerWidth;
        var contWidth = document.querySelector('.hpmd_banner-container').getBoundingClientRect().width;


        var ratio = contWidth / bodyWidth;


        function compensate(delta) {
            var selectors = Object.keys(selectorsVW);

            selectors.forEach(function (selector) {
                document.querySelectorAll(selector).forEach(function (element) {
                    element.style.fontSize = selectorsVW[selector] * delta + 'vw';
                })
            });
        }

        compensate(ratio);
    }

    function toggleButton() {
        if (video.muted) {
            video.muted = false;
            button.classList.remove('hpmd_mute');
            button.classList.add('hpmd_unmute')
        } else {
            video.muted = true;
            button.classList.remove('hpmd_unmute');
            button.classList.add('hpmd_mute')
        }
    }

    function initAutoPlay(duration, handler) {
        var rid = null;
        var state = {
            progress: 0,
            startTime: null,
            currentTime: null,
            startPause: 0,
            finishPause: 0
        }

        function loop() {
            rid = requestAnimationFrame(loop);

            if (state.startTime === null) {
                state.startTime = Date.now();
            }

            state.currentTime = Date.now() - state.startTime - (state.finishPause - state.startPause);
            state.progress = state.currentTime / duration;

            if (state.progress >= 1) {
                handler(1);
                reset();
            } else {
                handler(state.progress);
            }
        }

        function reset() {
            state = {
                progress: 0,
                startTime: null,
                currentTime: null,
                startPause: 0,
                finishPause: 0
            }
        }

        function start() {
            stop();
            reset();
            loop();
            autoPlayIsPlaying = true;
        }
        function stop() {
            cancelAnimationFrame(rid);
            autoPlayIsPlaying = false;
        }

        function pause() {
            cancelAnimationFrame(rid);
            state.progress = 0;
            state.startPause = Date.now();
            autoPlayIsPlaying = false;
        }
        function resume() {
            state.finishPause = Date.now();
            loop();
            autoPlayIsPlaying = true;
        }

        return {
            start: start,
            stop: stop,
            pause: pause,
            resume: resume
        }
    }

    function initSwipe(elem, handle) {
        var state = {
            start: { x: 0, y: 0 },
            move: { x: 0, y: 0 },
            end: { x: 0, y: 0 },
            curr: { x: 0, y: 0 }
        }
        var eventTypes = {
            start: ['touchstart', 'mousedown'],
            move: ['touchmove', 'mousemove'],
            end: ['touchend', 'mouseup', 'mouseout']
        };
        var isMobile = _isMobile;
        var isClick = false;
        function getTouch(event, isStart) {
            var propName = isStart ? 'touches' : 'changedTouches';
            return !!event[propName] ? event[propName][0] : event;
        }
        function getPos(touch) {
            return {
                x: touch.pageX,
                y: touch.pageY
            }
        }
        function calcCurrentPosition(move, start) {
            return {
                x: move.x - start.x,
                y: move.y - start.y
            }
        }
        function getEvent(progress, eventType) {
            return {
                progress: progress,
                direction: progress < (-0.2 / steps) ? 'right' : progress > (0.2 / steps) ? 'left' : 'none',
                type: eventType
            }
        }

        function handleStart(event) {
            if (event.target === button) {
                toggleButton();
                return;
            } else if (event.target === closeModalBtn) {
                closeModal();
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            var eventType = 'start';
            var position;

            if (isMobile) {
                var touch = getTouch(event, true);
                position = getPos(touch);
            } else {
                position = getPos(event);
                isClick = true;
            }

            state.start = position;
            handle(getEvent(0, eventType));
        }

        function handleMove(event) {
            event.preventDefault();
            event.stopPropagation();

            var eventType = eventTypes.move.indexOf(event.type) > -1 ? 'move' : 'end';
            var position;

            if (isMobile) {
                var touch = getTouch(event, false);
                position = getPos(touch);
            } else {
                position = getPos(event);
            }

            if (isMobile) {
                state.move = position;
                state.curr = calcCurrentPosition(state.move, state.start);
                handle(getEvent(state.curr.x / elem.offsetWidth, eventType));
            } else {
                if (isClick) {
                    state.move = position;
                    state.curr = calcCurrentPosition(state.move, state.start);
                    handle(getEvent(state.curr.x / elem.offsetWidth, eventType));
                }
                if (eventType === 'end') {
                    isClick = false;
                }
            }
        }

        if (isMobile) {
            elem.addEventListener('touchstart', handleStart, false);
            elem.addEventListener('touchmove', handleMove, false);
            elem.addEventListener('touchend', handleMove, false);
        } else {
            elem.addEventListener('mousedown', handleStart, false);
            elem.addEventListener('mousemove', handleMove, false);
            elem.addEventListener('mouseup', handleMove, false);
            elem.addEventListener('mouseout', handleMove, false);
        }

        return function () {
            if (isMobile) {
                elem.removeEventListener('touchstart', handleStart, false);
                elem.removeEventListener('touchmove', handleMove, false);
                elem.removeEventListener('touchend', handleMove, false);
            } else {
                elem.removeEventListener('mousedown', handleStart, false);
                elem.removeEventListener('mousemove', handleMove, false);
                elem.removeEventListener('mouseup', handleMove, false);
                elem.removeEventListener('mouseout', handleMove, false);
            }
        }
    }

    function closeModal() {
        document.body.classList.remove('hpmdn-modal-show');

        autoPlayControl.stop();
    }

    function mobilecheck() {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }


    window.addEventListener('DOMContentLoaded', function () {
        isMobile = window.innerWidth < window.innerHeight;

        var backdrop = document.querySelector('.hpmdn-stories-backdrop');
        backdrop.addEventListener('click', closeModal);

        closeModalBtn = document.querySelector('.hpmdn-modal-close');
        closeModalBtn.addEventListener('click', closeModal);


        video = document.getElementById('hpmd_video-slide');

        video.addEventListener('timeupdate', function (event) {
            var progress = event.target.currentTime / event.target.duration;

            timelines[currentSlide - 1].style.width = (100 * progress) + '%';

            if (parseInt((progress).toFixed(1)) === 1) {
                video.pause();
                showNextSlide();
            }
        });
        slider = document.getElementsByClassName('hpmd_slider')[0];
        slides = [].slice.call(slider.querySelectorAll('.hpmd_slides'));
        button = document.querySelector('.hpmd_mute-button');
        button.addEventListener('click', toggleButton);


        var storyBtn = document.querySelector('.hpmdn-teaser-story');

        storyBtn.addEventListener('click', function() {
            document.body.classList.add('hpmdn-modal-show');

            setContainerSize();
            getSize();
            setTextSizes();
            // autoPlay(currentSlide);
            startArrowsWork();


            setTimeout(function() {
                autoPlayControl.start();
            }, 100);
        });

        if (currentSlide === 1) {
            setTransform(slides[steps - 1], 'translate3d(' + (-100 * steps) + '%, 0%, 0)');
        }
        autoPlayControl.start();
        initSwipe(slider, function (event) {
            if (event.type === 'start') {
                slider.classList.add('hpmd-no-transition');
                autoPlayControl.pause();
            } else if (event.type === 'end') {
                slider.classList.remove('hpmd-no-transition');

                switch (event.direction) {
                    case 'left':
                        showPrevSlide();
                        break;
                    case 'right':
                        showNextSlide();
                        break;
                    default:
                        var value = ((-100 / steps) * (currentSlide - 1));
                        setTransform(slider, 'translate3d(' + value + '%, 0%, 0)');
                        if (currentSlide !== 2) {
                            autoPlayControl.resume();
                        }
                        break;
                }
            } else if (event.type === 'move') {
                var value = ((-100 / steps) * (currentSlide - 1) + (100 / steps * event.progress));
                setTransform(slider, 'translate3d(' + value + '%, 0%, 0)');
            }
            if (currentSlide === steps) {
                setTransform(slides[0], 'translate3d(' + 100 * steps + '%, 0%, 0)');
            } else {
                setTransform(slides[0], 'translate3d(0%, 0%, 0)');
            }
            if (currentSlide === 1) {
                setTransform(slides[steps - 1], 'translate3d(' + (-100 * steps) + '%, 0%, 0)');
            } else {
                setTransform(slides[steps - 1], 'translate3d(0%, 0%, 0)');
            }
        });

        window.addEventListener('resize', function () {
            setContainerSize();
            getSize();
            setTextSizes();
        });

        function scrollHandler() {
            var isVisible = isScrolledIntoView(bannerContainer);

            if (!isVisible && isPlaying) {
                video.pause();
                isPlaying = false;
            } else if (isVisible && currentSlide === 2 && !isPlaying) {
                video.play();
                isPlaying = true;
            }
            if (isVisible && !autoPlayIsPlaying) {
                autoPlayIsPlaying = true;
                autoPlayControl.start();
            } else if (!isVisible && autoPlayIsPlaying) {
                autoPlayIsPlaying = false;
                autoPlayControl.stop();
            }
        }
        window.addEventListener('scroll', scrollHandler);
        scrollHandler();
    });
}());