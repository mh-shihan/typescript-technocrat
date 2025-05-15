{
  // Type Guared Using Instance Of Operator in OOP
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("This Animal has a sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("The Dog make bark");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("The Cat make Mew");
    }
  }

  const getAnimal1 = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  // More Smart Way

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal2 = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog", "Smart Dog");
  const cat = new Cat("Cat", "Smart Cat");
  getAnimal2(dog);
  getAnimal2(cat);

  //
}
