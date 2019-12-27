window.addEventListener('load',function () {
    hpmd.data = {
        onViewportUpdate: function () {
        }
    }
    // Сохраняем ссылку на контейнер баннера
    var container = document.querySelector('.banner-container');
    // Сохраняем ссылку на «обертку» баннера
    var wrapper = container.querySelector('.hpmdn-wrapper'),
        teaser = container.querySelector('.hpmdn-teaser'),
        popup = container.querySelector('.hpmdn-popup'),
        popupScroller = popup.querySelector('.hpmdn-popup-scroller'),
        popupBack = container.querySelector('.hpmdn-popup-back'),
        close = container.querySelector('.hpmdn-popup-close'),
        article = container.querySelector('.hpmdn-popup-article'),
        btnCont = container.querySelector('.hpmdn-popup__button-container'),
        btn1 = container.querySelector('.hpmdn-popup__button1'),
        btn2 = container.querySelector('.hpmdn-popup__button2'),
        teaserSlider = container.querySelector('.hpmdn-teaser-slider'),
        storiesWrap = container.querySelector('.hpmdn-stories'),
        storiesItemsWrap = container.querySelector('.hpmdn-stories-items'),
        profile = container.querySelector('.hpmdn-profile'),
        profileImg = container.querySelector('.hpmdn-profile_img'),
        titleNode = container.querySelector('.hpmdn-title'),
        bgModal = container.querySelector('.hpmdn-modal-bg');
    var sliderState1 = {
        start: {
            x: 0,
            y: 0,
            timeStamp: 0
        },
        end: {
            x: 0,
            y: 0,
            timeStamp: 0
        },
        id: 0,
        startTimeStamp: null,
        endTimeStamp: null,
    };
    // ВНУТРЕННИЕ ФУНКЦИИ
    /**
     * Список touch- и pointer-событий, подлежащих обработке
     *
     * @var string[]
     */
    var TOUCH_EVENTS = [
        'touchstart', 'touchend', 'touchmove', 'touchcancel',
        'pointerdown', 'pointerup', 'pointermove', 'pointercancel',
        'MSPointerDown', 'MSPointerUp', 'MSPointerMove', 'MSPointerCancel',
    ];
    var MOUSE_EVENTS = [
        'mousedown', 'mouseup', 'mousemove'
    ]
    /**
     * Применяет функцию handler к первому аргументу,
     * если передан единственный элемент, или к каждому из
     * элементов первого аргумента, если передан массив
     * (или массивоподобный объект).
     *
     * Используется в качестве общей обертки для функций,
     * которые возвращают DOM-элемент или набор DOM-элементов,
     * например:
     * iterate(document.querySelector('...'), function () { ... });
     * iterate(document.querySelectorAll('...'), function () { ... });
     *
     * @param <Array-like object>|Object list_or_item DOM-элемент или элементы
     * @param Function handler Функция-обработчик
     */
    var iterate = function (list_or_item, handler) {
        if ("number" == typeof list_or_item.length) {
            // Array or node list. Use Array.slice() method
            // from array prototype to convert it to regular
            // array, then iterate with .map()
            [].slice.call(list_or_item).map(handler);
        } else {
            // Single item
            handler(list_or_item);
        }
    };
    /**
     * Совместимая с vendor-префиксами ссылка на функцию
     * requestAnimationFrame()
     *
     * @var Function
     */
    var animationFrame = function (callback) {
        (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (handler) {
                setTimeout(handler, 13);
            }
        )(callback);
    };
    /**
     * Обрабатывает touch-события на DOM-элементе, или списке элементов.
     *
     * Функция handler будет вызвана при возникновении любого из touch-
     * или pointer-событий. Первый аргумент (объект события) этой функции
     * дополняется полем _type, содержащим одну из строк:
     * - "start" ― произошло событие touchstart / pointerdown
     * - "move" ― произошло событие touchmove / pointermove
     * - "end" ― произошло событие touchend / pointerup
     * - "cancel" ― произошло событие touchcancel / pointercancel
     *
     * @param DOMNode|DOMNodeList elements DOM-элемент или элементы
     * @param Function handler Обработчик события
     */
    var onTouch = function (elements, handler) {
        iterate(elements, function (item) {
            TOUCH_EVENTS.map(function (event) {
                item.addEventListener(event, function (event) {
                    if (event.type.indexOf('touch') > -1 && navigator.userAgent.indexOf('Windows Phone') > -1) {
                        return;
                    }
                    var type = event.type.toLowerCase(); // 'MSPointerDown' -> 'mspointerdown'
                    if (type.indexOf('move') > -1) {
                        event._type = 'move';
                    } else if (type.indexOf('cancel') > -1) {
                        event._type = 'cancel';
                    } else if (type.indexOf('start') > -1 || type.indexOf('down') > -1) {
                        event._type = 'start';
                    } else if (type.indexOf('end') > -1 || type.indexOf('up') > -1) {
                        event._type = 'end';
                    }
                    event._touch = !!event.changedTouches ? event.changedTouches[0] : event;
                    // Call `handler` with the same arguments as current function
                    handler.apply(this, [].slice.call(arguments));
                });
            });
        });
    };
    window.hpmd.datan = {};
    // hpmd.datan.isIOs = function () {
    //     return hpmd.getSegment("os") == "iOS";
    // }
    //
    // /**
    //  * Управляется ли устройство Android
    //  *
    //  * @return bool
    //  */
    // hpmd.datan.isAndroid = function () {
    //     return hpmd.getSegment("os") == "Android";
    // }
    //
    // /**
    //  * Управляется ли устройство Windows Phone
    //  *
    //  * @return bool
    //  */
    // hpmd.datan.isWP = function () {
    //     return hpmd.getSegment("os") == "Windows";
    // }
    hpmd.datan.calcSwipeDirection = function (deltax, deltay) {
        if (deltax == 0) {
            if (deltay == 0) {
                // смещения нет, произошел тап
                return "tap";
            } else {
                // смещение есть, зададим deltay равным единице,
                // чтобы избежать деления на ноль
                deltay = 1;
            }
        }
        if (Math.abs(deltax) < 10 && Math.abs(deltay) < 10) {
            // смещение меньше 10 пикселей, произошел тап
            return "tap";
        }
        if (Math.abs(deltay / deltax) > .5) {
            // наклон кривой к горизонтали больше 45°,
            // это вертикальный свайп,
            if (deltay < 0) {
                // смещение вверх
                return "up";
            } else {
                // смещение вниз
                return "down";
            }
        } else {
            // наклон кривой к горизонтали меньше 45°,
            // это горизонтальный свайп,
            if (deltax < 0) {
                // смещение влево
                return "left";
            } else {
                // смещение вправо
                return "right";
            }
        }
    }
    hpmd.datan.attachHandler = function (element, event, handler) {
        // if (hpmd.datan.isWP()) {
        //     switch (event) {
        //         case "touchstart":
        //             hpmd.datan.attachHandler(element, 'MSPointerDown', handler);
        //             hpmd.datan.attachHandler(element, 'pointerdown', handler);
        //             break;
        //         case "touchmove":
        //             hpmd.datan.attachHandler(element, 'MSPointerMove', handler);
        //             hpmd.datan.attachHandler(element, 'pointermove', handler);
        //             break;
        //         case "touchend":
        //             hpmd.datan.attachHandler(element, 'MSPointerUp', handler);
        //             hpmd.datan.attachHandler(element, 'pointerup', handler);
        //             break;
        //         case "touchcancel":
        //             hpmd.datan.attachHandler(element, 'MSPointerCancel', handler);
        //             hpmd.datan.attachHandler(element, 'pointercancel', handler);
        //             break;
        //     }
        // }
        element.addEventListener(event, handler, false);
    }
    hpmd.datan.detachHandler = function (element, event, handler) {
        // if (hpmd.data.isWP()) {
        //     switch (event) {
        //         case "touchstart":
        //             hpmd.datan.detachHandler(element, 'MSPointerDown', handler);
        //             hpmd.datan.detachHandler(element, 'pointerdown', handler);
        //             break;
        //         case "touchmove":
        //             hpmd.datan.detachHandler(element, 'MSPointerMove', handler);
        //             hpmd.datan.detachHandler(element, 'pointermove', handler);
        //             break;
        //         case "touchend":
        //             hpmd.datan.detachHandler(element, 'MSPointerUp', handler);
        //             hpmd.datan.detachHandler(element, 'pointerup', handler);
        //             break;
        //         case "touchcancel":
        //             hpmd.datan.detachHandler(element, 'MSPointerCancel', handler);
        //             hpmd.datan.detachHandler(element, 'pointercancel', handler);
        //             break;
        //     }
        // }
        element.removeEventListener(event, handler, false);
    }
    hpmd.datan.handleSwipe = function (element, handlers) {
        var x, y;
        hpmd.datan.attachHandler(element, 'mouseup', function (event) {
            //var touch = !!event.changedTouches ? event.changedTouches[0] : event;
            x = event.pageX;
            y = event.pageY;
        });
        hpmd.datan.attachHandler(element, 'mousedown', function (event) {
            //var touch = !!event.changedTouches ? event.changedTouches[0] : event;
            var direction = hpmd.datan.calcSwipeDirection(event.pageX - x, event.pageY - y);
            if (!!handlers[direction]) {
                handlers[direction](event, element);
            }
        });
        // hpmd.datan.attachHandler(element, 'touchstart', function (event) {
        //     var touch = !!event.changedTouches ? event.changedTouches[0] : event;
        //
        //     x = touch.pageX;
        //     y = touch.pageY;
        // });
        // hpmd.datan.attachHandler(element, 'touchend', function (event) {
        //     var touch = !!event.changedTouches ? event.changedTouches[0] : event;
        //     var direction = hpmd.datan.calcSwipeDirection(touch.pageX - x, touch.pageY - y);
        //     if (!!handlers[direction]) {
        //         handlers[direction](event, element);
        //     }
        // });
    }
    hpmd.datan.handleSwipe2 = function (element, handlers) {
        var x, y;
        hpmd.datan.attachHandler(element, 'mousedown', function (event) {
            if (event.stopPropagation) {
                event.preventDefault();
                event.stopPropagation();
            }
            //var touch = !!event.changedTouches ? event.changedTouches[0] : event;
            x = event.pageX;
            y = event.pageY;
        });
        hpmd.datan.attachHandler(element, 'mouseup', function (event) {
            if (event.stopPropagation) {
                event.preventDefault();
                event.stopPropagation();
            }
           // var touch = !!event.changedTouches ? event.changedTouches[0] : event;
            var direction = hpmd.datan.calcSwipeDirection(event.pageX - x, event.pageY - y);
            if (!!handlers[direction]) {
                handlers[direction](event, element);
            }
        });
    }
    hpmd.datan.setStyles = function (elem, styles) {
        for (var key in styles) {
            elem.style[key] = styles[key];
        }
    }
    hpmd.datan.getAbsoluteBoundingRect = function getAbsoluteBoundingRect(el) {
        var doc = document,
            win = window,
            body = doc.body,
            // pageXOffset and pageYOffset work everywhere except IE <9.
            offsetX = win.pageXOffset !== undefined ? win.pageXOffset :
                (doc.documentElement || body.parentNode || body).scrollLeft,
            offsetY = win.pageYOffset !== undefined ? win.pageYOffset :
                (doc.documentElement || body.parentNode || body).scrollTop,
            rect = el.getBoundingClientRect();
        if (el !== body) {
            var parent = el.parentNode;
            // The element's rect will be affected by the scroll positions of
            // *all* of its scrollable parents, not just the window, so we have
            // to walk up the tree and collect every scroll offset. Good times.
            while (parent !== body && parent !== null) {
                if (parent.scrollLeft) offsetX += parent.scrollLeft;
                if (parent.scrollTop) offsetY += parent.scrollTop;
                parent = parent.parentNode;
            }
        }
        return {
            bottom: rect.bottom + offsetY,
            height: rect.height,
            left: rect.left + offsetX,
            right: rect.right + offsetX,
            top: rect.top + offsetY,
            width: rect.width
        };
    }
    hpmd.datan.viewIID = null,
        hpmd.datan.coords = {
            w: 0,
            h: 0,
            x: 0,
            y: 0
        }
    hpmd.datan.resizeCoords = function () {
        hpmd.data.coords = {
            w: window.innerWidth,
            h: window.innerHeight,
            x: 0,
            y: 0
        };
    }
    hpmd.datan.checkViewability = function (prefix, callback) {
        function has(item, value) {
            return item.indexOf(value) > -1;
        }
        function isDOMElement(elem) {
            return elem instanceof Element
        }
        function def(value) {
            return value !== undefined && value !== null;
        }
        function findOverlapElems(elem) {
            var coords;
            coords = {
                w: window.innerWidth,
                h: window.innerHeight,
                x: 0,
                y: 0
            };
            function collectElems(acc, coord, index) {
                var item = isOverlap(
                    elem,
                    coord.x,
                    coord.y
                );
                return (
                    item.overlap &&
                    isDOMElement(item.elem) &&
                    !has(acc, item.elem)
                ) ? acc.concat(item.elem) : acc;
            }
            return generateGrid(5, coords).reduce(collectElems, []);
        }
        function getOverlapPersantage(elems) {
            var elems = findOverlapElems(popup);
            function getSize(rectX, rectW, innWidth) {
                rectW = ((rectW + rectX) > innWidth) ? innWidth : rectW;
                return rectX < 0 ?
                    rectW + rectX :
                    (rectX + rectW > innerWidth) ?
                        rectW - (rectX + rectW - innWidth) :
                        rectW;
            }
            function getIntersectingRectangle(r1, r2) {
                var x = Math.max(r1.left, r2.left),
                    y = Math.max(r1.top, r2.top),
                    w = Math.min(r1.left + r1.width, r2.left + r2.width) - x,
                    h = Math.min(r1.top + r1.height, r2.top + r2.height) - y;
                return {
                    x: x,
                    y: y,
                    w: w,
                    h: h
                };
            };
            return elems.reduce(function (acc, elem) {
                var rect1 = hpmd.datan.getAbsoluteBoundingRect(elem);
                var rect2 = hpmd.datan.getAbsoluteBoundingRect(
                    popup
                );
                var elemCoord3 = getIntersectingRectangle(
                    rect1,
                    rect2
                );
                var p1 = elemCoord3.w * elemCoord3.h;
                var p2 = rect2.width * rect2.height;
                var percent = Math.round(((p1 / p2) || 0) * 100);
                return acc + percent;
            }, 0);
        }
        function generateGrid(num, coords) {
            var x = coords.x;
            var y = coords.y;
            var width = coords.w;
            var height = coords.h;
            var grid = [];
            var coord = {};
            for (var j = 0; j <= num; j++) {
                for (var i = 0; i <= num; i++) {
                    coord = {
                        x: Math.round(width / num * i + x + ((i === 0) ? 2 : -2)),
                        y: Math.round(height / num * j + y + ((j === 0) ? 2 : -2))
                    }
                    grid.push(coord);
                }
            }
            return grid;
        }
        function assign(target) {
            var slice = Array.prototype.slice;
            var sources = slice.call(arguments, 1);
            for (var i = 0; i < sources.length; i++) {
                for (var key in sources[i]) {
                    if (sources[i].hasOwnProperty(key)) {
                        target[key] = sources[i][key];
                    }
                }
            }
            return target;
        }
        function isOverlap(elem, x, y) {
            var returnValue = {
                overlap: false,
                elem: null
            }
            if (!isDOMElement(elem))
                return returnValue;
            try {
                var rect = hpmd.datan.getAbsoluteBoundingRect(elem);
                var htmlElem = document.documentElement;
                var screenWidth = htmlElem.clientWidth || window.innerWidth;
                var screenHeight = htmlElem.clientHeight || window.innerHeight;
                var sizesSum = elem.offsetWidth + elem.offsetHeight + rect.height + rect.width;
                var elemCenter = {
                    x: x || rect.left + elem.offsetWidth / 2,
                    y: y || rect.top + elem.offsetHeight / 2
                };
                var pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
                var pointContainer2 = pointContainer;
                var style = getComputedStyle(elem);
                if (style.display === 'none')
                    return returnValue;
                if (style.visibility !== 'visible')
                    return returnValue;
                if (style.opacity < 0.1)
                    return returnValue;
                if (sizesSum === 0)
                    return returnValue;
                if (elemCenter.x < 0)
                    return returnValue;
                if (elemCenter.x > screenWidth)
                    return returnValue;
                if (elemCenter.y < 0)
                    return returnValue;
                if (elemCenter.y > screenHeight)
                    return returnValue;
                do {
                    if (pointContainer === elem) {
                        return assign(
                            returnValue,
                            {overlap: true}
                        );
                    }
                }
                while (pointContainer = pointContainer.parentNode);
                return assign(
                    returnValue,
                    {
                        overlap: true,
                        elem: (
                            def(pointContainer2) &&
                            !has(pointContainer2.className, prefix) &&
                            !has(pointContainer2.id, prefix)
                        ) ? pointContainer2 : null
                    }
                );
            } catch (e) {
                return returnValue;
            }
        }
        hpmd.datan.viewIID = setInterval(function () {
            var percent = getOverlapPersantage(
                findOverlapElems(popup)
            ) || 0;
            percent = percent > 100 ? 100 : percent;
            if (percent > 0) {
                callback(percent);
            }
        }, 1000);
    }
    /**
     * Обрабатывает событие "тапа" (быстрого нажатия) на DOM-элемент или элементы.
     *
     * @param DOMNode|DOMNodeList elements DOM-элемент или список элементов
     * @param Function callback Функция-обработчик нажатия
     */
    var onTap = function (element, callback) {
        hpmd.datan.handleSwipe(element, {
            tap: function (event) {
                callback(event);
            }
        });
    };
    var cancelEvent = function (event) {
        if (event.target.className.indexOf('hpmdn-') > -1) return;
        event.preventDefault();
        event.stopPropagation();
        return false
    };
    // var disableScroll = function () {
    //     document.body.addEventListener('touchmove', cancelEvent);
    //     document.body.addEventListener('touchend', cancelEvent);
    // };
    //
    // var enableScroll = function () {
    //     document.body.removeEventListener('touchmove', cancelEvent);
    //     document.body.removeEventListener('touchend', cancelEvent);
    // };
    var disableScroll = function () {
        document.body.addEventListener('mousemove', cancelEvent);
        document.body.addEventListener('mouseup', cancelEvent);
    };
    var enableScroll = function () {
        document.body.removeEventListener('mousemove', cancelEvent);
        document.body.removeEventListener('mouseup', cancelEvent);
    };
    var timerLoop = createLoopTimer(500, function () {
        _hpmdTN.popupDimensions();
    });
    function first(x) {
        return x[0];
    }
    function tail(x) {
        return x.slice(1);
    }
    function toUpper(x) {
        return x.toUpperCase()
    }
    function capitilize(str) {
        return first(str).toUpperCase() + tail(str);
    }
    function setTransformOrigin(node, value) {
        var transform = 'transformOrigin';
        var capTransform = capitilize(transform);
        var prefix = ['Webkit', 'Moz', 'O', ''];
        var prop = '';
        prefix.forEach(function (prefix) {
            prop = (prefix != '') ? (prefix + capTransform) : transform;
            node.style[prop] = value;
        });
    }
    function calcTransformOrigin(mainElem, otherElem) {
        var template = '$X$% $Y$%';
        var rect1 = {
            top: mainElem.getBoundingClientRect().top,
            left: mainElem.getBoundingClientRect().left,
            width: window.innerWidth,
            height: window.innerHeight
        };
        var rect2 = otherElem.getBoundingClientRect();
        var transformOrigin = {
            x: (((rect2.left + rect2.width / 2) - (rect1.left)) / rect1.width * 100),
            y: (((rect2.top + rect2.height / 2) - (rect1.top)) / rect1.height * 100),
        }
        setTransformOrigin(
            mainElem,
            transformOrigin.x + '% ' + transformOrigin.y + '%'
        );
    }
    var _hpmdTN = {
        siteHeader: null,
        siteFooter: null,
        openTriggered: false,
        bodyScrollTop: 0,
        iw: 0,
        ih: 0,
        openPopup: function (siteHeader, siteFooter) {
            if (_hpmdTN.openTriggered) return;
            // calcTransformOrigin(popup, teaser);
            _hpmdTN.openTriggered = true;
            _hpmdTN.addPopupListeners();
            _hpmdTN.lockBody();
            popup.classList.add('hpmdn-popup-open');
            popupBack.classList.add('hpmdn-popup-underlayer');
        },
        closePopup: function () {
            hpmd.datan.slides.forEach(function (slide) {
                var v = slide.querySelector('video');
                var volume = slide.querySelector('.hpmdn-stories-volume');
                bgModal.classList.remove('hpmdn-modal-bg-visible');
                if (!!v && !!volume) {
                    v.removeEventListener('timeupdate', hpmd.datan.updateFn);
                    v.removeEventListener('ended', hpmd.datan.endedFn);
                    v.muted = true;
                    volume.classList.remove('hpmdn-active');
                }
            });
            clearTimeout(hpmd.datan.viewIID);
            // calcTransformOrigin(popup, teaser);
            popupScroller.scrollTop = 0; // Scroll popup to start
            _hpmdTN.removePopupListeners();
            popup.classList.remove('hpmdn-popup-open');
            _hpmdTN.unlockBody();
            // Restore unopened value
            setTimeout(function () {
                _hpmdTN.openTriggered = false;
                setTimeout(function () {
                    popupBack.classList.remove('hpmdn-popup-underlayer');
                }, 200);
            }, 200);
        },
        popupDimensions: function () {
            // var sh = !!window.screen ? window.screen.height : 0,
            //      h = hpmd.datan.isIOs()
            //         ? (sh > 0 && sh < window.innerHeight
            //             ? sh
            //             : window.innerHeight)
            //         : window.innerHeight;
            // if (h !== this.ih) {
            //     this.ih = h;
            //     popupScroller.style.height = h + 'px';
            //     window.scrollBy(0, 0);
            // }
        },
        lockBody: function () {
            document.body.classList.add('hpmdn-bodylock');
        },
        unlockBody: function () {
            // enableScroll();
            document.body.classList.remove('hpmdn-bodylock');
        },
        // addPopupListeners: function () {
        //     popupScroller.addEventListener('touchstart', _hpmdTN.popupTouchstartFn, false);
        //     popupScroller.addEventListener('touchmove', _hpmdTN.popupTouchmoveFn, false);
        // },
        // removePopupListeners: function () {
        //     popupScroller.removeEventListener('touchstart', _hpmdTN.popupTouchstartFn);
        //     popupScroller.removeEventListener('touchmove', _hpmdTN.popupTouchmoveFn);
        // },
        addPopupListeners: function () {
            popupScroller.addEventListener('mousedown', _hpmdTN.popupTouchstartFn, false);
            popupScroller.addEventListener('mousemove', _hpmdTN.popupTouchmoveFn, false);
        },
        removePopupListeners: function () {
            popupScroller.removeEventListener('mousedown', _hpmdTN.popupTouchstartFn);
            popupScroller.removeEventListener('mousemove', _hpmdTN.popupTouchmoveFn);
        },
        // popupTouchstartFn: function (e) {
        //     if (e.targetTouches.length === 1) {
        //         _hpmdTN.clientY = e.targetTouches[0].clientY;
        //     }
        // },
        popupTouchstartFn: function (e) {
                _hpmdTN.clientY = e.clientY;
        },
        // popupTouchmoveFn: function (e) {
        //     if (e.targetTouches.length === 1) {
        //         _hpmdTN.disableTouchesOutsidePopup(e);
        //     }
        // },
        popupTouchmoveFn: function (e) {
                _hpmdTN.disableTouchesOutsidePopup(e);
        },
        _clientY: null,
        disableTouchesOutsidePopup: function (e) {
            var clientY = e.clientY - _hpmdTN.clientY;
            if (popupScroller.scrollTop === 0 && clientY > 0) {
                e.preventDefault();
            }
            if (_hpmdTN.isPopupScrolled() && clientY < 0) {
                e.preventDefault();
            }
        },
        isPopupScrolled: function () {
            return popupScroller.scrollHeight - popupScroller.scrollTop <= popupScroller.clientHeight;
        },
        /**
         * Returns first node in list. Recommended to use with unique selectors
         * @param  {Array, String} selector CSS selector string (example: '.header', '#footer', '#wrapper > header')
         * @return {DOM element}
         */
        q: function (selector) {
            if (typeof selector !== 'string' ||
                (Array.isArray(selector) && typeof selector[0] !== 'string')) {
                return;
            }
            var selectorExists = false;
            try {
                if (Array.isArray(selector)) {
                    for (var i = 0; i < siteHeader.length; i++) {
                        isSelectorExists(selector[i]);
                    }
                } else {
                    isSelectorExists(selector);
                }
                // if !selectorExists
                throw new Error('hpmd: selector not found');
            } catch (error) {
                console.log('hpmd: q(selector): selector not found');
            }
            function isSelectorExists(selector) {
                var node = document.querySelector(selector);
                if (node) {
                    selectorExists = true;
                    return node;
                }
            }
        }
    };
    /**
     * Экспортируем функцию hpmd.data.onViewportUpdate()
     *
     * В нативных форматах система вызывает эту функцию автоматически,
     * когда изменяются размеры окна или ориентация устройства.
     */
    hpmd.data.onViewportUpdate = function () {
        _hpmdTN.popupDimensions();
        // if (_hpmdTN.openTriggered) document.body.style.height = window.innerHeight;
    };
    var sliderObj;
    var visibilityRun = false;
    var isEnd = false;
    function initSlider() {
        var slice = Array.prototype.slice;
        //var stylesheet = hpmd.getStylesheet();
        var padding = 0;
        var sqrt = Math.sqrt;
        var pow = Math.pow;
        var prevPag;
        //dom
        var slider;
        var slides;
        var progressNode;
        var progressParts;
        var len = 0;
        var realLen = stories.reduce(function (acc, item) {
            return item.copy_id === undefined ? acc + 1 : acc;
        }, 0)
        var isTapped = false;
        var isPlayingAnimation = false;
        var autoRenderer;
        var transformTemplate = 'rotateY(%ROTATEY%deg) translateX(%TRANSLATEX%vw) translateZ(%TRANSLATEZ%vw)';
        var state = sliderState1;
        var isObject = is('Object');
        function is(name) {
            return function (x) {
                return Object.prototype.toString.call(x) === '[object ' + name + ']';
            }
        }
        function Renderer(options) {
            var self = this;
            this.options = {
                duration: options.duration || 1000,
                startTime: null,
                currentTime: null,
                progress: 0,
                playing: false,
                pauseStartTime: 0,
                pauseTime: 0
            }
            this.rid = null;
            this.listeners = [];
            function notify(value) {
                self.listeners.forEach(function (listener) {
                    listener(value);
                });
            }
            this.renderFn = function () {
                if (self.options.playing) self.rid = requestAnimationFrame(self.renderFn);
                if (self.options.startTime === null) {
                    self.options.startTime = Date.now();
                }
                self.options.currentTime = Date.now() - self.options.startTime - self.options.pauseTime;
                self.options.progress = self.options.currentTime / self.options.duration;
                if (self.options.progress >= 1) {
                    notify(1);
                    self.stop();
                } else {
                    notify(self.options.progress);
                }
            }
        }
        Renderer.prototype.start = function () {
            this.options.playing = true;
            this.rid = requestAnimationFrame(this.renderFn);
            return this;
        }
        Renderer.prototype.restart = function () {
            this.stop();
            this.options.startTime = null,
                this.options.currentTime = null,
                this.options.progress = 0,
                this.options.playing = false,
                this.options.pauseStartTime = 0,
                this.options.pauseTime = 0
            this.start();
            return this;
        }
        Renderer.prototype.resume = function () {
            this.options.pauseTime += Date.now() - this.options.pauseStartTime;
            this.options.playing = true;
            this.rid = requestAnimationFrame(this.renderFn);
            return this;
        }
        Renderer.prototype.pause = function () {
            this.options.pauseStartTime = Date.now();
            this.options.playing = false;
            cancelAnimationFrame(this.rid);
            // this.rid = requestAnimationFrame(this.renderFn);
            return this;
        }
        Renderer.prototype.stop = function () {
            this.options.playing = false;
            cancelAnimationFrame(this.rid);
            return this;
        }
        Renderer.prototype.onUpdate = function (listener) {
            this.listeners.push(listener);
            return this;
        }
        function setStyles(element, styles) {
            if (!element || !styles) return;
            for (var key in styles) {
                element.style[key] = styles[key];
            }
        }
        function getEmptyArray(length) {
            return Array(length).fill();
        }
        function createPagination(progressNode, len) {
            var nonCopyItems = stories.filter(nonCopy);
            var width = ((100 - (nonCopyItems.length + 1) * padding) / nonCopyItems.length);
            function createItem(acc, item, index) {
                if (!!item.copy_id) return acc;
                var part = document.createElement('div');
                var div = document.createElement('div');
                part.classList.add('hpmdn-pagination-item');
                setStyles(part, {
                    top: percent(padding),
                    left: percent((padding * (index + 1)) + (width * index)),
                    width: percent(width)
                });
                if (index === 0) {
                    part.classList.add('hpmdn-active');
                }
                part.appendChild(div);
                progressNode.appendChild(part);
                return acc.concat(part);
            }
            function nonCopy(item) {
                return item.copy_id == undefined;
            }
            return nonCopyItems.reduce(createItem, []);
        }
        // function getTouch(event, start) {
        //     var name = (start) ? 'touches' : 'changedTouches';
        //     return (!!event[name]) ? event[name][0] : event;
        // }
        function getProp(key) {
            return function (obj) {
                return obj[key];
            }
        }
        function getCoord(event) {
            var pageX = getProp('pageX'),
                pageY = getProp('pageY');
            return {
                x: pageX(event),
                y: pageY(event)
            }
        }
        function getDirection(x) {
            return (x > 0) ? 'left' : 'right';
        }
        function first(x) {
            return x[0];
        }
        function tail(x) {
            return x.slice(1);
        }
        function toUpper(x) {
            return x.toUpperCase()
        }
        function capitilize(str) {
            return first(str).toUpperCase() + tail(str);
        }
        function setTransform(node, value) {
            var transform = 'transform';
            var capTransform = capitilize(transform);
            var prefix = ['Webkit', 'Moz', 'O', ''];
            var prop = '';
            prefix.forEach(function (prefix) {
                prop = (prefix != '') ? (prefix + capTransform) : transform;
                node.style[prop] = value;
            });
        }
        function setTransformWithTemplate(element, rotate, translateX, translateZ) {
            setTransform(
                element,
                transformTemplate
                    .replace('%ROTATEY%', rotate)
                    .replace('%TRANSLATEX%', translateX)
                    .replace('%TRANSLATEZ%', translateZ)
            );
        }
        function resetState() {
            var emptyObj = {
                x: 0,
                y: 0,
                timeStamp: 0
            };
            state.start = emptyObj;
            state.end = emptyObj;
        }
        function distance(item1, item2) {
            return sqrt(pow(item2.x - item1.x) + pow(item2.y - item1.y));
        }
        var vid;
        hpmd.datan.updateFn = function updateFn(event) {
            if (!!vid && vid === event.target) {
                var progress = vid.currentTime / vid.duration;
                setStyles(
                    progressParts[state.id].querySelector('div'),
                    {
                        width: percent(100 * progress)
                    }
                );
            }
        }
        hpmd.datan.endedFn = function endedFn() {
            if (!!vid && vid === event.target) {
                move('right', false);
                setTimeout(function () {
                    autoRenderer = new Renderer({duration: 6000})
                        .onUpdate(function (progress) {
                            var progId = stories[state.id].copy_id !== undefined ? stories[state.id].copy_id : state.id;
                            setStyles(
                                progressParts[progId].querySelector('div'),
                                {
                                    width: percent(100 * progress)
                                }
                            );
                            if (progress === 1) {
                                move('right', false);
                                setTimeout(function () {
                                    vid = slides[state.id].querySelector('video');
                                    if (!vid) {
                                        vid = null;
                                        autoRenderer.restart();
                                    } else {
                                        vid.currentTime = 0;
                                        vid.play();
                                    }
                                }, 310);
                            }
                        })
                    vid = slides[state.id].querySelector('video');
                    if (!vid) {
                        vid = null;
                        autoRenderer.restart();
                    } else {
                        vid.currentTime = 0;
                        vid.play();
                    }
                }, 310);
            }
        }
        function moveAnim(direction, isTap) {
            if (!!slides[decrement(state.id, len)])
                slides[decrement(state.id, len)].classList.remove('hpmdn-left');
            if (!!slides[state.id])
                slides[state.id].classList.remove('hpmdn-active');
            if (!!slides[increment(state.id, len)])
                slides[increment(state.id, len)].classList.remove('hpmdn-right');
            if (!isTap) {
                slider.classList.add('hpmdn-notransition');
            }
            slider.removeAttribute('style');
            var vid = slides[state.id].querySelector('video');
            var volume = slides[state.id].querySelector('.hpmdn-stories-volume');
            if (!!vid && !!volume) {
                volume.classList.remove('hpmdn-active');
                vid.muted = true;
            }
            switch (direction) {
                case 'left':
                    var progId = stories[state.id].copy_id !== undefined ? stories[state.id].copy_id : state.id;
                    setStyles(
                        progressParts[progId].querySelector('div'),
                        {
                            width: percent(0)
                        }
                    );
                    state.id = decrement(state.id, len);
                    slides.forEach(function (slide) {
                        var v = slide.querySelector('video');
                        if (!!v) {
                            v.currentTime = 0;
                        }
                    });
                    hpmd.data.storiesCount += 1;
                    var progId = stories[state.id].copy_id !== undefined ? stories[state.id].copy_id : state.id;
                    if (progId === realLen - 1) {
                        progressParts.forEach(function (progressPart, index) {
                            if (index === progressParts.length - 1) return;
                            setStyles(
                                progressPart.querySelector('div'),
                                {
                                    width: percent(100)
                                }
                            );
                        });
                    } else {
                        var progId = stories[state.id].copy_id !== undefined ? stories[state.id].copy_id : state.id;
                        prevPag = progressParts[progId];
                        setStyles(
                            progressParts[progId].querySelector('div'),
                            {
                                width: percent(0)
                            }
                        );
                    }
                    break;
                case 'right':
                    var progId = stories[state.id].copy_id !== undefined ? stories[state.id].copy_id : state.id;
                    if (progId === realLen - 1) {
                        progressParts.forEach(function (progressPart) {
                            setStyles(
                                progressPart.querySelector('div'),
                                {
                                    width: percent(0)
                                }
                            );
                        });
                    } else {
                        var progId = stories[state.id].copy_id !== undefined ? stories[state.id].copy_id : state.id;
                        prevPag = progressParts[progId];
                        setStyles(
                            progressParts[progId].querySelector('div'),
                            {
                                width: percent(100)
                            }
                        );
                    }
                    state.id = increment(state.id, len);
                    slides.forEach(function (slide) {
                        var v = slide.querySelector('video');
                        if (!!v) {
                            v.currentTime = 0;
                        }
                    });
                    hpmd.data.storiesCount += 1;
                    break;
            }
            if (!!slides[decrement(state.id, len)])
                slides[decrement(state.id, len)].classList.add('hpmdn-left');
            if (!!slides[state.id])
                slides[state.id].classList.add('hpmdn-active');
            if (!!slides[increment(state.id, len)])
                slides[increment(state.id, len)].classList.add('hpmdn-right');
            vid = slides[state.id].querySelector('video');
            if (vid) {
                vid.currentTime = 0;
                vid.play();
            }
            window.scrollBy(0, 0);
            setTimeout(function () {
                if (!isTap) isPlayingAnimation = false;
            }, 310);
            setTimeout(function () {
                if (!isTap) slider.classList.remove('hpmdn-notransition');
                if (isTap) {
                    isTapped = false;
                    vid = slides[state.id].querySelector('video');
                    if (!vid) {
                        vid = null;
                        autoRenderer.restart();
                    } else {
                        vid.currentTime = 0;
                        vid.play();
                    }
                }
            }, isTap ? 10 : 100);
        }
        function move(direction, isTap) {
            if (isPlayingAnimation) return;
            autoRenderer.pause();
            if (isTapped) return;
            if (isTap) {
                isTapped = true;
            } else {
                isPlayingAnimation = true;
            }
            if (direction === 'right') {
                setTransformWithTemplate(slider, -90, -50, 50);
            } else {
                setTransformWithTemplate(slider, 90, 50, 50);
            }
            if (isTap) {
                moveAnim(direction, isTap);
                vid = slides[state.id].querySelector('video');
                if (!vid) {
                    vid = null;
                    autoRenderer.restart();
                } else {
                    vid.currentTime = 0;
                    vid.play();
                }
            } else {
                setTimeout(function () {
                    moveAnim(direction, isTap);
                    vid = slides[state.id].querySelector('video');
                    if (!vid) {
                        vid = null;
                        autoRenderer.restart();
                    } else {
                        vid.currentTime = 0;
                        vid.play();
                    }
                }, 310);
            }
        }
        var video = null;
        function handleStart(event) {
            if (isPlayingAnimation) return;
            event.preventDefault();
            event.stopPropagation();
            //var touch = getTouch(event, true);
            state.start = getCoord(event);
            autoRenderer.pause();
            state.startTimeStamp = Date.now();
            video = slides[state.id].querySelector('video');
            if (!!video) {
                video.pause();
            }
        }
        function calcPercent(percentValueY) {
            return percentValueY <= 0.25 ? (1 - percentValueY / 0.25) : 0;
        }
        function handleMove(event) {
            if (isPlayingAnimation) return;
            event.preventDefault();
            event.stopPropagation();
           // var touch = getTouch(event, false);
            state.end = getCoord(event);
            var distance = state.end.x - state.start.x;
            var percentValue = Math.abs(distance) / window.innerWidth;
            var distanceY = state.end.y - state.start.y;
            var percentValueY = distanceY / window.innerHeight;
            if (Math.abs(percentValueY) < 0.2 && percentValue > 0.075) {
                if (getDirection(distance) === 'right') {
                    setTransformWithTemplate(
                        slider,
                        -90 * percentValue,
                        -50 * percentValue,
                        50 * percentValue
                    );
                } else {
                    setTransformWithTemplate(
                        slider,
                        90 * percentValue,
                        50 * percentValue,
                        50 * percentValue
                    );
                }
            } else {
                setTransformWithTemplate(
                    slider,
                    0,
                    0,
                    0
                );
            }
            if (percentValueY > 0.05 && Math.abs(percentValue) <= 0.3) {
                // if (stories[state.id].story_link) {
                window.scrollBy(0, 0);
                popup.classList.add('hpmdn-notransition');
                setTransform(
                    popup,
                    'translate3d(0%, ' + (percentValueY * 100) + '%, 0) scale(' + (.95 + .05 * calcPercent(percentValueY)) + ')'
                );
                // }
            }
        }
        function handleEnd(event) {
            if (isPlayingAnimation) return;
            event.preventDefault();
            event.stopPropagation();
           // var touch = getTouch(event, false);
            state.end = getCoord(event);
            state.endTimeStamp = Date.now() - state.startTimeStamp;
            var distance = state.end.x - state.start.x;
            var percentValue = Math.abs(distance) / window.innerWidth;
            var distanceY = state.end.y - state.start.y;
            var percentValueY = distanceY / window.innerHeight;
            var deltaX = Math.abs(event.pageX - state.start.x);
            var deltaY = Math.abs(event.pageY - state.start.y);
            var direction = getDirection(distance);
            if ((deltaX <= 10 && deltaY <= 10) && (percentValueY < 0.05 && percentValueY > -0.05)) {
                if (state.start.x < window.innerWidth / 2) {
                    if (state.endTimeStamp <= 350) {
                        setTransformWithTemplate(
                            slider,
                            90,
                            50,
                            50
                        );
                        move('left', true);
                    } else {
                        vid = slides[state.id].querySelector('video');
                        if (!vid) {
                            vid = null;
                            autoRenderer.resume();
                        } else {
                            vid.currentTime = 0;
                            vid.play();
                        }
                    }
                } else if (state.start.x >= window.innerWidth / 2) {
                    if (state.endTimeStamp <= 350) {
                        setTransformWithTemplate(
                            slider,
                            -90,
                            -50,
                            50
                        );
                        move('right', true);
                    } else {
                        vid = slides[state.id].querySelector('video');
                        if (!vid) {
                            vid = null;
                            autoRenderer.resume();
                        } else {
                            vid.play();
                        }
                    }
                }
            } else if (percentValue >= .15 && (percentValueY < 0.3 && percentValueY > -0.3)) {
                move(direction, false);
                setTimeout(function () {
                    vid = slides[state.id].querySelector('video');
                    if (!vid) {
                        vid = null;
                        autoRenderer.restart();
                    } else {
                        vid.currentTime = 0;
                        vid.play();
                    }
                }, 315);
            } else {
                slider.removeAttribute('style');
                vid = slides[state.id].querySelector('video');
                if (percentValueY < -0.10 && Math.abs(percentValue) <= 0.3) {
                    if (stories[state.id].story_link) {
                        var pw = hpmd.data.storiesCount / hpmd.data.storiesLength;
                        if (pw > 1) {
                            pw = 1;
                        }
                        // hpmd.trackEvent('hpmd-link');
                        if (!isEnd) {
                            isEnd = true;
                            // hpmd.trackEvent('hpmd-view-percent', {
                            //     weight: Math.round(pw)
                            // });
                            // hpmd.trackEvent('hpmd-view-pages', {
                            //     weight: hpmd.data.storiesCount
                            // });
                            // hpmd.trackEvent('hpmd.close'); // закрытие баннера после перехода
                            // hpmd.trackEvent("hpmd.time-expanded", {
                            //     weight: Math.round(((new Date()) - hpmd.data.openedAt) / 1000)
                            // });
                            popup.classList.add('hpmdn-disable');
                        }
                        // setTimeout(function() {
                        if (!!vid) {
                            vid.removeEventListener('timeupdate', hpmd.datan.updateFn);
                            vid.removeEventListener('ended', hpmd.datan.endedFn);
                        }
                        vid = slides[state.id].querySelector('video');
                        if (!!vid) {
                            vid.removeEventListener('timeupdate', hpmd.datan.updateFn);
                            vid.removeEventListener('ended', hpmd.datan.endedFn);
                        }
                        _hpmdTN.closePopup();
                        // }, 310);
                        window.scrollBy(0, 0);
                        // if (hpmd.datan.isIOs()) {
                        //     window.location = stories[state.id].story_link;
                        // } else {
                        window.open(
                            stories[state.id].story_link,
                            null,
                            null,
                            false
                        );
                        // }
                    }
                }
                if (!vid) {
                    vid = null;
                    autoRenderer.resume();
                }
            }
            if (percentValueY >= 0.25) {
                // if (stories[state.id].story_link) {
                var pw = hpmd.data.storiesCount / hpmd.data.storiesLength;
                if (pw > 1) {
                    pw = 1;
                }
                if (!isEnd) {
                    isEnd = true;
                    // hpmd.trackEvent('hpmd-view-percent', {
                    //     weight: Math.round(pw)
                    // });
                    // hpmd.trackEvent('hpmd-view-pages', {
                    //     weight: hpmd.data.storiesCount
                    // });
                    // hpmd.trackEvent('hpmd.close'); // закрытие баннера после перехода
                    // hpmd.trackEvent("hpmd.time-expanded", {
                    //     weight: Math.round(((new Date()) - hpmd.data.openedAt) / 1000)
                    // });
                    // popup.classList.add('hpmdn-disable');
                }
                setTimeout(function () {
                    if (!!vid) {
                        vid.removeEventListener('timeupdate', hpmd.datan.updateFn);
                        vid.removeEventListener('ended', hpmd.datan.endedFn);
                    }
                    vid = slides[state.id].querySelector('video');
                    if (!!vid) {
                        vid.removeEventListener('timeupdate', hpmd.datan.updateFn);
                        vid.removeEventListener('ended', hpmd.datan.endedFn);
                    }
                    _hpmdTN.closePopup();
                    setTransform(
                        popup,
                        'translate3d(0%, 0%, 0) scale(1)'
                    );
                }, 310);
                window.scrollBy(0, 0);
                popup.classList.remove('hpmdn-notransition');
                setTransform(
                    popup,
                    'translate3d(0%, 100%, 0) scale(.95)'
                );
                // }
            } else if (percentValueY < 0.25) {
                popup.classList.remove('hpmdn-notransition');
                setTransform(
                    popup,
                    'translate3d(0%, 0%, 0) scale(1)'
                );
            } else if (!!vid) {
                vid.currentTime = 0;
                vid.play();
            }
            if (!!video) {
                video.play();
            }
        }
        // console.log(percentValueY)
        function increment(x, max) {
            var newX = (realLen === 1) ? x : x + 1;
            return newX >= max ? 0 : newX;
        }
        function decrement(x, max) {
            var newX = (realLen === 1) ? x : x - 1;
            return newX < 0 ? max - 1 : newX;
        }
        function getElement(selector) {
            if (first(selector) === '#') {
                return hpmd.data.nodes[selector.slice(6)];
            } else {
                return container.querySelector(selector);
            }
        }
        function getElementsArray(selector) {
            return slice.call(slider.querySelectorAll(selector) || []);
        }
        function init(options) {
            slider = getElement(options.sliderSelector);
            slides = getElementsArray(options.slideSelector);
            hpmd.datan.slides = slides;
            state.id = options.initId;
            slides.forEach(function (slide) {
                var v = slide.querySelector('video');
                if (!!v) {
                    v.currentTime = 0;
                }
            });
            len = slides.length;
            padding = options.padding || 0;
            progressNode = getElement(options.paginationSelector);
            progressParts = createPagination(progressNode, len);
            slides.forEach(function (slide, index) {
                if (index === options.initId) {
                    slide.classList.add('hpmdn-active');
                }
            });
            slides.forEach(function (slide) {
                var v = slide.querySelector('video');
                if (!!v) {
                    v.addEventListener('timeupdate', hpmd.datan.updateFn);
                    v.addEventListener('ended', hpmd.datan.endedFn);
                }
            })
            if (state.id > 0) {
                Array(state.id).fill().forEach(function (_, id) {
                    setStyles(
                        progressParts[id].querySelector('div'),
                        {
                            width: percent(100)
                        }
                    );
                });
            }
            if (state.id === 0) {
                slides[slides.length - 1].classList.add('hpmdn-left');
            } else {
                slides[state.id - 1].classList.add('hpmdn-left');
            }
            slides[state.id].classList.add('hpmdn-active');
            if (state.id === slides.length - 1) {
                slides[0].classList.add('hpmdn-right');
            } else {
                slides[state.id + 1].classList.add('hpmdn-right');
            }
            slider.addEventListener('mousedown', handleStart, false);
            slider.addEventListener('mousemove', handleMove, false);
            slider.addEventListener('mouseup', handleEnd, false);
            vid = slides[state.id].querySelector('video');
            autoRenderer = new Renderer({duration: 6000})
                .onUpdate(function (progress) {
                    var progId = stories[state.id].copy_id !== undefined ? stories[state.id].copy_id : state.id;
                    setStyles(
                        progressParts[progId].querySelector('div'),
                        {
                            width: percent(100 * progress)
                        }
                    );
                    if (progress === 1) {
                        move('right', false);
                        setTimeout(function () {
                            vid = slides[state.id].querySelector('video');
                            if (!vid) {
                                vid = null;
                                autoRenderer.restart();
                            } else {
                                vid.currentTime = 0;
                                vid.play();
                            }
                        }, 310);
                    }
                })
            vid = slides[state.id].querySelector('video');
            if (!vid) {
                vid = null;
                autoRenderer.start();
            } else {
                vid.currentTime = 0;
                vid.play();
            }
            hpmd.data.autoRenderer = autoRenderer;
        }
        function stop() {
            progressParts.forEach(function (item, id) {
                setStyles(
                    item.querySelector('div'),
                    {
                        width: percent(0)
                    }
                );
            });
            slides.forEach(function (slide) {
                slide.classList.remove('hpmdn-left')
                slide.classList.remove('hpmdn-active')
                slide.classList.remove('hpmdn-right')
            })
            slider.removeEventListener('mousedown', handleStart, false);
            slider.removeEventListener('mousemove', handleMove, false);
            slider.removeEventListener('mouseup', handleEnd, false);
            if (!!autoRenderer) autoRenderer.stop();
        }
        function percent(x) {
            return x + '%';
        }
        return {
            init: init,
            stop: stop
        }
    }
    function setTransform(node, value) {
        var transforms = [
            "transform",
            "msTransform",
            "webkitTransform",
            "mozTransform",
            "oTransform"
        ];
        transforms.forEach(function (transformName) {
            node.style[transformName] = value;
        });
    }
    // function getTouch(event, start) {
    //     var name = start ? 'touches' : 'changedTouches';
    //     return (!!event[name]) ? event[name][0] : event;
    // }
    // function getCoord(touch) {
    //     return {
    //         x: touch.clientX,
    //         y: touch.clientY
    //     }
    // }
    function getCoord(event) {
        return {
            x: event.clientX,
            y: event.clientY
        }
    }
    function rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    function percent(value) {
        return value + '%';
    }
    var timer = animationFrameTimer(6000);
    var timer2 = animationFrameTimer(6000);
    var sliderState = {
        start: {x: 0, y: 0},
        move: {x: 0, y: 0},
        current: {x: 0, y: 0},
        progress: 0,
        isBlock: false,
        page: 1
    }
    var rangeState = {
        start: {x: 0, y: 0},
        move: {x: 0, y: 0},
        progress: 0,
        isBlock: false
    }
    var isShowFirstPage = false;
    var isShowSecondPage = false;
    function animationFrameTimer(time) {
        var watchers = [];
        var rid = null;
        var startTime = 0;
        var currentTime = 0;
        var playing = false;
        var forcedStopped = false;
        var startPauseTime = 0;
        var endPauseTime = 0;
        function notify(value) {
            watchers.forEach(function (watcher) {
                watcher(value);
            });
        }
        function render() {
            if (forcedStopped) return;
            if (playing) rid = requestAnimationFrame(render);
            currentTime = (Date.now() - startTime) - (endPauseTime - startPauseTime);
            if (currentTime <= time) {
                notify({
                    name: 'progress',
                    value: currentTime / time
                });
            } else {
                playing = false;
                cancelAnimationFrame(rid);
                notify({
                    name: 'finish',
                    value: 1
                });
            }
        }
        return {
            watch: function (watcher) {
                watchers.push(watcher);
            },
            start: function () {
                if (forcedStopped) return;
                endPauseTime = 0;
                startPauseTime = 0;
                cancelAnimationFrame(rid);
                playing = true;
                startTime = Date.now();
                rid = requestAnimationFrame(render);
            },
            pause: function () {
                startPauseTime = Date.now();
                cancelAnimationFrame(rid);
                playing = false;
            },
            resume: function () {
                endPauseTime = Date.now();
                playing = true;
                // startTime = Date.now();
                rid = requestAnimationFrame(render);
            },
            stop: function () {
                playing = false;
                cancelAnimationFrame(rid);
            },
            forcedStop: function () {
                forcedStopped = true;
                cancelAnimationFrame(rid);
            },
            forcedStart: function () {
                endPauseTime = 0;
                startPauseTime = 0;
                forcedStopped = false;
                this.start();
            }
        }
    }
    function calculateBorderRadius(elem, percent) {
        var value = elem.offsetHeight * percent;
        elem.style.borderRadius = value + 'px';
    }
    function calculateTextSize(elem) {
        elem.style.fontSize = Math.round(elem.offsetHeight * 0.27) + 'px';
        elem.style.lineHeight = Math.round(elem.offsetHeight * 0.8) + 'px';
    }
    function destroyBanner() {
        /* Отключите здесь любые обработчики событий,
                     * которые были включены при запуске или в процессе
                     * работы баннера.
                     */
        // На случай, если скролл в данный момент отключен,
        // пробуем включить его.
        container.parentNode.removeChild(container);
    }
    function preloadImages(images, callback) {
        var loaded = 0, imageObjects = [];
        var handler = function () {
            loaded++;
            if (loaded == images.length && !!callback) {
                callback();
            }
        };
        for (var i = 0; i < images.length; i++) {
            imageObjects[i] = new Image();
            imageObjects[i].onload = handler;
            imageObjects[i].onerror = handler;
            imageObjects[i].src = images[i];
        }
    }
    function hasAudio(video) {
        return (
            video.mozHasAudio ||
            Boolean(video.webkitAudioDecodedByteCount) ||
            Boolean(video.audioTracks && video.audioTracks.length)
        );
    }
    function setStyles(elem, styles) {
        for (var key in styles) {
            elem.style[key] = styles[key];
        }
    }
    // function getTouch(event, isStart) {
    //     var propName = isStart ? 'touches' : 'changedTouches';
    //     return !!event[propName] ? event[propName][0] : event;
    // }
    function getPosition(event) {
        return {
            x: event.pageX,
            y: event.pageY
        }
    }
    function setTransform(node, value) {
        var transform = 'transform';
        var capTransform = capitilize(transform);
        var prefix = ['Webkit', 'Moz', 'O', ''];
        var prop = '';
        prefix.forEach(function (prefix) {
            prop = (prefix != '') ? (prefix + capTransform) : transform;
            node.style[prop] = value;
        });
    }
    function teaserScroll(sliderContainer, length) {
        var state = {
            start: {x: 0, y: 0},
            move: {x: 0, y: 0},
            end: {x: 0, y: 0},
            curr: {x: 0, y: 0},
            old: {x: 0, y: 0}
        }
        function handleStart(event) {
            sliderContainer.classList.remove('hpmdn-transition');
            //var touch = getTouch(event, true);
            state.start = getPosition(event);
        }
        function handleMove(event) {
          //  var touch = getTouch(event, false);
            state.move = getPosition(event);
            state.curr = {
                x: state.old.x + (state.move.x - state.start.x),
                y: state.old.y + (state.move.y - state.start.y)
            };
            var width = ((3 + ((length - 1) * 19.4)) + 16.4 + 3) / 100 * window.innerWidth;
            var maxX = width > window.innerWidth ? width - window.innerWidth : 0;
            var currX = (state.curr.x <= -maxX)
                ? -maxX
                : (state.curr.x >= 0)
                    ? 0
                    : state.curr.x;
            setTransform(
                sliderContainer,
                'translate3d(' + currX + 'px, 0%, 0)'
            );
        }
        function handleEnd(event) {
            sliderContainer.classList.add('hpmdn-transition');
           // var touch = getTouch(event, false);
            state.end = getPosition(event);
            state.curr = {
                x: state.old.x + (state.end.x - state.start.x),
                y: state.old.y + (state.end.y - state.start.y)
            };
            var width = ((3 + ((length - 1) * 19.4)) + 16.4 + 3) / 100 * window.innerWidth;
            var maxX = width > window.innerWidth ? width - window.innerWidth : 0;
            var currX = (state.curr.x <= -maxX)
                ? -maxX
                : (state.curr.x >= 0)
                    ? 0
                    : state.curr.x;
            setTransform(
                sliderContainer,
                'translate3d(' + currX + 'px, 0%, 0)'
            );
            state.old = state.curr;
        }
        sliderContainer.addEventListener(
            'mousedown',
            handleStart,
            false
        );
        sliderContainer.addEventListener(
            'mousemove',
            handleMove,
            false
        );
        sliderContainer.addEventListener(
            'mouseup',
            handleEnd,
            false
        );
        return function removeListeners() {
            sliderContainer.removeEventListener(
                'mousedown',
                handleStart,
                false
            );
            sliderContainer.removeEventListener(
                'mousemove',
                handleMove,
                false
            );
            sliderContainer.removeEventListener(
                'mouseup',
                handleEnd,
                false
            );
        }
    }
    function createVideo(item) {
        var video = document.createElement('video');
        video.muted = true;
        video.playsinline = true;
        video.autoplay = 'autoplay';
        video.src = item.story_file;
        var isLoaded = false;
        // console.dir(video);
        // div.innerHTML = '<video muted playsinline autoplay="autoplay" src="' + item.story_file + '" /></video>';
        // video.addEventListener('loadedmetadata', function() {
        // if (isLoaded) return;
        // isLoaded = true;
        // console.log('audio: ', hasAudio(video));
        // });
        return video;
    }
    function createElem(item) {
        var div = document.createElement('div');
        div.classList.add('hpmdn-stories-item');
        div.setAttribute('data-story-id', item.story_external_id);
        switch (item.story_type) {
            case 'img':
                setStyles(div, {
                    background: 'url(' + item.story_file + ') no-repeat 50% 50%',
                    backgroundSize: 'cover'
                });
                break;
            case 'video':
                div.appendChild(createVideo(item));
                break;
        }
        if (item.story_link) {
            var linkBtn = document.createElement('div');
            linkBtn.classList.add('hpmdn-stories-item_link', 'hpmdn-zi');
            div.appendChild(linkBtn);
            linkBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                var pw = hpmd.data.storiesCount / hpmd.data.storiesLength;
                if (pw > 1) {
                    pw = 1;
                }
                if (!isEnd) {
                    isEnd = true;
                    // hpmd.trackEvent('hpmd-view-percent', {
                    //     weight: Math.round(pw)
                    // });
                    // hpmd.trackEvent('hpmd-view-pages', {
                    //     weight: hpmd.data.storiesCount
                    // });
                    // hpmd.trackEvent('hpmd.close'); // закрытие баннера после перехода
                    // hpmd.trackEvent("hpmd.time-expanded", {
                    //     weight: Math.round(((new Date()) - hpmd.data.openedAt) / 1000)
                    // });
                }
                // destroyBanner();
                // hpmd.trackEvent('hpmd-link');
                popup.classList.add('hpmdn-disable');
                // setTimeout(function() {
                _hpmdTN.closePopup();
                // }, 310);
                // hpmd.data.minimizeBanner();
                window.open(
                    item.story_link,
                    null,
                    null,
                    false
                );
            });
        }
        if (item.story_type === 'video') {
            var volume = document.createElement('div');
            var video = div.querySelector('video');
            // console.log(hasAudio(video));
            // console.log(video.webkitAudioDecodedByteCount);
            // if (hasAudio(video)) {
            volume.classList.add('hpmdn-stories-volume');
            volume.addEventListener('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                if (volume.classList.contains('hpmdn-active')) {
                    volume.classList.remove('hpmdn-active');
                    video.muted = true;
                } else {
                    volume.classList.add('hpmdn-active');
                    video.muted = false;
                }
            });
            // hpmd.datan.handleSwipe2(volume, {
            //     tap: function (event) {
            //         event.stopPropagation();
            //         event.preventDefault();
            //         if (volume.classList.contains('hpmdn-active')) {
            //             volume.classList.remove('hpmdn-active');
            //             video.muted = true;
            //         } else {
            //             volume.classList.add('hpmdn-active');
            //             video.muted = false;
            //         }
            //     }
            // });
            div.appendChild(volume);
            // }
        }
        return div;
    }
    function renderStoriesItems(storiesItemsWrap, storiesItems) {
        var items = [].slice.call(
            storiesItemsWrap.querySelectorAll('.hpmdn-stories-item') || []
        );
        storiesItems.forEach(function (item) {
            storiesItemsWrap.appendChild(createElem(item));
        });
    }
    function createTeaserSlides(container, stories) {
        function createSlider(container) {
            return function (story, id, arr) {
                if (!story) return;
                var div = document.createElement('div');
                setStyles(div, {
                    width: '16.4%',
                    paddingBottom: '16.4%',
                    top: '50%',
                    left: (18 + (id * 21)) + '%',
                    position: 'absolute',
                    background: 'url(' + story.story_file + ') no-repeat 50% 50%',
                    backgroundSize: 'cover'
                });
                div.classList.add(
                    'hpmdn-teaser__slide',
                    'hpmdn-teaser__slide' + (id + 1)
                );
                if (story.story_type === 'video') {
                    // div.innerHTML = '<video muted playsinline autoplay="autoplay" loop="loop" src="' + story.story_file + '" /></video>'
                    var video = document.createElement('video');
                    video.muted = true;
                    video.playsinline = true;
                    video.autoplay = 'autoplay'
                    video.loop = true;
                    video.src = story.story_file;
                    div.appendChild(video);
                }
                container.appendChild(div);
                div.addEventListener('click', function (e) {
                    bgModal.classList.add('hpmdn-modal-bg-visible');
                    popup.classList.remove('hpmdn-disable');
                    // hpmd.trackEvent('hpmd.expand');
                    storiesWrap.setAttribute('data-stories', id);
                    if (!!sliderObj) sliderObj.stop();
                    sliderObj = initSlider()
                    sliderObj.init({
                        sliderSelector: '.hpmdn-stories-items',
                        slideSelector: '.hpmdn-stories-item',
                        paginationSelector: '.hpmdn-pagination',
                        padding: 1,
                        story: stories,
                        initId: id
                    });
                    timerLoop.start();
                    hpmd.data.storiesCount = 1;
                    if (!visibilityRun) {
                        hpmd.data.openedAt = new Date();
                        visibilityRun = true;
                        hpmd.datan.checkViewability('hpmdn', function (percent) {
                            console.log(percent);
                            // hpmd.trackEvent('overlap-percent', {
                            //     weight: percent
                            // });
                            clearTimeout(hpmd.datan.viewIID);
                        });
                    }
                    _hpmdTN.openPopup();
                });
                return div;
            }
        }
        // if (stories.length < 5) {
        //     setStyles(container, {
        //         left: ((100 - (19.4 * stories.length)) / 2) + '%'
        //     });
        // }
        return stories.map(createSlider(container))
    }
    /**
     * Ожидаем появления баннера на экране
     *
     * Код нативных баннеров запускается при загрузке страницы, но начинают работать
     * они только тогда, когда появятся на экране после скролла пользователя. Переданный
     * функции hpmd.ready() обработчик будет вызван, когда баннер должен начать работу.
     */
    var images = [
        './banner/img/teaser-close.png',
        './banner/img/link.png',
        './banner/img/sound_on.png',
        './banner/img/sound_off.png',
        './banner/img/link1.png',
        './banner/img/link2.png'
    ];
    var stories;
    function assign(target, sources) {
        var sources = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < sources.length; i++) {
            for (var key in sources[i]) {
                target[key] = sources[i][key];
            }
        }
        return target;
    }
    function removeQueryParamsFromUrl(url) {
        return url.split('?')[0];
    }
    function addStoriesQuery(url) {
        return url.length > 0 ? url.concat('?from=stories') : url;
    }
    function normilizeStoriesItems(items) {
        var newItems = [];
        if (items.length === 2) {
            newItems = items.concat(items.map(function (item, id) {
                return assign({}, item, {
                    copy_id: id
                });
            }));
        } else if (items.length === 1) {
            newItems = Array(3).fill(items[0]).map(function (item, id) {
                if (id === 0 || id === 2) {
                    return assign({}, item, {
                        copy_id: 0
                    });
                }
                return item;
            })
        } else {
            newItems = items;
        }
        return newItems.map(function (item) {
            return assign(item, {
                story_link: addStoriesQuery(
                    removeQueryParamsFromUrl(item.story_link)
                )
            })
        });
    }
    function createLoopTimer(delay, fn) {
        var tid = null;
        var isPlaying = false;
        function tick() {
            if (isPlaying) tid = setTimeout(tick, delay);
            fn();
        }
        return {
            start: function () {
                isPlaying = true;
                tid = setTimeout(tick, delay);
            },
            stop: function () {
                isPlaying = false;
                clearTimeout(tid);
            }
        }
    }
    //if (hpmd.getStories === undefined) {
    hpmd.getStories = function (cb) {
        cb({
            stories: [
                {
                    story_file: "./banner/b9bf71c14701c9964b21e4c3110037e4/img-461388606.jpeg",
                    story_id: "87174",
                    story_link: "https://www.the-village.ru/village/children/children-guide/347907-deti-v-gorode",
                    story_type: "img"
                },
                {
                    story_file: "./banner/b9bf71c14701c9964b21e4c3110037e4/img-530008935.jpeg",
                    story_id: "87174",
                    story_link: "https://www.the-village.ru/village/children/children-guide/347907-deti-v-gorode",
                    story_type: "img"
                },
                {
                    story_file: "./banner/b9bf71c14701c9964b21e4c3110037e4/img-2056867678.jpeg",
                    story_id: "87174",
                    story_link: "https://www.the-village.ru/village/children/children-guide/347907-deti-v-gorode",
                    story_type: "img"
                }
            ],
            user: {
                story_user_full_name: "The Village",
                story_user_link: "https://instagram.com/villagemsk",
                story_user_nick_name: "villagemsk",
                story_user_pic: "http://banner.hpmdnetwork.ru/upload/9/9/5/0/9950/6cecd381276493640221de5841d6e07f/stories-even/img-462591187.jpeg"
            }
        })
    }
    //}
    wrapper.style.display = 'none';
    hpmd.getStories(function (data) {
        stories = normilizeStoriesItems(data.stories);
        data.stories.forEach(function (item) {
            if (item.story_type === 'img') {
                images.push(item.story_file);
            }
        });
        hpmd.data.storiesLength = data.stories.length;
        hpmd.data.storiesCount = 0;
        renderStoriesItems(
            storiesItemsWrap,
            stories
        );
        preloadImages(images, function () {
            _hpmdTN.popupDimensions();
            if (data.stories.length > 0) {
                wrapper.removeAttribute('style');
            }
            profile.setAttribute('data-profile', data.user.story_user_nick_name);
            // titleNode.innerHTML = 'Смотрите истории @' + data.user.story_user_nick_name;
            profile.addEventListener('click', function () {
                popup.classList.add('hpmdn-disable');
                // setTimeout(function() {
                _hpmdTN.closePopup();
                // }, 310);
                // hpmd.trackEvent('hpmd-profile');
                window.open(
                    data.user.story_user_link,
                    null,
                    null,
                    false
                );
            });
            createTeaserSlides(
                teaserSlider,
                stories.filter(function nonCopy(item) {
                    return item.copy_id == undefined;
                })
            );
            teaserScroll(
                teaserSlider,
                stories.length
            );
            /* При "тапе" на баннер открываем ссылку */
            close.addEventListener('click', function (e) {
                e.stopPropagation();
                sliderObj.stop();
                timerLoop.stop();
                var pw = hpmd.data.storiesCount / hpmd.data.storiesLength;
                if (pw > 1) {
                    pw = 1;
                }
                if (!isEnd) {
                    isEnd = true;
                    // hpmd.trackEvent('hpmd-view-percent', {
                    //     weight: Math.round(pw)
                    // });
                    // hpmd.trackEvent('hpmd-view-pages', {
                    //     weight: hpmd.data.storiesCount
                    // });
                    //
                    // hpmd.trackEvent('hpmd.close');  // закрытие баннера
                }
                _hpmdTN.closePopup();
            });
        });
    });
});