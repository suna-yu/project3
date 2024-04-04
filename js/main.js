// 팝업메시지
const pop = $('.popup');
$('.popup .close').on('click', function(){
    $(pop).hide();
});

// nav 
$('.nav-link').on('click', () => {
    $('#nav-toggle').prop('checked', false);
})

// header
let slide = $('header .visual img');
let current = 0;

slide.each((i, o) => {
    $(o).css('left', i * 100 +'%');
});

function slideFn() {
    let prev = slide.eq(current);
    move(prev, 0, '-100%');
    current++; 
    if (current == slide.length) {
        current = 0;
    }; 
 
    let next = slide.eq(current); 
    move(next, '100%', 0); 
}

function move(tg, start, end){
    tg.css('left', start).stop().animate({left: end}, 1000);
}


// 간격실행
setInterval(function() {
    slideFn();
}, 4000);

// susu1 
const susu1 = $('.susu1 .visual img');
let idx = 0;
function fadeSilde() {
    susu1.removeClass('on');
    susu1.eq(idx).addClass('on');
    idx++; 
    if (idx > susu1.length - 1) {
        idx = 0;
    }
}
fadeSilde();
setInterval(() => {
    fadeSilde();
}, 3000);

// susu2 
$('.susu2 .visual > div:first-child').css('flex-grow', '1');
$('.susu2 .visual > div').mouseenter(function() {
    $('.susu2 .visual > div').css('flex-grow', '0');
    $(this).css('flex-grow', '1');
}).mouseleave(function() {
    if (!$(this).is('.susu2 .visual')) {
        $(this).css('flex-grow', '0');
        $('.susu2 .visual > div:first-child').css('flex-grow', '1');
    }
}); 

// place toggle
const placeBtn = $('.place .toggle > .toggle-btn');
placeBtn.on('click', () => {
    $('.place').toggleClass('toggle');
    $('.place .container').toggleClass('toggle');
    // '.toggle-btn'의 현재 텍스트에 따라 토글
    if ($(placeBtn).text() === '더 보기') {
        $(placeBtn).text('닫기');
    } else {
        $(placeBtn).text('더 보기');
    }
}) 

// map
var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(35.77085,129.2010), 
        level: 3 
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerPosition  = new kakao.maps.LatLng(35.77085, 129.2010); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

var iwContent = '<div style="padding:5px;">감성 한옥 수수<br><a href="https://map.kakao.com/link/map/감성한옥수수,35.77085,129.2010" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/감성한옥수수,35.77085,129.2010" style="color:blue" target="_blank">길찾기</a></div>', 
    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); 

var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
infowindow.open(map, marker); 