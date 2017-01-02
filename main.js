document.addEventListener("DOMContentLoaded", function () {
    //slajder
    var nextButton = document.querySelector('.arrow2');
    //console.log(nextButton);
    var prevButton = document.querySelector('.arrow');
    var liElements = document.querySelectorAll('.chairSlider ul li');

    var numer = 0;

    liElements[numer].classList.add('visible');


    nextButton.addEventListener('click', function () {

        liElements[numer].classList.remove('visible');
        numer = numer + 1;
        if (numer >= liElements.length) {
            numer = 0;
        }
        liElements[numer].classList.add('visible');

    });


    prevButton.addEventListener('click', function () {

        liElements[numer].classList.remove('visible');
        numer = numer - 1;
        if (numer < 0) {
            numer = liElements.length - 1;
        }
        liElements[numer].classList.add('visible');

    });

    //koniec slajdera
    //galernia znikające napisy
    var divWithPhoto1 = document.querySelector('.box3>div.img1');
    var divWithPhoto2 = document.querySelector('.box3>div.img2');
    var chair_title = document.querySelectorAll('.chair_title');

    divWithPhoto1.addEventListener('mouseover', function () {
        chair_title[0].style.display = 'none';
    });
    divWithPhoto1.addEventListener('mouseout', function () {
        chair_title[0].style.display = 'block';
    });
    divWithPhoto2.addEventListener('mouseover', function () {
        chair_title[1].style.display = 'none';
    });
    divWithPhoto2.addEventListener('mouseout', function () {
        chair_title[1].style.display = 'block';
    });
    /*jquery znikające napisy
    $(".box3 .img1").mouseenter(function () {
        $(".box3 .img1 .title").toggle();
    });
    $(".box3 .img1").mouseleave(function () {
        $(".box3 .img1 .title").toggle();
    });

    $(".box3 .img2").mouseenter(function () {
        $(".box3 .img2 .title").toggle();
    });
    $(".box3 .img2").mouseleave(function () {
        $(".box3 .img2 .title").toggle();
    });
    */
    //kalkulator
    var arrows = document.querySelectorAll('span.list_arrow');

    var listPanel = document.querySelectorAll('.list_panel');
    console.log(listPanel);

    var sumAll = document.querySelector('.sum');

    arrows[0].addEventListener('click', function () {
        if (listPanel[0].style.display === "block") {
            listPanel[0].style.display = "none";
        } else {
            listPanel[0].style.display = "block";
        }
    });
    arrows[1].addEventListener('click', function () {
        if (listPanel[1].style.display === "block") {
            listPanel[1].style.display = "none";
        } else {
            listPanel[1].style.display = "block";
        }
    });
    arrows[2].addEventListener('click', function () {
        if (listPanel[2].style.display === "block") {
            listPanel[2].style.display = "none";
        } else {
            listPanel[2].style.display = "block";
        }
    });


    var title = document.querySelector('h4.title2');
    var titleValue = document.querySelector('.title3.value');

    var placeForColor = document.querySelector('.panel_left .color');
    var placeForColorValue = document.querySelector('.panel_right .color.value');

    var placeForPattern = document.querySelector('.panel_left .pattern');
    var placeForPatternValue = document.querySelector('.panel_right .pattern.value');

    var placeForTransportValue = document.querySelector('.panel_right .transport.value');
    var placeForTransport = document.querySelector('.panel_left .transport')

    var nameOption = document.querySelectorAll('.first option');
    var colorOption = document.querySelectorAll('.second option');
    var patternOption = document.querySelectorAll('.third option');
    var checkbox = document.querySelector('.checkbox label');
    var transportInput = document.querySelector('#transport');
    var chairsImg = document.querySelectorAll('.image_part img')[0];


    var sum = 0;
    var colorPr = 0;
    var patternPr = 0;
    var titlePr = 0;
    var transportPrice = 0;

    function summAllPr() {
        sum = colorPr + patternPr + titlePr + parseFloat(transportPrice);
        return sum;
    }


    nameOption[0].addEventListener('click', function () {
        title.innerHTML = "Clair CHAIR";
        chairsImg.setAttribute("src", "images/red_chair.png");
        titlePr = 200;
        titleValue.innerHTML = titlePr;
        sumAll.innerHTML = summAllPr();
    });

    nameOption[1].addEventListener('click', function () {
        title.innerHTML = "Margarita CHAIR";
        titlePr = 300;
        titleValue.innerHTML = titlePr;
        chairsImg.style.width = "95%";
        chairsImg.setAttribute("src", "images/orange.png");
        sumAll.innerHTML = summAllPr();
    });

    nameOption[2].addEventListener('click', function () {
        title.innerHTML = "Selena CHAIR";
        chairsImg.style.width = "95%";
        chairsImg.setAttribute("src", "images/black_chair.png");
        titlePr = 400;
        titleValue.innerHTML = titlePr;
        sumAll.innerHTML = summAllPr();
    });

    colorOption[0].addEventListener('click', function () {
        placeForColor.innerHTML = "Czerwony";
        colorPr = 20;
        placeForColorValue.innerHTML = colorPr;
        sumAll.innerHTML = summAllPr();
    });

    colorOption[1].addEventListener('click', function () {
        placeForColor.innerHTML = "Czarny";
        colorPr = 50;
        placeForColorValue.innerHTML = colorPr;
        sumAll.innerHTML = summAllPr();
    });

    colorOption[2].addEventListener('click', function () {
        placeForColor.innerHTML = "Pomarańczowy";
        colorPr = 30;
        placeForColorValue.innerHTML = colorPr;
        sumAll.innerHTML = summAllPr();
    });

    patternOption[0].addEventListener('click', function () {
        placeForPattern.innerHTML = "Tkanina";
        patternPr = 50;
        placeForPatternValue.innerHTML = patternPr;
        sumAll.innerHTML = summAllPr();
    });

    patternOption[1].addEventListener('click', function () {
        placeForPattern.innerHTML = "Skóra";
        patternPr = 50;
        placeForPatternValue.innerHTML = patternPr;
        sumAll.innerHTML = summAllPr();
    });


    checkbox.addEventListener('click', function () {
        if (transportInput.checked == false) {
            transportPrice = parseFloat(transportInput.dataset.transportPrice);
            sumAll.innerHTML = colorPr + patternPr + titlePr + transportPrice;
            placeForTransportValue.innerHTML = transportPrice;
            placeForTransport.innerHTML = "transport";


        } else {
            transportPrice = 0;
            sumAll.innerHTML = colorPr + patternPr + titlePr + transportPrice;
            placeForTransportValue.innerHTML = 0;
        }
    });

});
