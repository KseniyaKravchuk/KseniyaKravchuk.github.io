
//для lentainform
// if (typeof _mgqp !== "function") {
//   function _mgqp() { return false; }
//   var arr1 = [];
//   for(var i=0; i<10; i++){ arr1[i] = ''; }
//   var arr2 = [];
//   for(var i=0; i<10; i++){ arr2[i] = arr1; }
//   var _mgq = [];
//   for(var i=0; i<10; i++){ _mgq[i] = arr2; }
// }


// Rambler News
function ramblerNews(id, name){
  if (mob == false) {
    var userId = window.localStorage.getItem("RamblerExchangeUserId");
    if (!userId) {
      userId = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (z) {
        var rnd = Math.random() * 16 | 0, v = z == 'x' ? rnd : (rnd & 0x3 | 0x8);
        return v.toString(16);
      });
      window.localStorage.setItem("RamblerExchangeUserId", userId);
    }
    (function($){
      $.getJSON("https://api.rnet.plus/service/blocks?ids=41&user_id=" + userId, function(data){
        var className = 'rambler-news';
        var blockName = '';
        if (name) {
          blockName = '<div class="name">Новости партнеров</div>';
        }
        var bnLength = data[0].banners.length;
        var massBlock = [];
        for (var i = 0; i < bnLength; i++) {
          var $dbi = data[0].banners[i];
          var thisBlock = '<a href="' + $dbi.url + '" target="_blank" data-bid="' + $dbi.banner_id + '">'
            + '<img src="' + $dbi.logo + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
            + '<span>' + $dbi.title + '</span>'
            + '</a>';
          massBlock.push(thisBlock);
        }
        var htmlGetParse = '<div class="partner-news ' + className + '">'
          + blockName
          + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
          + '</div>';
        $('#' + id).prepend(htmlGetParse);
      });
    })(jQuery);
  }
  console.log('ramblerNews call');
}

// DirectAdvert
function directAdvert(id, name){
  if (mob == false) {
    (function($){
      $.ajax({
        dataType: 'jsonp',
        url: 'https://code.directadvert.ru/data/1202466.js?json=1&num=10',
        success: function(data) {
          var className = 'direct-advert-news';
          var blockName = '';
          if (name) {
            blockName = '<div class="name">Новости партнеров</div>';
          }
          var bnLength = data.length;
          var massBlock = [];
          var massBlock_2 = [];
          for (var i = 0; i < bnLength; i++) {
            var $dbi = data[i];
            var thisBlock = '<a href="' + $dbi.url + '" target="_blank" data-announce="' + $dbi.announce + '">'
              + '<span class="wrap_img">'
              +   '<img src="' + $dbi.img.replace("100x100", "200x200") + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
              + '</span>'
              + '<span>' + $dbi.title + '</span>'
              + '</a>';
            if (i < 5) {
              massBlock.push(thisBlock);
            } else {
              massBlock_2.push(thisBlock);
            }
          }
          var htmlGetParse = ''
            + '<style>'
            + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
            + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
            + '</style>'
            + '<div class="partner-news ' + className + '">'
            + blockName
            + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
            + '<div class="partner-news-content">' + massBlock_2.join('') + '</div>'
            + '</div>';
          $('#' + id).prepend(htmlGetParse);
        }
      });
    })(jQuery);
  }
  console.log('directAdvert call');
}

