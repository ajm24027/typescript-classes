"use strict";
class Vehicle {
    constructor(speed, brand) {
        this.speed = speed;
        this.brand = brand;
    }
    setBrand(newBrand) {
        this.brand = newBrand[0].toUpperCase() + newBrand.slice(1, newBrand.length).toLowerCase();
    }
}
const honda = new Vehicle(200, "Honda");
console.log(honda);
honda.setBrand("tesla");
console.log(honda.brand);
