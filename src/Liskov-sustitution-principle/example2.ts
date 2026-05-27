

interface AnimalInterface {
    move(): void
}

interface DogInterface extends AnimalInterface {
    bark(): void
}

interface JumpingAnimal {
    jump(): void
}

class Animal implements AnimalInterface {
    constructor(){}
    move(): void {
        console.log("moving...")
    }
}




class Dog implements DogInterface {
    bark(): void {
        console.log("Dog is barking")
    }
    move(): void {
        console.log("Dog is moving")
    }
}

class Rabbit implements JumpingAnimal, Animal {

    jump(): void {
        console.log("Rabbit is jumping")
    }
    move(): void {
        console.log("Rabbit is moving")
    }
}



const dog = new Dog();
dog.move();
dog.bark();


const rabbit = new Rabbit();
rabbit.move();
rabbit.jump();