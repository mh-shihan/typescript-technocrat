"use strict";
{
    // OOP --> Class
    class Animal {
        // name: string;            //property
        // species: string;
        // sound: string;
        // Parameter properties
        // We can remove duplicate type declaration using parameter properties which is "public"
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            //   this.name = name;
            //   this.species = species;
            //   this.sound = sound;
        }
        // We have to use normal function inside a class and "this" does not works on arrow function
        // a function is called method inside a class
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("Germern Shepard", "Animalia", "Ghew Ghew");
    const cat = new Animal("Ola biral", "animal", "Mew mew");
    dog.makeSound();
    //
}