// DirectAdvert or 24smi
function directAdvertOr24smi(id, name){
    var randomBoolean = Math.random() >= 0.5;


    if (randomBoolean) {
        (function ($) {
            $.ajax({
                dataType: 'jsonp',
                url: 'https://code.directadvert.ru/data/1202466.js?json=1&num=5',
                success: function (data) {
                    var className = 'direct-advert-news';
                    var blockName = '';
                    if (name) {
                        blockName = '<div class="name">Новости партнеров</div>';
                    }
                    var bnLength = data.length;
                    var massBlock = [];

                    for (var i = 0; i < bnLength; i++) {
                        var $dbi = data[i];
                        var thisBlock = '<a href="' + $dbi.url + '" target="_blank" data-announce="' + $dbi.announce + '">'
                            + '<span class="wrap_img">'
                            + '<img src="' + $dbi.img.replace("100x100", "200x200") + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
                            + '</span>'
                            + '<span>' + $dbi.title + '</span>'
                            + '</a>';
                        massBlock.push(thisBlock);
                    }
                    var htmlGetParse = ''
                        + '<style>'
                        + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
                        + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
                        + '</style>'
                        + '<div class="partner-news ' + className + '">'
                        + blockName
                        + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
                        + '</div>';
                    $('#' + id).prepend(htmlGetParse);
                }
            });
        })(jQuery);

    } else {
        (function ($) {
            $.ajax({
                dataType: 'jsonp',
                url: 'https://data.24smi.net/informer?object=11599&output=json',
                success: function (data) {
                    var className = 'direct-advert-news';
                    var blockName = '';
                    if (name) {
                        blockName = '<div class="name">Новости партнеров</div>';
                    }
                    var bnLength = data.news.length;
                    var massBlock = [];

                    for (var i = 0; i < bnLength; i++) {
                        var $dbi = data.news[i];
                        var thisBlock = '<a href="' + $dbi.url + '" target="_blank" data-announce="' + $dbi.announce + '">'
                            + '<span class="wrap_img">'
                            + '<img src="' + $dbi.img.replace("100x100", "200x200") + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
                            + '</span>'
                            + '<span>' + $dbi.title + '</span>'
                            + '</a>';
                        if (i > 4) {
                            break
                        } else {
                            massBlock.push(thisBlock);
                        }
                    }

                    var htmlGetParse = ''
                        + '<style>'
                        + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
                        + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
                        + '</style>'
                        + '<div class="partner-news ' + className + '">'
                        + blockName
                        + '<div class="partner-news-content">' + massBlock.join('') + '</div>'

                        + '</div>';
                    $('#' + id).prepend(htmlGetParse);
                }
            });
        })(jQuery);
    }
}

//сми2
// function smi2(contId, count = 10){
//     (function($) {
//         $.getJSON("https://smi2.ru/data/js/93971.js", function(data) {
//             var className = 'smi2-news';
//             var bnLength = data.news.length;
//             var massBlock = [];
//             for (var i = 0; i < Math.min(bnLength, count); i++) {
//                 var $dbi = data.news[i];
//                 var thisBlock = '<a href="' + $dbi.url + '" target="_blank">'
//                     + '<span class="wrap_img">'
//                     +   '<img src="' + $dbi.img + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
//                     + '</span>'
//                     + '<span>' + $dbi.title + '</span>'
//                     + '</a>';
//                 massBlock.push(thisBlock);
//             }
//             var htmlGetParse = ''
//                 + '<style>'
//                 + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
//                 + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
//                 + '</style>'
//                 + '<div class="partner-news ' + className + '">'
//                 + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
//                 + '</div>';
//             $('#' + contId).prepend(htmlGetParse);
//         });
//     })(jQuery);
// }

// smi2
function smi2(contId){
    (function($){
        var sc = document.createElement("script");
        sc.type = "text/javascript";
        sc.src = "//smi2.ru/data/js/94087.js";
        sc.async = true;

        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(sc, t);

        var htmlGetParse = '<div id="unit_94087"></div>';
        $('#' + contId).prepend(htmlGetParse, sc);
    })(jQuery);
}

// сми24
function smi24(id, name){
  if (mob == false) {
    (function($){
      $.getJSON("https://data.24smi.net/informer?object=10657&output=json", function(data){
        var className = 'smi24-news';
        var blockName = '';
        if (name) {
          blockName = '<div class="name">Новости партнеров</div>';
        }
        var bnLength = data.news.length;
        var massBlock = [];
        for (var i = 0; i < bnLength; i++) {
          var $dbi = data.news[i];
          var thisBlock = '<a href="' + $dbi.url + '" target="_blank">'
            + '<span class="wrap_img">'
            +   '<img src="' + $dbi.img + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
            + '</span>'
            + '<span>' + $dbi.title + '</span>'
            + '</a>';
          massBlock.push(thisBlock);
        }
        var htmlGetParse = ''
          + '<style>'
          + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
          + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
          + '</style>'
          + '<div class="partner-news ' + className + '">'
          + blockName
          + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
          + '</div>';
        $('#' + id).prepend(htmlGetParse);
      });
    })(jQuery);
  }
  console.log('smi24 call');
}

