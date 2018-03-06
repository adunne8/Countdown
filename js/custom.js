// TIMER START BUTTON
const triggers = document.querySelectorAll('.countdown_trigger');
const stoppers = document.querySelectorAll('.countdown_stop');
const showAnswers = document.querySelectorAll('.show_answer');
// TIMER OUTPUT
const timerElement = document.querySelector('#countdowntime');
const conundrumOut = document.querySelector("#conundrum");
const answerOut = document.querySelector("#answer");
// TIMER OUTSIDE ANY SCOPE FOR TARGETING
var downloadTimer;

const tick = document.querySelector("#tick");

// START FUNCTION
function triggerTimer() {
    tick.play();

    answerOut.style.visibility = "hidden";
    // STOP REPEATED CALLS
    this.disabled = true;
    timer = 30;
    downloadTimer = setInterval(function () {
        // SET TIMER VALUE TO THE HTML ELEMENT
        timerElement.innerHTML = timer;
        // STOP RUNNING THE FUNCTION WHEN TIME RUNS OUT
        if (timer <= 0) {
            stopTimer();
        }
        timer--;
    }, 1000);

};

function getWord() {
    conundrumOut.innerHTML = "PETERDAD";
}

function showAns() {
    answerOut.style.visibility = "visible";
}

function stopTimer() {
    clearInterval(downloadTimer);
    console.log("stop");
    triggers.forEach(trigger => trigger.disabled = false);

    // RESET COUNTDOWN SOUND
    tick.pause();
    tick.currentTime = 0;
}


// TRIGGER FOR THE FUNCTION
triggers.forEach(trigger => trigger.addEventListener('click', triggerTimer));
triggers.forEach(trigger => trigger.addEventListener('click', getWord));

showAnswers.forEach(showAnswer => showAnswer.addEventListener('click', showAns));


// TRIGGER FOR STOPPING
stoppers.forEach(stopper => stopper.addEventListener('click', stopTimer));