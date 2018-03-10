class TimeSpan {
    constructor(hoursValue, minutesValue, secondsValue) {
        if (!(Number.isInteger(hoursValue))) {
            throw RangeError(`Invalid hours: ${hoursValue}`);
        }
        if (!(Number.isInteger(minutesValue))) {
            throw RangeError(`Invalid minutes: ${minutesValue}`);
        }
        if (!Number.isInteger(secondsValue)) {
            throw RangeError(`Invalid seconds: ${secondsValue}`);
        }
        this.seconds = secondsValue + minutesValue * 60 + hoursValue * 3600;
    }
    toString() {
        let hours = Math.floor(this.seconds / 3600);
        let minutes = Math.floor((this.seconds - hours * 3600) / 60);
        let rest = this.seconds - hours * 3600 - minutes * 60;
        minutes=('0'+minutes).slice(-2);
        return `${hours}:${minutes}:${rest < 10 ? '0' : ''}${rest}`;
    }
}

console.log('' + new TimeSpan(7, 8, 5));//7:08:05
console.log('' + new TimeSpan(12, 76, -5));//13:15:55
console.log('' + new TimeSpan('', 2.5, {}));//RangeError: Invalid hours: 
console.log('' + new TimeSpan(3, 2.5, {}));//RangeError: Invalid minutes: 2.5
console.log('' + new TimeSpan(3, 2, {}));//RangeError: Invalid seconds: [object Object]