function da_5_smi_24(id, name) {
  if (mob == false) {
    (function($){
      $.ajax({
        dataType: 'jsonp',
        url: 'https://code.directadvert.ru/data/1202466.js?json=1&num=10',
        success: function(data) {
          var className = 'direct-advert-news';
          var blockName = '';
          if (name) {
            blockName = '<div class="name">Новости партнеров</div>';
          }
          var bnLength = data.length;
          var massBlock = [];
          //var massBlock_2 = [];

          for (var i = 0; i < bnLength; i++) {
            var $dbi = data[i];
            var thisBlock = '<a href="' + $dbi.url + '" target="_blank" data-announce="' + $dbi.announce + '">'
                + '<span class="wrap_img">'
                +   '<img src="' + $dbi.img.replace("100x100", "200x200") + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
                + '</span>'
                + '<span>' + $dbi.title + '</span>'
                + '</a>';
            if (i < 5) {
              massBlock.push(thisBlock);
            }
          }

          var htmlGetParse = ''
              + '<style>'
              + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
              + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
              + '</style>'
              + '<div class="partner-news ' + className + '">'
              + blockName
              + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
              + '</div>';
          $('#' + id).prepend(htmlGetParse);
        }
      });

      $.getJSON("https://data.24smi.net/informer?object=10657&output=json", function(data){
        var className = 'smi24-news';
        var blockName = '';
        if (name) {
          //blockName = '<div class="name">Новости партнеров</div>';
        }
        var bnLength = data.news.length;
        var massBlock = [];
        for (var i = 0; i < bnLength; i++) {
          var $dbi = data.news[i];
          var thisBlock = '<a href="' + $dbi.url + '" target="_blank">'
              + '<span class="wrap_img">'
              +   '<img src="' + $dbi.img + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
              + '</span>'
              + '<span>' + $dbi.title + '</span>'
              + '</a>';
          massBlock.push(thisBlock);
        }
        var htmlGetParse = ''
            + '<style>'
            + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
            + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
            + '</style>'
            + '<div class="partner-news ' + className + '">'
            + blockName
            + '<div class="partner-news-content partner-news-content-3">' + massBlock.join('') + '</div>'
            + '</div>';
        $('#' + id).prepend(htmlGetParse);
      });
    })(jQuery);
  }
  console.log('da_5_smi_24 call');
}

function infox_new(id, name){
  if (mob == false) {
    (function($){
      $.getJSON("http://rb.infox.sg/json?id=1307&external=true", function(data){
        var className = 'smi24-news';
        var blockName = '';
        if (name) {
          blockName = '<div class="name">Новости партнеров</div>';
        }
        var bnLength = data.length;
        var massBlock = [];
        for (var i = 0; i < bnLength; i++) {
          var $dbi = data[i];
          var thisBlock = '<a href="' + $dbi.url + '" target="_blank">'
            + '<span class="wrap_img">'
            +   '<img src="' + $dbi.img + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
            + '</span>'
            + '<span>' + $dbi.title + '</span>'
            + '</a>';
          var img = new Image();
          img.src = $dbi.zero_pixel;

          massBlock.push(thisBlock);
        }
        var htmlGetParse = ''
          + '<style>'
          + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
          + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
          + '</style>'
          + '<div class="partner-news ' + className + '">'
          + blockName
          + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
          + '</div>';
        $('#' + id).prepend(htmlGetParse);
      });
    })(jQuery);
  }
  console.log('infox new call');
}

