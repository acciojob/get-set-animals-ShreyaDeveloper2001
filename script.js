//complete this code
class Animal {
    constructor(species) {
    this.species = species;
	}
		 makeSound() {
         console.log("Animal sound");
  }
}

class Dog extends Animal {
	constructor(species, breed) {
    super(species);
    this.breed = breed;
  }

  bark() {
    console.log("Woof");
  }
}

class Cat extends Animal {
	constructor(species, color) {
    super(species);
    this.color = color;
  }

  purr() {
    console.log("Purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
