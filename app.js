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
    var QUIZ1 = document.querySelector('.QUIZ-1');
    var QUIZ2 = document.querySelector('.QUIZ-2');
    var QUIZ3 = document.querySelector('.QUIZ-3');
    var QUIZ4 = document.querySelector('.QUIZ-4');


    answer1.addEventListener('click', function() {
        answer1.classList.add('active');
        localStorage.setItem('QUIZ1correct', 'true')
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
        localStorage.setItem('QUIZ1incorrect', 'false');
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
        localStorage.setItem('QUIZ1incorrect', 'false');
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
        localStorage.setItem('QUIZ1incorrect', 'false');
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
        localStorage.setItem('QUIZ2incorrect', 'false');
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
        localStorage.setItem('QUIZ2incorrect', 'false');
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
        localStorage.setItem('QUIZ2correct', 'true');
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
        localStorage.setItem('QUIZ2incorrect', 'false');
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
        localStorage.setItem('QUIZ3incorrect', 'false');
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
        localStorage.setItem('QUIZ3correct', 'true');
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
        localStorage.setItem('QUIZ3incorrect', 'false');
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
        localStorage.setItem('QUIZ3incorrect', 'false');
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