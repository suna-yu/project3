// place toggle
const placeBtn = $('.place .toggle > .toggle-btn');
placeBtn.on('click', () => {
    $('.place').toggleClass('toggle');
    $('.place .container').toggleClass('toggle');
})