function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("Cannot make an instance of abstract class Computer");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }

    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError("Not a valid battery");
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer{
        constructor (manufacturer, processorSpeed, ram, hardDiskSpace,keyboard,monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard=keyboard;
            this.monitor=monitor;
        }

        get keyboard () {
            return this._keyboard;
        }
        set keyboard (value) {
            if(!(value instanceof Keyboard)){
                throw new TypeError('Not a valid keyboard');
            }
            this._keyboard=value;
        }

        get monitor () {
            return this._monitor;
        }
        set monitor (value) {
            if(!(value instanceof Monitor)){
                throw new TypeError('Not a valid monitor');
            }
            this._monitor=value;
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);

let l=new Desktop("JAR Computers",3.3,8,1,1,monitor);
l=new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor");