//Infox
function infox(id, name){
  if (mob == false) {
    (function($){
      $.ajax({
        dataType: 'json',
        url: 'http://rb.infox.sg/json?id=1307&external=true',
        xhrFields: { withCredentials: true },
        success: function(data) {
          var className = 'infox-news';
          var blockName = '';
          if (name) {
            blockName = '<div class="name">Новости партнеров</div>';
          }
          var bnLength = data.length;
          var massBlock = [];
          for (var i = 0; i < bnLength; i++) {
            var $dbi = data[i];
            var thisBlock = '<a href="' + $dbi.url + '" target="_blank">'
              + '<img src="' + $dbi.img + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
              + '<img src="' + $dbi.AdFoxPixelURL +'" style="height:0;overflow:hidden;margin-bottom:0;" alt="" title="">'
              + '<span>' + $dbi.title + '</span>'
              + '</a>';
            var img = new Image();
            img.src = $dbi.zero_pixel;
            massBlock.push(thisBlock);
          }
          var htmlGetParse = '<div class="partner-news ' + className + '">'
            + blockName
            + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
            + '</div>';
          $('#' + id).prepend(htmlGetParse);
        }
      });
    })(jQuery);
  }
  console.log('infox call');
}

// lentainform
function lentainform(contId){
    var sc = document.createElement("script");
    sc.type = "text/javascript";
    sc.src = "//jsc.lentainform.com/f/o/forbes.ru.690060.js?t=" + ((d = new Date()) ? '' + d.getYear() + d.getMonth() + d.getUTCDate() + d.getUTCHours() : '');
    sc.async = true;

    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(sc, t);

    var htmlGetParse = '<div id="M276680ScriptRootC690060"></div>';
    $('#' + contId).prepend(htmlGetParse, sc);
}

// Mediametrics
var htmlGetParseJsonpMediametrics = '';
function callbackJsonpMediametrics(data){
  var className = 'mediametrics-news';
  var blockName = '';
  //var bnLength = data.length;
  var massBlock = [];
  for (var i = 0; i < 5; i++) {
    var $dbi = data[i];
    var thisBlock = '<a href="' + $dbi.link + '" target="_blank">'
      + '<span class="wrap_img">'
      +   '<img src="' + $dbi.image + '" width="153" height="109" alt="' + $dbi.title + '" title="' + $dbi.title + '">'
      + '</span>'
      + '<span>' + $dbi.title + '</span>'
      + '</a>';
    massBlock.push(thisBlock);
  }
  var allBlock = ''
    + '<style>'
    + '.' + className + ' .wrap_img { display:block; position:relative; height:109px; overflow:hidden; margin-bottom: 7px;}'
    + '.page-node .content .partner-news.' + className + ' .partner-news-content a img {position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}'
    + '</style>'
    + '<div class="partner-news ' + className + '">'
    + blockName
    + '<div class="partner-news-content">' + massBlock.join('') + '</div>'
    + '</div>';
  htmlGetParseJsonpMediametrics = allBlock;
}
function mediametrics(id, name){
  if (mob == false) {
    (function($){
      $.ajax({
        dataType: 'script',
        url: 'http://mediametrics.ru/partner/inject/online.jsonp.ru.js?callback=callbackJsonpMediametrics',
        success: function(data) {},
        complete: function(){
          $('#' + id).prepend(htmlGetParseJsonpMediametrics);
          htmlGetParseJsonpMediametrics = '';
        }
      });
    })(jQuery);
  }
  console.log('Mediametrics call');
}


//rotator
// пока у нас нет кода медиаметрикс
// можно в 3 строку поставить 3 блока - инфокс, лентаинформ и 24 сми
// в 4 строку рамблер, потом к нему добавим медиаметрикс в ротацию.
function adsRotator(row, functions, id, name) {
  var rand = 0;
  if (window.sessionStorage && window.localStorage) {
    rand = localStorage.getItem('partner_row_' + row);
    rand = parseInt(rand);
    if (!rand) {
      rand = 0;
    }
  } else {
    rand = randomInteger(0, (functions.length - 1));// пока 3 баннера
  }
  if (rand >= functions.length) {
    //если в сторадже большое число, а количество баннеров уменьшилось
    rand = 0;
  }
  //rand есть. из стораджа или рандомный
  window[functions[rand]](id, name);
  if (window.sessionStorage && window.localStorage) {
    var new_rand = rand + 1;
    if (new_rand >= functions.length) {
      new_rand = 0;
    }
    localStorage.setItem('partner_row_' + row, new_rand);
  }
}

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
