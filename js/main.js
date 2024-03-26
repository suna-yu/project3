// nav 
$('.nav-link').on('click', () => {
    $('#nav-toggle').prop('checked', false);
})

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
}, 5000);

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