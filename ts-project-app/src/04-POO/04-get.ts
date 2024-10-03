
class Auto{
    marca: string
    modelo: string
    color: string
    velocidad: number

    constructor(marca:string, modelo:string, color:string, velocidad:number){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.velocidad = velocidad
    }

    get getMarca():string{
        return this.marca
    }

    get getModelo():string{
        return this.modelo
    }

    get getColor():string{
        return this.color
    }

    get getVelocidad():number{
        return this.velocidad
    }
}

const auto1 = new Auto('Ford', 'Fiesta', 'Rojo', 100)
console.log(`La marca del auto es: ${auto1.getMarca}`) // Ford
console.log(`El modelo del auto es: ${auto1.getModelo}`) // Fiesta
console.log(`El color del auto es: ${auto1.getColor}`) // Rojo
console.log(`La velocidad del auto es: ${auto1.getVelocidad}`) // 100

class Auto2{
    constructor(
        public marca:string, 
        public modelo:string, 
        public color:string, 
        public velocidad:number){}

    get getMarca():string{
        return this.marca
    }

    get getModelo():string{
        return this.modelo
    }

    get getColor():string{
        return this.color
    }

    get getVelocidad():number{
        return this.velocidad
    }
}

const auto2 = new Auto2("Chevrolet", "Camaro", "Amarillo", 200)
console.log(`La marca del auto es: ${auto2.getMarca}, modelo: ${auto2.getModelo}, color: ${auto2.getColor}, velocidad: ${auto2.getVelocidad}`) // Chevrolet, Camaro, Amarillo, 200