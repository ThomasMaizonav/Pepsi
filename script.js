function imgSlider(imageSrc, color) {
    document.querySelector('.pepsi').src = imageSrc
    changeColor(color)
}

function changeColor(color) {
    const sec = document.querySelector('.sec')
    sec.style.background = color
}