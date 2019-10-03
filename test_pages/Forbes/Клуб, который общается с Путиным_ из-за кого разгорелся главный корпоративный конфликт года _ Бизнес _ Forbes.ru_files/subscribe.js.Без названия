var ForbesSubscribe = /** @class */ (function () {
    function ForbesSubscribe() {
        var s = this;
        $('#forbes-subscribe, #forbes-subscribe a.subscribe-document__close').on('click', function () {
            s.hide();
        });
        $('#forbes-subscribe .subscribe-document').on('click', function (ev) {
            ev.stopPropagation();
        });
        // $('#forbes-subscribe .subscribe-document__checkbox, #forbes-subscribe-inpage .subscribe-document__checkbox').on('click', function () {
        //    let $chItem = $(this);
        //     let $c = $chItem.find('input');
        //     let $i = $chItem.find('img');
        //    if ($c.attr("checked") != 'checked'){
        //        $c.attr("checked", 'checked');
        //        $i.attr('src', 'img/i-checked.svg');
        //     }else{
        //        $c.removeAttr("checked");
        //        $i.attr('src', 'img/i-check.svg');
        //    }
        // });
        $(document).keyup(function (e) {
            if (e.key === "Escape") { // escape key maps to keycode `27`
                s.hide();
            }
        });
    }
    ForbesSubscribe.prototype.show = function () {
        $('#forbes-subscribe').addClass('show fadeIn');
        $('body').css('overflow', 'hidden');
    };
    ForbesSubscribe.prototype.hide = function () {
        $('#forbes-subscribe').removeClass('show fadeOut');
        $('body').css('overflow', 'auto');
    };
    return ForbesSubscribe;
}());
//# sourceMappingURL=subscribe.js.map