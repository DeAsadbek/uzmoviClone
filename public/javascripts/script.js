//  ---------- Owl-Carousel Code -------------

$('.owl-random.owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    margin: 10
});

$(document).ready(function () {
    $(".owl-treyler-clone .owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: true,
        navText: [$(".owl-treyler-clone .owl-nav .owl-left"), $(".owl-treyler-clone .owl-nav .owl-right")],
    });
});

$(document).ready(function () {
    $(".owl-green.two .owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: true,
        navText: [$(".owl-green.two .owl-nav .owl-left"), $(".owl-green.two .owl-nav .owl-right")],
    });
});


$(document).ready(function () {
    $(".owl-green.one .owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: true,
        navText: [$(".owl-green.one .owl-nav .owl-left"), $(".owl-green.one .owl-nav .owl-right")],
    });
});

$(document).ready(function () {
    $(".owl-blue .owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: true,
        navText: [$(".owl-blue .owl-nav .owl-left"), $(".owl-blue .owl-nav .owl-right")],
    });
});

$(document).ready(function () {
    $(".owl-orange .owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: true,
        navText: [$(".owl-orange .owl-nav .owl-left"), $(".owl-orange .owl-nav .owl-right")],
    });
});



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: false,
        autoplay: true,
        items: 1,
        dots: true,
        margin: 0,
        nav: true,
        navText: [$(".home-Carousel .owl-nav .owl-prev"), $(".home-Carousel .owl-nav .owl-next")],
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});

//  ---------- Owl-Carousel Code -------------

//  ---------- Snow Effect -------------

var snowmax = 12;
var snowcolor = new Array("#AAAACC", "#DDDDFF", "#CCCCDD", "#F3F3F3", "#F0FFFF", "#FFFFFF", "#EFF5FF");
var snowtype = new Array("Arial Black", "Arial Narrow", "Times", "Comic Sans MS");
var snowletter = "&#10052;";
var sinkspeed = 0.80;
var snowmaxsize = 50;
var snowminsize = 08;
var snowingzone = 2;
var snow = new Array();
var marginbottom;
var marginright;
var timer;
var i_snow = 0;
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent;
var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
var ns6 = document.getElementById && !document.all;
var opera = browserinfos.match(/Opera/);
var browserok = ie5 || ns6 || opera;

function randommaker(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}

function initsnow() {
    if (ie5 || opera) {
        marginbottom = document.body.clientHeight;
        marginright = document.body.clientWidth;
    } else if (ns6) {
        marginbottom = window.innerHeight;
        marginright = window.innerWidth;
    }
    marginright = marginright * 2;
    marginbottom = marginbottom * 2;
    var snowsizerange = snowmaxsize - snowminsize;
    for (i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("s" + i);
        snow[i].style.fontFamily = snowtype[randommaker(snowtype / length)];
        snow[i].size = randommaker(snowsizerange) + snowminsize;
        snow[i].style.fontSize = snow[i].size + "px";
        snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
        snow[i].sink = sinkspeed * snow[i].size / 5;
        if (snowingzone == 1) {
            snow[i].posx = randommaker(marginright - snow[i].size)
        }
        if (snowingzone == 2) {
            snow[i].posx = randommaker(marginright / 2 - snow[i].size)
        }
        if (snowingzone == 3) {
            snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4
        }
        if (snowingzone == 4) {
            snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2
        }
        snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size);
        snow[i].style.left = snow[i].posx + "px";
        snow[i].style.top = snow[i].posy + "px";
    }
    movesnow();
}

function movesnow() {
    for (i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
        snow[i].style.top = snow[i].posy + "px";
        if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
            if (snowingzone == 1) {
                snow[i].posx = randommaker(marginright - snow[i].size)
            }
            if (snowingzone == 2) {
                snow[i].posx = randommaker(marginright / 2 - snow[i].size)
            }
            if (snowingzone == 3) {
                snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4
            }
            if (snowingzone == 4) {
                snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2
            }
            snow[i].posy = 0;
        }
    }
    var timer = setTimeout("movesnow()", 50);
}
for (i = 0; i <= snowmax; i++) {
    document.write("<span id='s" + i + "' style='z-index:9998;position:absolute;top:-" + snowmaxsize + "px;'>" + snowletter + "</span>");
}
window.onload = initsnow;

//  ---------- Snow Effect -------------