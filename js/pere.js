var slideP = 0;
showSlidesP(slideP);

function plusP() {
    showSlidesP(slideP = 1);
}

function currentSlideRu(n) {
    showSlidesP(slideP = n);
}

function showSlidesP(n) {
    var str1 = document.getElementsByClassName("b-age");
    var str2 = document.getElementsByClassName("pere");
    if (n == 1) {
        str1[0].style.display = "none";
        str2[0].style.display = "block";
    }
    if (n == 0) {
        str1[0].style.display = "block";
        str2[0].style.display = "none";
    }
}