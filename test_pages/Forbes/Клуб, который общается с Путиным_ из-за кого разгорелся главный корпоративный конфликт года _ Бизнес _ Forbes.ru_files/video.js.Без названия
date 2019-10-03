var youtubeCallbacks = [];

(function($){

    // плавный скролл к секции .video-main-block-more
    $('.btn-video-main-block-more-js').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 600, 'swing', function () {
        });
    });

    $(document).ready(function() {
        var videoMainPage = 2;
        $('.btn-show-block-more-js').on('click', function (e) {
            e.preventDefault();

            $(this).hide();
            $('.video-main-block-loading').show();

            $.ajax({
                url: "video/list/json/" + videoMainPage,
                dataType: 'json'
            }).done(function (data) {
                $('.video-main-block-loading').hide();
                if ($(data).filter('li').length === 4) {
                    $('.btn-show-block-more-js').show();
                }

                $('.video-main-block-more-wrap-left-list').append(data);
                videoMainPage++;
                bannerFixationBottom = ($('.video-serial-main-block').offset().top - parseInt($('.video-serial-main-block').css('margin-top')));
            });
        });

        var sectionLoading = false;
        // стилизация активного пункта меню .video-header-desktop-menu
        $('.video-header-desktop-menu__list>li').on('click', function () {
            if (sectionLoading) {
                return;
            }
            sectionLoading = true;

            $('.video-header-desktop-menu__list>li').removeClass('active');
            $(this).addClass('active');

            loadSectionVideo($(this).data('id'), $(this).data('url'));
        });

        $('#video-header-ipad-menu').on('change', function(e) {
            if (sectionLoading) {
                e.preventDefault();
                return;
            }
            sectionLoading = true;

            var $option = $('option', $(this)).filter(':selected');
            loadSectionVideo($option.data('id'), $option.data('url'));
        });

        loadSectionVideo = function(id, url) {
            if (window.history.replaceState) {
                //prevents browser from storing history with each change:
                window.history.replaceState(null, '', url);
            }

            $('.video-main-block__main-right-list').empty();
            $('.video-main-block-more-wrap-left-list').empty();

            $('.btn-show-block-more-js').hide();
            $('.btn-video-main-block-more-js').hide();
            $('.video-main-block-loading').show();
            $('.video-main-block-more-loading').show();

            var url = '/video/lists/json';
            if (id) {
                url += '/' + id;
            }

            $.ajax({
                url: url,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    sectionLoading = false;

                    $('.video-main-block-loading').hide();
                    $('.video-main-block-more-loading').hide();

                    $('.btn-video-main-block-more-js').show();

                    videoMainPage = 2;
                    if (data != '') {
                        $('.video-main-block__main-right-list').html(data.list1);
                        $('.video-main-block-more-wrap-left-list').html(data.list2);

                        if ($(data.list2).filter('li').length === 5) {
                            $('.btn-show-block-more-js').show();
                        }
                    }
                }
            });
        }
    });

    // показ больше видео в разделе .video-readers-choice
    var popularPage = 0;
    var popularSectionLoading = false;
    $('.popular-section-tab .list li').click(function(e) {
        e.preventDefault();

        if (popularSectionLoading) {
            return;
        }
        popularSectionLoading = true;

        if ($(this).hasClass('active')) {
            return;
        }

        $('.popular-section-tab .list li').removeClass('active');
        $(this).addClass('active');

        $('.video-readers-choice-loading').show();
        $('.btn-show-readers-choice-js').hide();
        $('.video-readers-choice-list').empty();

        var range = $(this).data('age');

        loadPopularVideo(range, 0, true);
    });

    $('.btn-show-readers-choice-js').on('click', function (e) {
        e.preventDefault();

        var range = $('.popular-section-tab .list li.active').data('age');

        $(this).hide();
        $('.video-readers-choice-loading').show();

        loadPopularVideo(range, ++popularPage);
    });

    loadPopularVideo = function(range, page, resetPage) {
        var url = '/video/popular/json/' + range;
        if (page) {
            url += '/' + page;
        }

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
        }).done(function(data) {
            $('.video-readers-choice-loading').hide();

            if ($(data).filter('li').length === 8) {
                $('.btn-show-readers-choice-js').show();
            }

            $('.video-readers-choice-list').append(data);

            popularSectionLoading = false;
            if (resetPage) {
                popularPage = 0;
            }
        });
    };

    // открытие pop-up-video на странице forbes main video
    $('.video-readers-choice-list, .video-main-block__main-right-list, .video-main-block-more-wrap-left-list, .video-serial-main-block-item').click(function (e) {
        $link = $(e.target);
        if (!$link.hasClass('wrapper-video-link-pop-up-js')) {
            return;
        }
        e.preventDefault();
        topToPage = $(this).offset().top;
        topToWindow = this.getBoundingClientRect().top;
        topPopUpScroll = topToPage - topToWindow;
        $('body').css("top", -topPopUpScroll + "px");

        history.pushState({}, null, $link.attr('href'));
        showVideoPopUp($link.parents('.video-main-item-js'), $link.attr('href'));
    });

    function showVideoPopUp($dataElement, link, autoplay = true) {
        $(".wrap-main-video--pop-up").append("<div id='pop-up-video-page'></div>");
        var videoTitle = $dataElement.data('video-title');
        $('.video-main-block-title--pop-up-js').text(videoTitle);
        var videoDescription = $dataElement.data('video-description');
        $('.video-main-block-description--pop-up-js').text(videoDescription);
        var videoSrc = $dataElement.data('video-src');
        var videoNameTag = $dataElement.data('video-name-tag');
        $('.video-info-name-js').text(videoNameTag);
        var videoDateTag = $dataElement.data('video-date-tag');
        $('.video-info-date-js').text(videoDateTag);
        var videoTimeTag = $dataElement.data('video-time-tag');
        $('.video-info-time-js').text(videoTimeTag);
        var videoSharesNumber = $dataElement.data('video-share-count');

        var url = 'http://www.forbes.ru/' + link;

        $('.pop-up-video .item-fb').attr('href',
            'http://www.facebook.com/sharer/sharer.php?u=' + url
        );
        $('.pop-up-video .item-vk').attr('href',
            'http://vk.com/share.php?title=' + videoTitle + '&url=' + url
        );
        $('.pop-up-video .item-tw').attr('href',
            'https://twitter.com/intent/tweet?text=' + videoTitle + '&url=' + url
        );
        $('.pop-up-video .item-fl').attr('href',
            'https://share.flipboard.com/bookmarklet/popout?ext=sharethis&title=' + videoTitle + '&url=' + url + '&utm_campaign=widgets&utm_content=about.flipboard.com&utm_source=sharethis&v=2'
        );
        $('.pop-up-video .item-tg').attr('href',
            'https://telegram.me/share/url?text=' + videoTitle + '&url=' + url
        );


        $('.video-shares-number-js').text(videoSharesNumber);
        $('.pop-up-video').removeClass("display-none");
        $("body").addClass("pop-up-open");

        var videoContainer = $('#pop-up-video-page');
        videoContainer.data('video-src', videoSrc);
        loadYoutubeVideo(videoContainer, autoplay);
    }

    // закрытие pop-up-video на странице forbes main video
    $('.btn-close-pop-up-video-js').on('click', function (e) {
        e.preventDefault();
        setTimeout ( function() {
            $('html, body').scrollTop(topPopUpScroll)
        }, 1 );
        $('.pop-up-video').addClass("display-none");
        $("body").removeClass("pop-up-open");
        history.pushState({}, null, '/video');
        $("#pop-up-video-page").data('video-src', '').remove();
    });

    // открытие главного видео на странице forbes main video
    $('.btn-play-main-video-js').on('click', function (e) {
        e.preventDefault();
        var videoSrc = $(e.target).parent('.wrap-main-video-js').data('video-src');
        $(this).hide();

        var videoContainer = $('#main-video-page');
        videoContainer.data('video-src', videoSrc);
        loadYoutubeVideo(videoContainer, true);
    });

    // active video
    $(document).ready(function() {
        var $videoActive = $('.video-main-active');
        if ($videoActive.length > 0) {
            youtubeCallbacks.push(function () {
                showVideoPopUp($videoActive, $videoActive.data('link'), false);
            });
        }
    });

    loadYoutubeVideo = function (container, autoplay = false) {
        if (!(container instanceof $)) {
            container = $(container);
        }

        var videoid = $(container).data('video-src');

        console.log('Video id is ' + videoid);

        if (!videoid) {
            return false;
        }

        var params = {};
        if (autoplay) {
            params.autoplay = 1;
        }

        return new YT.Player(container.get(0), {
            height: '360',
            width: '640',
            videoId: videoid,
            playerVars: params,
            events: {
                // 'onReady': onPlayerReady,
            }
        });
    };

    youtubeCallbacks.push(function () {
        $('div.youtube').each(function (indx, element) {
            loadYoutubeVideo(element);
        });
    });

    onYouTubeIframeAPIReady = function() {
        $.each(youtubeCallbacks, function(index, func) {
            func();
        });
    };

    // открыть pop-up видео
    $('.video-wide-js').on('click', function (e) {
        if ($('.content-wrap').find('.pop-up-video-15year-js').length > 0) {
            $('body').append($('.pop-up-video-15year-js'));
        }
        $link = $(this);
        e.preventDefault();
        topToPage = $link.offset().top;
        topToWindow = this.getBoundingClientRect().top;
        topPopUpScroll = topToPage - topToWindow;
        $('body').css("top", -topPopUpScroll + "px");
        showVideoPopUp($link, $link.attr('href'));
    });

    // закрыть pop-up-video
    $('.btn-close-pop-up-video-15year-js').on('click', function (e) {
        e.preventDefault();
        $("body").removeClass("pop-up-open");
        setTimeout ( function() {
            $('html, body').scrollTop(topPopUpScroll)
        }, 1 );
        $('.pop-up-video').addClass("display-none");
        history.pushState({}, null, '/15year');
        $("#pop-up-video-page").data('video-src', '').remove();
    });

    // клик по кнопке, открыть все социальные сети в pop-up-video
    var clickMoreSocial = false;
    $('.video-social-btn-15year-js').on('click', function (e) {
        if (clickMoreSocial == false) {
            clickMoreSocial = true;
            e.preventDefault();
            $('.item-social').show();
            $('.item-btn').hide();
        }
        return;
    });
})(jQuery);