(function ($) {


    function rating_methodology_init() {
        $('.rating_top_content .methodology_show').click( function(){
            $(this).hide();
            $('.rating_top_content .methodology').slideDown();
        });
    }


    function show_rating_table_lines() {
        var hidden_begin=0;
        var hidden_end=20;

        if(!$('.common_rating_list tbody tr.hidden').length) {
            $('.show_more_ratings').hide();
            return;
        }

        for(var i=1; i<1000; i++) {
            var search_line = '.common_rating_list tbody tr.line_' + i;
            var tr = $(search_line);
            if(tr.hasClass('hidden')) {
                if (!hidden_begin) {
                    hidden_begin = i;
                    hidden_end = hidden_begin - (-hidden_end);
                }
                if(i<hidden_end) {
                    tr.removeClass('hidden');
                }else{
                    break;
                }
            }
        }
    }

    $(document).ready(function(){
            if($(window).width()<415) {
                var tbl = $('table.common_rating_list');
                //tbl.find('tbody tr').append('<div class="clear"></div>');
                var field_names = [];
                tbl.find('thead th.before_photo, tbody td.before_photo').remove();
                console.log('before_photo columns removed');
                tbl.find('thead th').each(function(){
                    field_names.push($(this).text());
                });
                var tbl_count = field_names.length;
                var trs = tbl.find('tbody tr');
                trs.click(table_rating_show_details);
                trs.each(function(){
                    var tr = $(this);
                    tr.find('td').each(function(i, item){
                        if(i>1) {
                            //console.log(i,item,field_names[i]);
                            var it = $(item);
                            var value = it.text();
                            it.html('<div class="name">'+field_names[i]+'</div><div class="value">'+value+'</div>');
                        }
                    });
                    var aHrefProfile = tr.find('a.profile_title').attr('href');
                    if (aHrefProfile != undefined){
                        tr.append('<div class="to_learn_more"><a href="' + aHrefProfile + '" class="bt-blue-mode">Узнать больше</a></div>');
                        tr.find('.bt-blue-mode').click(function(){
                            document.location.assign($(this).attr('href'));
                        });
                    }
                });

            }else{
                if($('table.common_rating_list').DataTable) {
                    $.fn.dataTable.ext.type.order['name-family-pre'] = function ( d ) {
                        var dArr1 = d.split('<div class="descr"><h4>');
                        if(dArr1[1]){
                            var dArr2 = dArr1[1].split('</h4>');
                            if(dArr2[1]) {
                                var dArr3 = dArr2[0].split(' ');
                                if(dArr3[1]) {
                                    var family = dArr3.pop();
                                    dArr3.unshift(family);
                                    d = dArr3.join(' ');

                                    return d;
                                }
                            }
                        }
                        return d;
                    };

                    $('table.common_rating_list').DataTable({
                        "paging": false,
                        "info": false,
                        "searching":false,
                        "columnDefs": [ {
                            "type": "name-family",
                            "targets": 1
                        } ]
                    });
                }
            }


            if($('.common_rating_list tbody tr.hidden').length) {
                $('.show_more_ratings').click(show_rating_table_lines);
            }else{
                $('.node-type-rating .show_more_ratings').hide();
            }

            rating_methodology_init();
        });

    function table_rating_show_details() {
        var tr = $(this);
        var last_tr = tr.parent().find('.active');
        var new_h = 0;
        tr.find('td').each(function(i,item){
            if(i) new_h -= (-1)*$(item).outerHeight();
        });
        if (tr.find('.to_learn_more').length != 0){
            new_h += tr.find('.to_learn_more').outerHeight();
        }
        /*if(last_tr.length) {
         last_tr.removeClass('active');
         last_tr.animate({height: '100px'}, 1000, function () {
         $('html, body').animate({
         scrollTop: tr.offset().top-100
         }, 500, function(){
         tr.addClass('active');
         tr.animate({height: new_h+'px'}, 1000);
         });
         });
         }*/
        if(tr.hasClass('active')) {
            tr.removeClass('active');
            tr.animate({height:  $(this).attr('data-height')}, 800);
        }else{
            last_tr.removeClass('active');
            last_tr.animate({height:  last_tr.attr('data-height')}, 800);
            tr.addClass('active').attr('data-height', $(this).outerHeight()+'px');
            tr.animate({height: new_h+'px'}, 800);
        }
        return false;
    }
})(jQuery);


