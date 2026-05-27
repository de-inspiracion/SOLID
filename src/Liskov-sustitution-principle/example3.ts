


interface flyInterface {
    fly(): void
}

interface movingInterface {
    moving(): void
}

interface swimInterface {
    swim(): void
}

abstract class Bird {
    moving(): void {
        console.log("moverse")
    }
}


class Aguila extends Bird implements flyInterface {
    fly(): void {
        console.log("EL Aguila vuela")
    }

    moving(): void {
        console.log("aguila moviendose...")
    }
}



class Duck extends Bird implements swimInterface {
    swim(): void {
        console.log("pato nadando ....")
    }
    moving(): void {
        console.log("pato moviendose...")
    }

}



const pato = new Duck()
pato.moving()
pato.swim()


const aguila = new Aguila()
aguila.fly()
aguila.moving()