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

document.addEventListener('DOMContentLoaded', () => {
    console.log('secret messege');
});