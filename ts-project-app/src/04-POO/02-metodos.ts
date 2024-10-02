class Persona{
    name:string
    lastName:string

    constructor(name:string, lastName:string){
        this.name = name
        this.lastName = lastName
    }

    saludar():string{
        return `Hola, soy ${this.name} ${this.lastName}`
    }
}

const persona1 = new Persona('Juan', 'Perez')
console.log(persona1.saludar())