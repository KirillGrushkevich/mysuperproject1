var slideH = 0;
showSlidesH(slideH);

function plusH() {
    showSlidesH(slideH = 1);
}

function minusH() {
    showSlidesH(slideH = 0);  
}

function currentSlideH(n) {
    showSlidesH(slideH = n);
}

function showSlidesH(n) {
    var str1 = document.getElementsByClassName("header-slider-left");
    var str2 = document.getElementsByClassName("header-slider-right");

    if (n == 0) {
        str1[0].style.display = "flex";
        str2[0].style.display = "none";
    }
    if (n == 1) {
        str1[0].style.display = "none";
        str2[0].style.display = "flex";
    }
}