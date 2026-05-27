

abstract class Operation {
    abstract calcular(...data: number[]): number;
}


class Calculadora {
    operacion: Operation
    constructor( operacion :Operation){
        this.operacion = operacion
    }
    calcular(...data: number[]) {
        return this.operacion.calcular(...data)
    }
}

class suma extends Operation {

    calcular(...data: number[]): number {
        console.log('Sumandos..', ...data)
        return data.reduce((a,b) => a + b, 0)
    }
}

class resta extends Operation {

    calcular(...data: number[]): number {
       return data.reduce((a,b) => a - b, 0)
    }
}

class dividir extends Operation {

    calcular(a: number, b: number): number {
       return a / b
    }
}


const sumar = new suma();
const dividir1 = new dividir();

const sum = sumar.calcular(1,2,3)
console.log(sum)

const restar = new resta();
const res = restar.calcular(1,2,3)
console.log(res)

const calculdadoraSum = new Calculadora(sumar)
const calculdadoraRest = new Calculadora(restar)
const calculdadoraDividir = new Calculadora(dividir1)

const sum1 = calculdadoraSum.calcular(1,2,3);
const res1 = calculdadoraRest.calcular(1,2,3)
const res2 = calculdadoraDividir.calcular(1,2)
console.log(sum1)
console.log(res1)
console.log(res2)