class shapes {

    constructor(){}

    draw() {
        console.log('Dibujar algo')
    }
}



class Square extends shapes {
    draw(): void {
        console.log('Dibujar un cuadrado')
    }
}

const cuadrado = new Square()
cuadrado.draw();



/// interface 
interface ShapesInterface {
    draw():void;
}


class triangule implements ShapesInterface{
    draw(): void {
        console.log('Dibujar un triangulo')
    }
}

const triangulo = new triangule();
triangulo.draw();