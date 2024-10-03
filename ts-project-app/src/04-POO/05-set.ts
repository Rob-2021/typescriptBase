class AutoNuevo{
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

    set setVelocidad(nuevaVelocidad:number){
        if(nuevaVelocidad >= 0){
            //throw new Error('La velocidad debe ser mayor a 0')
            this.velocidad = nuevaVelocidad
            console.log(`La velocidad del auto es: ${this.velocidad}`)
        }else{
            console.log('La velocidad no puede ser menor a 0')
        }
    }
}

const autoNuevo = new AutoNuevo('Ford', 'Fiesta', 'Rojo', 100)
// console.log(`La marca del auto es: ${autoNuevo.getMarca}`) 
// console.log(`El modelo del auto es: ${autoNuevo.getModelo}`) 
// console.log(`El color del auto es: ${autoNuevo.getColor}`) 
// console.log(`La velocidad del auto es: ${autoNuevo.getVelocidad}`) 

autoNuevo.setVelocidad = 200