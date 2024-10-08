abstract class Animal{
    constructor(private nombre: string){}

    get getNombre():string{
        return `${this.nombre}`
    }

    abstract edad():number

    descripcionAnimal():string{
        return `Su nombre es: ${this.getNombre} y su edad es: ${this.edad()}`
    }
}

class Gato extends Animal{
    constructor(nombre:string, private _edad: number){
        super(nombre)
    }

    edad(): number {
        return this._edad
    }
}

const gato = new Gato("tom", 2)
console.log(gato.descripcionAnimal())