/* Liskov Substitution Principle
Liskov Substitution Principle

Subir a la implementación

The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of that subclass. 

This principle states that objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of that subclass. 

In other words, a subclass should be able to be used wherever its superclass is used, without having to be altered. 

If a subclass is not a proper replacement for its superclass, it should not be used wherever the superclass is used.

Las clases heredadas deben ser sustitutables por otras clases heredadas sin alterar su correctez.

En otras palabras, una subclase debe ser usable donde su superclase sea usada, sin tener que ser modificada.

Si una subclase no es una sustitución adecuada para su superclase, no debe ser usada donde la superclase sea usada.
*/

class Bird {
    constructor(){}

    fly(): void {
        console.log("El parajaro Vuela")
    }

    moving(): void {
        console.log("moverse")
    }
}


class Aguila extends Bird {
    constructor(){
        super()
    }

    fly(): void {
        console.log("EL Aguila vuela")
    }

    moving(): void {
        console.log("aguila moviendose...")
    }
}

const anguila = new Aguila();
// anguila.fly();
// anguila.moving();

const parajero = new Bird();
// parajero.fly(); 
// parajero.moving();

class Vehiculo {
    velocidad: number;
    constructor(velocidad: number = 0){
        this.velocidad = velocidad
    }
    mover(): void {
        console.log("mover")
    }

    acelerar(incremento: number ): void {
        this.velocidad += incremento
        console.log("acelerar", this.velocidad)
    }

    frenar( decremento: number ): void {
        this.velocidad -= decremento
        console.log("frenar", this.velocidad)
    }
}

class Moto extends Vehiculo {
    constructor(){
        super()
    }
    mover(): void {
        console.log("Moto mover")
    }
}
const moto = new Moto();
moto.mover();
moto.acelerar(10);
moto.frenar(5);

