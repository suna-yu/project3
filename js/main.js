// place toggle
const placeBtn = $('.place .toggle > .toggle-btn');
placeBtn.on('click', () => {
    $(placeBtn).css('will-change', 'transform');
    $('.place').toggleClass('toggle');
    $('.place .container').toggleClass('toggle');
    setTimeout(() => {
        $(placeBtn).css('will-change', 'auto');
    }); 
})