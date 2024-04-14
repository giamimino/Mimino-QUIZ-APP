var timer = document.querySelector('.timer');
var realtimer = 16;
var imtervalCounter = 1000;
var Interval = setInterval(StartTimer, imtervalCounter);

function StartTimer() {
    realtimer--;
    timer.textContent = realtimer;
    if(realtimer < 1) {
        EndGame();
        StopTimer();
    }
};

StartTimer();

function StopTimer() {
    clearInterval(Interval);
};

function EndGame() {
    swal.fire({
        title: "Oops time out",
        text: "You lose.",
        icon: "error",
        confirmButtonText: "try again"
    }).then((result) => {
        window.location.href = "./start.html";
    });
};

    var answer1 = document.querySelector('.answer-1');
    var answer2 = document.querySelector('.answer-2');
    var answer3 = document.querySelector('.answer-3');
    var answer4 = document.querySelector('.answer-4');
    var quiz1x10Title = document.querySelector('.quiz-1-10-title');
    var answer1quiz2 = document.querySelector('.answer-1-quiz2');
    var answer2quiz2 = document.querySelector('.answer-2-quiz2');
    var answer3quiz2 = document.querySelector('.answer-3-quiz2');
    var answer4quiz2 = document.querySelector('.answer-4-quiz2');
    var answer1quiz3 = document.querySelector('.answer-1-quiz3');
    var answer2quiz3 = document.querySelector('.answer-2-quiz3');
    var answer3quiz3 = document.querySelector('.answer-3-quiz3');
    var answer4quiz3 = document.querySelector('.answer-4-quiz3');
    var answer1quiz4 = document.querySelector('.answer-1-quiz4');
    var answer2quiz4 = document.querySelector('.answer-2-quiz4');
    var answer3quiz4 = document.querySelector('.answer-3-quiz4');
    var answer4quiz4 = document.querySelector('.answer-4-quiz4');
    var answer1quiz5 = document.querySelector('.answer-1-quiz5');
    var answer2quiz5 = document.querySelector('.answer-2-quiz5');
    var answer3quiz5 = document.querySelector('.answer-3-quiz5');
    var answer4quiz5 = document.querySelector('.answer-4-quiz5');
    var answer1quiz6 = document.querySelector('.answer-1-quiz6');
    var answer2quiz6 = document.querySelector('.answer-2-quiz6');
    var answer3quiz6 = document.querySelector('.answer-3-quiz6');
    var answer4quiz6 = document.querySelector('.answer-4-quiz6');
    var answer1quiz7 = document.querySelector('.answer-1-quiz7');
    var answer2quiz7 = document.querySelector('.answer-2-quiz7');
    var answer3quiz7 = document.querySelector('.answer-3-quiz7');
    var answer4quiz7 = document.querySelector('.answer-4-quiz7');
    var answer1quiz8 = document.querySelector('.answer-1-quiz8');
    var answer2quiz8 = document.querySelector('.answer-2-quiz8');
    var answer3quiz8 = document.querySelector('.answer-3-quiz8');
    var answer4quiz8 = document.querySelector('.answer-4-quiz8');
    var answer1quiz9 = document.querySelector('.answer-1-quiz9');
    var answer2quiz9 = document.querySelector('.answer-2-quiz9');
    var answer3quiz9 = document.querySelector('.answer-3-quiz9');
    var answer4quiz9 = document.querySelector('.answer-4-quiz9');
    var answer1quiz10 = document.querySelector('.answer-1-quiz10');
    var answer2quiz10 = document.querySelector('.answer-2-quiz10');
    var answer3quiz10 = document.querySelector('.answer-3-quiz10');
    var answer4quiz10 = document.querySelector('.answer-4-quiz10');
    var QUIZ1 = document.querySelector('.QUIZ-1');
    var QUIZ2 = document.querySelector('.QUIZ-2');
    var QUIZ3 = document.querySelector('.QUIZ-3');
    var QUIZ4 = document.querySelector('.QUIZ-4');
    var QUIZ5 = document.querySelector('.QUIZ-5');
    var QUIZ6 = document.querySelector('.QUIZ-6');
    var QUIZ7 = document.querySelector('.QUIZ-7');
    var QUIZ8 = document.querySelector('.QUIZ-8');
    var QUIZ9 = document.querySelector('.QUIZ-9');
    var QUIZ10 = document.querySelector('.QUIZ-10');
    var answersList = document.querySelector('.answers-list');
    var Result = document.querySelector('.result');
    var ResultWrapper = document.querySelector('.result-wrapper');


    answer1.addEventListener('click', function() {
        answer1.classList.add('active');
        localStorage.setItem('QUIZ1', 'true')
        quiz1x10Title.textContent = '2/10';
        QUIZ1.style.display = 'none';
        QUIZ2.style.display = 'block';
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        answer3.style.display = 'none';
        answer4.style.display = 'none';
        answer1quiz2.style.display = 'flex';
        answer2quiz2.style.display = 'flex';
        answer3quiz2.style.display = 'flex';
        answer4quiz2.style.display = 'flex';
        realtimer = 16;
    });

    answer2.addEventListener('click', function() {
        answer2.classList.add('detactive');
        localStorage.setItem('QUIZ1', 'false');
        quiz1x10Title.textContent = '2/10';
        QUIZ1.style.display = 'none';
        QUIZ2.style.display = 'block';
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        answer3.style.display = 'none';
        answer4.style.display = 'none';
        answer1quiz2.style.display = 'flex';
        answer2quiz2.style.display = 'flex';
        answer3quiz2.style.display = 'flex';
        answer4quiz2.style.display = 'flex';
        realtimer = 16;
    });

    answer3.addEventListener('click', function() {
        answer3.classList.add('detactive');
        localStorage.setItem('QUIZ1', 'false');
        quiz1x10Title.textContent = '2/10';
        QUIZ1.style.display = 'none';
        QUIZ2.style.display = 'block';
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        answer3.style.display = 'none';
        answer4.style.display = 'none';
        answer1quiz2.style.display = 'flex';
        answer2quiz2.style.display = 'flex';
        answer3quiz2.style.display = 'flex';
        answer4quiz2.style.display = 'flex';
        realtimer = 16;
    });

    answer4.addEventListener('click', function() {
        answer4.classList.add('detactive');
        localStorage.setItem('QUIZ1', 'false');
        quiz1x10Title.textContent = '2/10';
        QUIZ1.style.display = 'none';
        QUIZ2.style.display = 'block';
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        answer3.style.display = 'none';
        answer4.style.display = 'none';
        answer1quiz2.style.display = 'flex';
        answer2quiz2.style.display = 'flex';
        answer3quiz2.style.display = 'flex';
        answer4quiz2.style.display = 'flex';
        realtimer = 16;
    });

    answer1quiz2.addEventListener('click', function() {
        answer1quiz2.classList.add('detactive');
        localStorage.setItem('QUIZ2', 'false');
        quiz1x10Title.textContent = '3/10';
        QUIZ2.style.display = 'none';
        QUIZ3.style.display = 'block';
        answer1quiz2.style.display = 'none';
        answer2quiz2.style.display = 'none';
        answer3quiz2.style.display = 'none';
        answer4quiz2.style.display = 'none';
        answer1quiz3.style.display = 'flex';
        answer2quiz3.style.display = 'flex';
        answer3quiz3.style.display = 'flex';
        answer4quiz3.style.display = 'flex';
        realtimer = 16;
    });

    answer2quiz2.addEventListener('click', function() {
        answer2quiz2.classList.add('detactive');
        localStorage.setItem('QUIZ2', 'false');
        quiz1x10Title.textContent = '3/10';
        QUIZ2.style.display = 'none';
        QUIZ3.style.display = 'block';
        answer1quiz3.style.display = 'flex';
        answer2quiz3.style.display = 'flex';
        answer3quiz3.style.display = 'flex';
        answer4quiz3.style.display = 'flex';
        answer1quiz2.style.display = 'none';
        answer2quiz2.style.display = 'none';
        answer3quiz2.style.display = 'none';
        answer4quiz2.style.display = 'none';
        realtimer = 16;
    });

    answer3quiz2.addEventListener('click', function() {
        answer3quiz2.classList.add('active');
        localStorage.setItem('QUIZ2', 'true');
        quiz1x10Title.textContent = '3/10';
        QUIZ2.style.display = 'none';
        QUIZ3.style.display = 'block';
        answer1quiz3.style.display = 'flex';
        answer2quiz3.style.display = 'flex';
        answer3quiz3.style.display = 'flex';
        answer4quiz3.style.display = 'flex';
        answer1quiz2.style.display = 'none';
        answer2quiz2.style.display = 'none';
        answer3quiz2.style.display = 'none';
        answer4quiz2.style.display = 'none';
        realtimer = 16;
    });

    answer4quiz2.addEventListener('click', function() {
        answer4quiz2.classList.add('detactive');
        localStorage.setItem('QUIZ2', 'false');
        quiz1x10Title.textContent = '3/10';
        QUIZ2.style.display = 'none';
        QUIZ3.style.display = 'block';
        answer1quiz3.style.display = 'flex';
        answer2quiz3.style.display = 'flex';
        answer3quiz3.style.display = 'flex';
        answer4quiz3.style.display = 'flex';
        answer1quiz2.style.display = 'none';
        answer2quiz2.style.display = 'none';
        answer3quiz2.style.display = 'none';
        answer4quiz2.style.display = 'none';
        realtimer = 16;
    });

    answer1quiz3.addEventListener('click', function() {
        answer1quiz3.classList.add('detactive');
        localStorage.setItem('QUIZ3', 'false');
        quiz1x10Title.textContent = '4/10';
        QUIZ3.style.display = 'none';
        QUIZ4.style.display = 'block';
        answer1quiz3.style.display = 'none';
        answer2quiz3.style.display = 'none';
        answer3quiz3.style.display = 'none';
        answer4quiz3.style.display = 'none';
        answer1quiz4.style.display = 'flex';
        answer2quiz4.style.display = 'flex';
        answer3quiz4.style.display = 'flex';
        answer4quiz4.style.display = 'flex';
        realtimer = 16;
    });

    answer2quiz3.addEventListener('click', function() {
        answer2quiz3.classList.add('active');
        localStorage.setItem('QUIZ3', 'true');
        quiz1x10Title.textContent = '4/10';
        QUIZ3.style.display = 'none';
        QUIZ4.style.display = 'block';
        answer1quiz3.style.display = 'none';
        answer2quiz3.style.display = 'none';
        answer3quiz3.style.display = 'none';
        answer4quiz3.style.display = 'none';
        answer1quiz4.style.display = 'flex';
        answer2quiz4.style.display = 'flex';
        answer3quiz4.style.display = 'flex';
        answer4quiz4.style.display = 'flex';
        realtimer = 16;
    });

    answer3quiz3.addEventListener('click', function() {
        answer3quiz3.classList.add('detactive');
        localStorage.setItem('QUIZ3', 'false');
        quiz1x10Title.textContent = '4/10';
        QUIZ3.style.display = 'none';
        QUIZ4.style.display = 'block';
        answer1quiz3.style.display = 'none';
        answer2quiz3.style.display = 'none';
        answer3quiz3.style.display = 'none';
        answer4quiz3.style.display = 'none';
        answer1quiz4.style.display = 'flex';
        answer2quiz4.style.display = 'flex';
        answer3quiz4.style.display = 'flex';
        answer4quiz4.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz3.addEventListener('click', function() {
        answer4quiz3.classList.add('detactive');
        localStorage.setItem('QUIZ3', 'false');
        quiz1x10Title.textContent = '4/10';
        QUIZ3.style.display = 'none';
        QUIZ4.style.display = 'block';
        answer1quiz3.style.display = 'none';
        answer2quiz3.style.display = 'none';
        answer3quiz3.style.display = 'none';
        answer4quiz3.style.display = 'none';
        answer1quiz4.style.display = 'flex';
        answer2quiz4.style.display = 'flex';
        answer3quiz4.style.display = 'flex';
        answer4quiz4.style.display = 'flex';
        realtimer = 16;
    });

    answer1quiz4.addEventListener('click', function() {
        answer1quiz4.classList.add('detactive');
        localStorage.setItem('QUIZ4', 'false');
        quiz1x10Title.textContent = '5/10';
        QUIZ4.style.display = 'none';
        QUIZ5.style.display = 'block';
        answer1quiz4.style.display = 'none';
        answer2quiz4.style.display = 'none';
        answer3quiz4.style.display = 'none';
        answer4quiz4.style.display = 'none';
        answer1quiz5.style.display = 'flex';
        answer2quiz5.style.display = 'flex';
        answer3quiz5.style.display = 'flex';
        answer4quiz5.style.display = 'flex';
        realtimer = 16;
    });
    
    answer2quiz4.addEventListener('click', function() {
        answer2quiz4.classList.add('active');
        localStorage.setItem('QUIZ4', 'true');
        quiz1x10Title.textContent = '5/10';
        QUIZ4.style.display = 'none';
        QUIZ5.style.display = 'block';
        answer1quiz4.style.display = 'none';
        answer2quiz4.style.display = 'none';
        answer3quiz4.style.display = 'none';
        answer4quiz4.style.display = 'none';
        answer1quiz5.style.display = 'flex';
        answer2quiz5.style.display = 'flex';
        answer3quiz5.style.display = 'flex';
        answer4quiz5.style.display = 'flex';
        realtimer = 16;
    });
    
    answer3quiz4.addEventListener('click', function() {
        answer3quiz4.classList.add('detactive');
        localStorage.setItem('QUIZ4', 'false');
        quiz1x10Title.textContent = '5/10';
        QUIZ4.style.display = 'none';
        QUIZ5.style.display = 'block';
        answer1quiz4.style.display = 'none';
        answer2quiz4.style.display = 'none';
        answer3quiz4.style.display = 'none';
        answer4quiz4.style.display = 'none';
        answer1quiz5.style.display = 'flex';
        answer2quiz5.style.display = 'flex';
        answer3quiz5.style.display = 'flex';
        answer4quiz5.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz4.addEventListener('click', function() {
        answer4quiz4.classList.add('detactive');
        localStorage.setItem('QUIZ4', 'false');
        quiz1x10Title.textContent = '5/10';
        QUIZ4.style.display = 'none';
        QUIZ5.style.display = 'block';
        answer1quiz4.style.display = 'none';
        answer2quiz4.style.display = 'none';
        answer3quiz4.style.display = 'none';
        answer4quiz4.style.display = 'none';
        answer1quiz5.style.display = 'flex';
        answer2quiz5.style.display = 'flex';
        answer3quiz5.style.display = 'flex';
        answer4quiz5.style.display = 'flex';
        realtimer = 16;
    });
    
    answer1quiz5.addEventListener('click', function() {
        answer1quiz5.classList.add('detactive');
        localStorage.setItem('QUIZ5', 'false');
        quiz1x10Title.textContent = '6/10';
        QUIZ5.style.display = 'none';
        QUIZ6.style.display = 'block';
        answer1quiz5.style.display = 'none';
        answer2quiz5.style.display = 'none';
        answer3quiz5.style.display = 'none';
        answer4quiz5.style.display = 'none';
        answer1quiz6.style.display = 'flex';
        answer2quiz6.style.display = 'flex';
        answer3quiz6.style.display = 'flex';
        answer4quiz6.style.display = 'flex';
        realtimer = 16;
    });

    answer2quiz5.addEventListener('click', function() {
        answer2quiz5.classList.add('detactive');
        localStorage.setItem('QUIZ5', 'false');
        quiz1x10Title.textContent = '6/10';
        QUIZ5.style.display = 'none';
        QUIZ6.style.display = 'block';
        answer1quiz5.style.display = 'none';
        answer2quiz5.style.display = 'none';
        answer3quiz5.style.display = 'none';
        answer4quiz5.style.display = 'none';
        answer1quiz6.style.display = 'flex';
        answer2quiz6.style.display = 'flex';
        answer3quiz6.style.display = 'flex';
        answer4quiz6.style.display = 'flex';
        realtimer = 16;
    });

    answer3quiz5.addEventListener('click', function() {
        answer3quiz5.classList.add('detactive');
        localStorage.setItem('QUIZ5', 'false');
        quiz1x10Title.textContent = '6/10';
        QUIZ5.style.display = 'none';
        QUIZ6.style.display = 'block';
        answer1quiz5.style.display = 'none';
        answer2quiz5.style.display = 'none';
        answer3quiz5.style.display = 'none';
        answer4quiz5.style.display = 'none';
        answer1quiz6.style.display = 'flex';
        answer2quiz6.style.display = 'flex';
        answer3quiz6.style.display = 'flex';
        answer4quiz6.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz5.addEventListener('click', function() {
        answer4quiz5.classList.add('active');
        localStorage.setItem('QUIZ5', 'true');
        quiz1x10Title.textContent = '6/10';
        QUIZ5.style.display = 'none';
        QUIZ6.style.display = 'block';
        answer1quiz5.style.display = 'none';
        answer2quiz5.style.display = 'none';
        answer3quiz5.style.display = 'none';
        answer4quiz5.style.display = 'none';
        answer1quiz6.style.display = 'flex';
        answer2quiz6.style.display = 'flex';
        answer3quiz6.style.display = 'flex';
        answer4quiz6.style.display = 'flex';
        realtimer = 16;
    });

    answer1quiz6.addEventListener('click', function() {
        answer1quiz6.classList.add('detactive');
        localStorage.setItem('QUIZ6', 'false');
        quiz1x10Title.textContent = '7/10';
        QUIZ6.style.display = 'none';
        QUIZ7.style.display = 'block';
        answer1quiz6.style.display = 'none';
        answer2quiz6.style.display = 'none';
        answer3quiz6.style.display = 'none';
        answer4quiz6.style.display = 'none';
        answer1quiz7.style.display = 'flex';
        answer2quiz7.style.display = 'flex';
        answer3quiz7.style.display = 'flex';
        answer4quiz7.style.display = 'flex';
        realtimer = 16;
    });

    answer2quiz6.addEventListener('click', function() {
        answer2quiz6.classList.add('detactive');
        localStorage.setItem('QUIZ6', 'false');
        quiz1x10Title.textContent = '7/10';
        QUIZ6.style.display = 'none';
        QUIZ7.style.display = 'block';
        answer1quiz6.style.display = 'none';
        answer2quiz6.style.display = 'none';
        answer3quiz6.style.display = 'none';
        answer4quiz6.style.display = 'none';
        answer1quiz7.style.display = 'flex';
        answer2quiz7.style.display = 'flex';
        answer3quiz7.style.display = 'flex';
        answer4quiz7.style.display = 'flex';
        realtimer = 16;
    });

    answer3quiz6.addEventListener('click', function() {
        answer3quiz6.classList.add('active');
        localStorage.setItem('QUIZ6', 'true');
        quiz1x10Title.textContent = '7/10';
        QUIZ6.style.display = 'none';
        QUIZ7.style.display = 'block';
        answer1quiz6.style.display = 'none';
        answer2quiz6.style.display = 'none';
        answer3quiz6.style.display = 'none';
        answer4quiz6.style.display = 'none';
        answer1quiz7.style.display = 'flex';
        answer2quiz7.style.display = 'flex';
        answer3quiz7.style.display = 'flex';
        answer4quiz7.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz6.addEventListener('click', function() {
        answer4quiz6.classList.add('detactive');
        localStorage.setItem('QUIZ6', 'false');
        quiz1x10Title.textContent = '7/10';
        QUIZ6.style.display = 'none';
        QUIZ7.style.display = 'block';
        answer1quiz6.style.display = 'none';
        answer2quiz6.style.display = 'none';
        answer3quiz6.style.display = 'none';
        answer4quiz6.style.display = 'none';
        answer1quiz7.style.display = 'flex';
        answer2quiz7.style.display = 'flex';
        answer3quiz7.style.display = 'flex';
        answer4quiz7.style.display = 'flex';
        realtimer = 16;
    });

    answer1quiz7.addEventListener('click', function() {
        answer1quiz7.classList.add('detactive');
        localStorage.setItem('QUIZ37', 'false');
        quiz1x10Title.textContent = '8/10';
        QUIZ7.style.display = 'none';
        QUIZ8.style.display = 'block';
        answer1quiz7.style.display = 'none';
        answer2quiz7.style.display = 'none';
        answer3quiz7.style.display = 'none';
        answer4quiz7.style.display = 'none';
        answer1quiz8.style.display = 'flex';
        answer2quiz8.style.display = 'flex';
        answer3quiz8.style.display = 'flex';
        answer4quiz8.style.display = 'flex';
        realtimer = 16;
    });

    answer2quiz7.addEventListener('click', function() {
        answer2quiz7.classList.add('active');
        localStorage.setItem('QUIZ7', 'true');
        quiz1x10Title.textContent = '8/10';
        QUIZ7.style.display = 'none';
        QUIZ8.style.display = 'block';
        answer1quiz7.style.display = 'none';
        answer2quiz7.style.display = 'none';
        answer3quiz7.style.display = 'none';
        answer4quiz7.style.display = 'none';
        answer1quiz8.style.display = 'flex';
        answer2quiz8.style.display = 'flex';
        answer3quiz8.style.display = 'flex';
        answer4quiz8.style.display = 'flex';
        realtimer = 16;
    });

    answer3quiz7.addEventListener('click', function() {
        answer3quiz7.classList.add('detactive');
        localStorage.setItem('QUIZ7', 'false');
        quiz1x10Title.textContent = '8/10';
        QUIZ7.style.display = 'none';
        QUIZ8.style.display = 'block';
        answer1quiz7.style.display = 'none';
        answer2quiz7.style.display = 'none';
        answer3quiz7.style.display = 'none';
        answer4quiz7.style.display = 'none';
        answer1quiz8.style.display = 'flex';
        answer2quiz8.style.display = 'flex';
        answer3quiz8.style.display = 'flex';
        answer4quiz8.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz7.addEventListener('click', function() {
        answer4quiz7.classList.add('detactive');
        localStorage.setItem('QUIZ7', 'false');
        quiz1x10Title.textContent = '8/10';
        QUIZ7.style.display = 'none';
        QUIZ8.style.display = 'block';
        answer1quiz7.style.display = 'none';
        answer2quiz7.style.display = 'none';
        answer3quiz7.style.display = 'none';
        answer4quiz7.style.display = 'none';
        answer1quiz8.style.display = 'flex';
        answer2quiz8.style.display = 'flex';
        answer3quiz8.style.display = 'flex';
        answer4quiz8.style.display = 'flex';
        realtimer = 16;
    });

    answer1quiz8.addEventListener('click', function() {
        answer1quiz8.classList.add('active');
        localStorage.setItem('QUIZ8', 'true');
        quiz1x10Title.textContent = '9/10';
        QUIZ8.style.display = 'none';
        QUIZ9.style.display = 'block';
        answer1quiz8.style.display = 'none';
        answer2quiz8.style.display = 'none';
        answer3quiz8.style.display = 'none';
        answer4quiz8.style.display = 'none';
        answer1quiz9.style.display = 'flex';
        answer2quiz9.style.display = 'flex';
        answer3quiz9.style.display = 'flex';
        answer4quiz9.style.display = 'flex';
        realtimer = 16;
    });
    
    answer2quiz8.addEventListener('click', function() {
        answer2quiz8.classList.add('detactive');
        localStorage.setItem('QUIZ8', 'false');
        quiz1x10Title.textContent = '9/10';
        QUIZ8.style.display = 'none';
        QUIZ9.style.display = 'block';
        answer1quiz8.style.display = 'none';
        answer2quiz8.style.display = 'none';
        answer3quiz8.style.display = 'none';
        answer4quiz8.style.display = 'none';
        answer1quiz9.style.display = 'flex';
        answer2quiz9.style.display = 'flex';
        answer3quiz9.style.display = 'flex';
        answer4quiz9.style.display = 'flex';
        realtimer = 16;
    });
    
    answer3quiz8.addEventListener('click', function() {
        answer3quiz8.classList.add('detactive');
        localStorage.setItem('QUIZ8', 'false');
        quiz1x10Title.textContent = '9/10';
        QUIZ8.style.display = 'none';
        QUIZ9.style.display = 'block';
        answer1quiz8.style.display = 'none';
        answer2quiz8.style.display = 'none';
        answer3quiz8.style.display = 'none';
        answer4quiz8.style.display = 'none';
        answer1quiz9.style.display = 'flex';
        answer2quiz9.style.display = 'flex';
        answer3quiz9.style.display = 'flex';
        answer4quiz9.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz8.addEventListener('click', function() {
        answer4quiz8.classList.add('detactive');
        localStorage.setItem('QUIZ8', 'false');
        quiz1x10Title.textContent = '9/10';
        QUIZ8.style.display = 'none';
        QUIZ9.style.display = 'block';
        answer1quiz8.style.display = 'none';
        answer2quiz8.style.display = 'none';
        answer3quiz8.style.display = 'none';
        answer4quiz8.style.display = 'none';
        answer1quiz9.style.display = 'flex';
        answer2quiz9.style.display = 'flex';
        answer3quiz9.style.display = 'flex';
        answer4quiz9.style.display = 'flex';
        realtimer = 16;
    });

    answer1quiz9.addEventListener('click', function() {
        answer1quiz9.classList.add('detactive');
        localStorage.setItem('QUIZ9', 'false');
        quiz1x10Title.textContent = '10/10';
        QUIZ9.style.display = 'none';
        QUIZ10.style.display = 'block';
        answer1quiz9.style.display = 'none';
        answer2quiz9.style.display = 'none';
        answer3quiz9.style.display = 'none';
        answer4quiz9.style.display = 'none';
        answer1quiz10.style.display = 'flex';
        answer2quiz10.style.display = 'flex';
        answer3quiz10.style.display = 'flex';
        answer4quiz10.style.display = 'flex';
        realtimer = 16;
    });

    answer2quiz9.addEventListener('click', function() {
        answer2quiz9.classList.add('detactive');
        localStorage.setItem('QUIZ9', 'false');
        quiz1x10Title.textContent = '10/10';
        QUIZ9.style.display = 'none';
        QUIZ10.style.display = 'block';
        answer1quiz9.style.display = 'none';
        answer2quiz9.style.display = 'none';
        answer3quiz9.style.display = 'none';
        answer4quiz9.style.display = 'none';
        answer1quiz10.style.display = 'flex';
        answer2quiz10.style.display = 'flex';
        answer3quiz10.style.display = 'flex';
        answer4quiz10.style.display = 'flex';
        realtimer = 16;
    });

    answer3quiz9.addEventListener('click', function() {
        answer3quiz9.classList.add('detactive');
        localStorage.setItem('QUIZ9', 'false');
        quiz1x10Title.textContent = '10/10';
        QUIZ9.style.display = 'none';
        QUIZ10.style.display = 'block';
        answer1quiz9.style.display = 'none';
        answer2quiz9.style.display = 'none';
        answer3quiz9.style.display = 'none';
        answer4quiz9.style.display = 'none';
        answer1quiz10.style.display = 'flex';
        answer2quiz10.style.display = 'flex';
        answer3quiz10.style.display = 'flex';
        answer4quiz10.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz9.addEventListener('click', function() {
        answer4quiz9.classList.add('active');
        localStorage.setItem('QUIZ9', 'true');
        quiz1x10Title.textContent = '10/10';
        QUIZ9.style.display = 'none';
        QUIZ10.style.display = 'block';
        answer1quiz9.style.display = 'none';
        answer2quiz9.style.display = 'none';
        answer3quiz9.style.display = 'none';
        answer4quiz9.style.display = 'none';
        answer1quiz10.style.display = 'flex';
        answer2quiz10.style.display = 'flex';
        answer3quiz10.style.display = 'flex';
        answer4quiz10.style.display = 'flex';
        realtimer = 16;
    });

    answer1quiz10.addEventListener('click', function() {
        answer1quiz10.classList.add('detactive');
        localStorage.setItem('QUIZ10', 'false');
        clearInterval(Interval); 
        quiz1x10Title.textContent = '10/10';
        QUIZ10.style.display = 'none';
        answer1quiz10.style.display = 'none';
        answer2quiz10.style.display = 'none';
        answer3quiz10.style.display = 'none';
        answer4quiz10.style.display = 'none';
        answersList.style.display = 'none';
        timer.style.display = 'none';
        Result.style.display = 'flex';
        ResultWrapper.style.display = 'flex';
        realtimer = 16;
    });

    answer2quiz10.addEventListener('click', function() {
        answer2quiz10.classList.add('detactive');
        localStorage.setItem('QUIZ10', 'false');
        clearInterval(Interval); 
        quiz1x10Title.textContent = '10/10';
        QUIZ10.style.display = 'none';
        answer1quiz10.style.display = 'none';
        answer2quiz10.style.display = 'none';
        answer3quiz10.style.display = 'none';
        answer4quiz10.style.display = 'none';
        answersList.style.display = 'none';
        timer.style.display = 'none';
        Result.style.display = 'flex';
        ResultWrapper.style.display = 'flex';
        
        realtimer = 16;
    });

    answer3quiz10.addEventListener('click', function() {
        answer3quiz10.classList.add('active');
        localStorage.setItem('QUIZ10', 'true');
        clearInterval(Interval); 
        quiz1x10Title.textContent = '10/10';
        QUIZ10.style.display = 'none';
        answer1quiz10.style.display = 'none';
        answer2quiz10.style.display = 'none';
        answer3quiz10.style.display = 'none';
        answer4quiz10.style.display = 'none';
        answersList.style.display = 'none';
        timer.style.display = 'none';
        Result.style.display = 'flex';
        ResultWrapper.style.display = 'flex';
        realtimer = 16;
    });

    answer4quiz10.addEventListener('click', function() {
        answer4quiz10.classList.add('detactive');
        localStorage.setItem('QUIZ10', 'false');
        clearInterval(Interval); 
        quiz1x10Title.textContent = '10/10';
        QUIZ10.style.display = 'none';
        answer1quiz10.style.display = 'none';
        answer2quiz10.style.display = 'none';
        answer3quiz10.style.display = 'none';
        answer4quiz10.style.display = 'none';
        answersList.style.display = 'none';
        timer.style.display = 'none';
        Result.style.display = 'flex';
        ResultWrapper.style.display = 'flex';
        realtimer = 16;
    });

    var ResultText = document.querySelector('.result-text');

    Result.addEventListener('click', function() {
        
        var Quiz1 = localStorage.getItem('QUIZ1');
        var Quiz2 = localStorage.getItem('QUIZ2');
        var Quiz3 = localStorage.getItem('QUIZ3');
        var Quiz4 = localStorage.getItem('QUIZ4');
        var Quiz5 = localStorage.getItem('QUIZ5');
        var Quiz6 = localStorage.getItem('QUIZ6');
        var Quiz7 = localStorage.getItem('QUIZ7');
        var Quiz8 = localStorage.getItem('QUIZ8');
        var Quiz9 = localStorage.getItem('QUIZ9');
        var Quiz10 = localStorage.getItem('QUIZ10');
        
        const keys = [Quiz1, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8, Quiz9, Quiz10];
        const results = keys.map(key => key === 'true');
        const correctCount = results.filter(result => result).length;
        const incorrectCount = results.length - correctCount;
        
        ResultText.style.display = 'block';
        ResultText.textContent = `${correctCount} correct, ${incorrectCount} incorrect`;

        localStorage.removeItem('QUIZ1');
        localStorage.removeItem('QUIZ2');
        localStorage.removeItem('QUIZ3');
        localStorage.removeItem('QUIZ4');
        localStorage.removeItem('QUIZ5');
        localStorage.removeItem('QUIZ6');
        localStorage.removeItem('QUIZ7');
        localStorage.removeItem('QUIZ8');
        localStorage.removeItem('QUIZ9');
        localStorage.removeItem('QUIZ10');

        if (correctCount >= 7) {
            var winAudio = document.getElementById('win-audio');
            winAudio.play()
        }
    });

    function answerPick() {
        var answerPick = document.getElementById('answer-pick');
        answerPick.play();
    }

