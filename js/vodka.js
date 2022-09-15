var slideVodka = 1;
showSlidesVodka(slideVodka);

function plusVodka() {
    showSlidesVodka(slideVodka += 1);
}

function minusVodka() {
    showSlidesVodka(slideVodka -= 1);  
}

function currentSlideVodka(n) {
    showSlidesVodka(slideVodka = n);
}

function showSlidesVodka(n) {
    var i;
    var slides = document.getElementsByClassName("vodka-item");
    if (n > slides.length) {
      slideVodka = 1
    }
    if (n < 1) {
        slideVodka = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideVodka - 1].style.display = "flex";
}