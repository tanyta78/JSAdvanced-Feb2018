function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let hoursInfo = $('#hours');
    let minutesInfo = $('#minutes');
    let secondsInfo = $('#seconds');

    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);

    let timerOn = null;
    let seconds = 0;
    let isOn = false;

    function outputTime(value) {
        hoursInfo.text(('0' + Math.floor(value / 3600)).slice(-2));
        minutesInfo.text(('0' + Math.floor((value % 3600) / 60)).slice(-2));
        secondsInfo.text(('0' + (value % 3600) % 60).slice(-2));
    }

    function step() {
        seconds++;
        outputTime(seconds);
    }

    function startTimer(event) {
        // seconds = 0;
        outputTime(seconds);
        if (!isOn) {
            timerOn = setInterval(step, 1000);
            isOn = true;
        }

        // stopBtn.attr('disabled', false);
        //startBtn.attr('disabled',true);

    }

    function stopTimer() {
        clearInterval(timerOn);
        isOn = false;
        // stopBtn.attr('disabled', true);
        // startBtn.attr('disabled',false);


    }

}