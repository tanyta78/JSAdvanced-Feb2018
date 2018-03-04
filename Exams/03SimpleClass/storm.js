class Record {
  constructor(temperature, humidity, pressure, windSpeed) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.windSpeed = windSpeed;
    this.id = Record.getId();
  }

  toString() {
    let isStormy = 'Not stormy';
    if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) isStormy = 'Stormy';

    return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${isStormy}`;
  }

  static getId() {
    if (Record.nextId === undefined)
      Record.nextId = 0;
    return Record.nextId++;
  }
}

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());

  //module.exports = {StringBuilder};




