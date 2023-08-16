"use strict";
class Vehicle {
    constructor(speed, brand) {
        this.speed = speed;
        this.brand = brand;
    }
    setBrand(newBrand) {
        this.brand = newBrand[0].toUpperCase() + newBrand.slice(1, newBrand.length).toLowerCase();
    }
    getBrand() {
        return this.brand;
    }
}
const honda = new Vehicle(200, "Honda");
console.log(honda);
honda.setBrand("tesla");
console.log(Vehicle.color);
class VehicleAPI {
    static fetchAll() {
        console.log("async request ...");
    }
}
VehicleAPI.fetchAll();
