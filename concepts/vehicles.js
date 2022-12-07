class Vehicle {
    passengerCapacity = 1;
    get travelsOn() { return 'road'; }

    constructor(passengerCapacity) {
        this.passengerCapacity = passengerCapacity;
    }
}

class Car extends Vehicle {
    get hasWheels() { return true; }
    wheelCount = 2;  
  
    constructor(passengerCapacity, wheelCount) {
        super(passengerCapacity);
        this.wheelCount = wheelCount;
    }

    driveOverPotholes = () => {
        console.log('The car drove over the pothold. Goodbye tire!');
        this.wheelCount--;
    }
}

class JetSki extends Vehicle {
    get hasWheels() { return false; }
    get travelsOn() { return 'water'; }
  
    constructor(passengerCapacity) {
        super(passengerCapacity);
    }
}

const myCar = new Car(7, 4);
const myJetSki = new JetSki(4);
// navigate to vehicles.html and then in a JavaScript console you can play with these objects: myCar and myJetSki.