var slideMenu = 1;
showSlidesMenu(slideMenu);

function plusMenu() {
    showSlidesMenu(slideMenu += 1);
}

function minusMenu() {
    showSlidesMenu(slideMenu -= 1);  
}

function currentSlideMenu(n) {
    showSlidesMenu(slideMenu = n);
}

function showSlidesMenu(n) {
    var i;
    var slides = document.getElementsByClassName("js_sandwich");
    var dots = document.getElementsByClassName("menu_wh");
    if (n > slides.length) {
      slideMenu = 1
    }
    if (n < 1) {
        slideMenu = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideMenu - 1].style.display = "block";
    dots[slideMenu - 1].className += " active";
}
