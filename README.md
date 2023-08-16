# typescript-classes

### Classes

As we all know, classes are used as blueprints to create various objects or code. Like we've done before, we can tell our class what type of information to expect. Additionally we can do this with our constructors.

```typescript
class Vehicle {
  speed: number
  brand: string

  constructor(speed: number, brand: string) {
    this.speed = speed
    this.brand = brand
  }
}
```

We can also use Typescript for functions in our Classes - here is an example of one that is used inside of our vehicle that dictates how we'd change the brand of our vehicle after we create it:

```typescript
  setBrand(newBrand: string): void{
    this.brand = newBrand[0].toUpperCase() + newBrand.slice(1, newBrand.length).toLowerCase()
  }
```

First, the function is created, and we say that the parameter that is accepted is a newBrand, and it should be a string. Void is used so that it doesn't return anything.

The code inside is not necessary but just takes our parameter string, uppercases the first letter, and then concatonates that with the remaining characters in the string.

### Private, Public, Static Accessors

#### Private

In the example below, the private keyword is used to inidicate that a variable in the class is only accessible from within the class itself.

I suppose this would prevent other functions, or other code from accessing those private variables to as to not break the code elsewhere in the program.

```typescript
class Vehicle {
  speed : number
  private brand : string
  ...
}
```

#### Public

By default, everything is public. It does the opposite of private and makes variables accessible from outside of the class.

Private and Public can be used on functions as well, see below.

```typescript
class Vehicle {
  speed: number
  private brand: string

  constructor(speed: number, brand: string) {
    this.speed = speed
    this.brand = brand
  }

  setBrand(newBrand: string): void {
    this.brand =
      newBrand[0].toUpperCase() +
      newBrand.slice(1, newBrand.length).toLowerCase()
  }

  public getBrand(): string {
    return this.brand
  }
}
```

In this example, even though accessing the brand itself is private, means of accessing the information of the brand are made public.

A user >> accesses the public getBrand() function >> which accesses the private brand information from within the vehicle class.

#### Static

Static allows us to make a variable or function accessible without even needing to create an instance of the class. Say we're creating an API, we have an API class. Normally, we'd need to instantiate an instance of the class, and then acccess the fetchAll() function within the class, like so:

```typescript
class VehicleAPI {
  fetchAll() {
    console.log('async request ...')
  }
}

const vehicleAPI = new VehicleAPI()
vehicleAPI.fetchAll()
```

Where as with Static, we can make fetchAll() accessible instantly, like so:

```typescript
class VehicleAPI {
  static fetchAll() {
    console.log('async request ...')
  }
}

VehicleAPI.fetchAll()
```
