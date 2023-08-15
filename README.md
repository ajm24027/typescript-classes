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
