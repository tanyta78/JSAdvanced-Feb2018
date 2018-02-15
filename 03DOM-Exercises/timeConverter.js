function attachEventsListeners() {
    // TODO: attach click events to all buttons

    document.getElementById('daysBtn').addEventListener('click',function(){ convert(document.getElementById('days').value, 'days');});

    document.getElementById('hoursBtn').addEventListener('click',function(){ convert(document.getElementById('hours').value, 'hours');});

    document.getElementById('minutesBtn').addEventListener('click',function(){ convert(document.getElementById('minutes').value, 'minutes');});

    document.getElementById('secondsBtn').addEventListener('click', function(){convert(document.getElementById('seconds').value, 'seconds');});

    function convert(value, type) {
        value = Number(value);
        let seconds = 0;
        switch (type) {
            case 'seconds':
                seconds = value;
                break;
            case 'minutes':
                seconds = value*60;
                break;
            case 'hours':
                seconds = value*60*60;
                break;
            case 'days':
                seconds = value*60*60*24;
                break;
           
        }
        document.getElementById('days').value=seconds/86400;
        document.getElementById('hours').value=seconds/3600;
        document.getElementById('minutes').value=seconds/60;
        document.getElementById('seconds').value=seconds;
    }
}
