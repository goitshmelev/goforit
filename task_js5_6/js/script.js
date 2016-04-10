var init=0;
var startDate;
var clockTimer;
var countMarkers = 1;
var pauseTimer = false;
var pauseStart = 0;
var pauseEnd;
var pauseLength;

function revertButtons(butStart, butStop) {
    var stopButton = document.getElementById('stop');
    stopButton.style.display = butStop;
    var startButton = document.getElementById('start');
    startButton.style.display = butStart;
}

function timerClear() {
    init = 0;
    countMarkers = 1;
    pauseTimer = false;
    revertButtons("block", "none");
    clearTimeout(clockTimer);
    document.clockform.clock.value='00:00:00.00';
    document.getElementById('marker').innerHTML = '';
}

function initTimer() {
    var thisDate = new Date();
    var t = thisDate.getTime() - startDate;
    var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
    t = Math.floor (t/1000);
    var s = t%60; t-=s;
    t = Math.floor (t/60);
    var m = t%60; t-=m;
    t = Math.floor (t/60);
    var h = t%60;
    if (h<10) h='0'+h;
    if (m<10) m='0'+m;
    if (s<10) s='0'+s;
    if (ms<10) ms='0'+ms;
    if (init==1) document.clockform.clock.value = h + ':' + m + ':' + s + '.' + ms;
    clockTimer = setTimeout("initTimer()",10);
}

function splitTimer() {
    document.getElementById('marker').innerHTML =  document.getElementById('marker').innerHTML + '<br>' + countMarkers + ' Split: ' + document.clockform.clock.value;
    countMarkers++;
}

function stopTimer() {
    revertButtons("block", "none");
    document.getElementById('marker').innerHTML = document.getElementById('marker').innerHTML + '<br>' + countMarkers + ' Stop: ' + document.clockform.clock.value;
    countMarkers++;
    pauseStart = new Date().getTime();
    pauseTimer = true;
    init=0;
}

function startTimer() {
    revertButtons("none", "block");

    if (init == 0) {
        if (!pauseTimer) {
            startDate = new Date();
            startDate = startDate.getTime();
        } else {
            pauseEnd = new Date().getTime();
            pauseLength = pauseEnd - pauseStart;
            startDate = startDate + pauseLength;
        }
    }

    init=1;
    initTimer();
}

var startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);

var startButton = document.getElementById('stop');
startButton.addEventListener('click', stopTimer);

var startButton = document.getElementById('split');
startButton.addEventListener('click', splitTimer);

var startButton = document.getElementById('reset');
startButton.addEventListener('click', timerClear);