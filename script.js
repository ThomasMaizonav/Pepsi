function imgSlider(imageSrc, color, textColor, spanColor) {
    document.querySelector('.pepsi').src = imageSrc;
    changeColor(color, textColor, spanColor);
}

function changeColor(backgroundColor, textColor, spanColor) {
    const sec = document.querySelector('.sec');
    sec.style.background = backgroundColor;
    const textBox = document.querySelector('.textBox');
    textBox.querySelector('h2').style.color = textColor;
    textBox.querySelector('p').style.color = textColor;
    textBox.querySelector('a').style.color = textColor;
    textBox.querySelector('h2 span').style.color = spanColor;
}

function expandirImagem() {
    const imagem = document.querySelector('.logos__pepsi');
    imagem.classList.toggle('expandida');
}
