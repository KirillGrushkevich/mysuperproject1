var slideRu = 0;
showSlidesRu(slideRu);

function plusRu() {
    showSlidesRu(slideRu = 1);
}

function minusRu() {
    showSlidesRu(slideRu = 0);  
}

function currentSlideRu(n) {
    showSlidesRu(slideRu = n);
}

function showSlidesRu(n) {
    var str1 = document.getElementsByClassName("lang__dropdown");
    var str2 = document.getElementsByClassName("lang__dropdown-button");
    var str3 = document.getElementsByClassName("lang__dropdown-button2");

    if (n == 0) {
        str1[0].style.display = "none";
        str2[0].style.display = "block";
        str3[0].style.display = "none";
    }
    if (n == 1) {
        str1[0].style.display = "block";
        str2[0].style.display = "none";
        str3[0].style.display = "block";
    }
}