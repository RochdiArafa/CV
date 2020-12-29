function openSlide1() {

    var selectSlide1 = document.querySelector('.slide1');
    var slides1 = selectSlide1.querySelectorAll('.modal1 .slide');

    var selectBtn1 = document.querySelector('.navigation1');
    var btns1 = selectBtn1.querySelectorAll('.slide1 .btn');

    let currentSlide1 = 1;

    // Javascript for image slider manual navigation
    var manualNav = function (manual) {
        slides1.forEach((slide) => {

            slide.classList.remove('active');

            btns1.forEach((btn) => {
                btn.classList.remove('active');
            });

        });

        slides1[manual].classList.add('active');
        btns1[manual].classList.add('active');
    }

    btns1.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide1 = i;
        });
    });

    /*
    // Javascript for image slider autoplay navigation
    var repeat = function (activeClass) {
        //let active = document.getElementsByClassName('active');
        //var selectBtn1 = document.querySelector('.navigation1');
    //var btns1 = selectBtn1.querySelectorAll('.slide1 .btn');
        let active = document.getElementsByClassName('active');

        let i = 1;

        var repeater = () => {
            setTimeout(function () {
                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active');
                });

                slides1[i].classList.add('active');
                btns1[i].classList.add('active');
                i++;

                if (slides1.length == i) {
                    i = 0;
                }
                if (i >= slides1.length) {
                    return;
                }
                repeater();
            }, 10000);
        }
        repeater();
    }
    repeat();*/
}

function openSlide2() {
    var selectSlide2 = document.querySelector('.slide2');
    var slides2 = selectSlide2.querySelectorAll('.modal2 .slide');

    var selectBtn2 = document.querySelector('.navigation2');
    var btns2 = selectBtn2.querySelectorAll('.slide2 .btn');

    let currentSlide2 = 1;

    // Javascript for image slider manual navigation
    var manualNav = function (manual) {
        slides2.forEach((slide) => {

            slide.classList.remove('active');

            btns2.forEach((btn) => {
                btn.classList.remove('active');
            });

        });

        slides2[manual].classList.add('active');
        btns2[manual].classList.add('active');
    }

    btns2.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide2 = i;
        });
    });
}