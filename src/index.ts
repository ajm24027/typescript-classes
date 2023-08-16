class Vehicle {
  speed : number
  private brand : string
  static color : string

  constructor(speed: number, brand: string){
    this.speed = speed
    this.brand = brand
  }

  setBrand(newBrand: string): void{
    this.brand = newBrand[0].toUpperCase() + newBrand.slice(1, newBrand.length).toLowerCase()
  }

  public getBrand(): string {
    return this.brand
  }
}

const honda = new Vehicle(200, "Honda")

console.log(honda)

honda.setBrand("tesla")

console.log(Vehicle.color)

class VehicleAPI {
  static fetchAll() {
    console.log("async request ...")
  }
}

VehicleAPI.fetchAll()
