class Vehicle {
  speed : number
  brand : string

  constructor(speed: number, brand: string){
    this.speed = speed
    this.brand = brand
  }

  setBrand(newBrand: string): void{
    this.brand = newBrand[0].toUpperCase() + newBrand.slice(1, newBrand.length).toLowerCase()
  }
}

const honda = new Vehicle(200, "Honda")

console.log(honda)

honda.setBrand("tesla")

console.log(honda.brand)