class Persona1{
    // name:string
    // lastName:string

    constructor(
        public name:string = "Nombre Desconocido", 
        public lastName:string = "Apellido Desconocido"){
        // this.name = name
        // this.lastName = lastName
    }

    // saludar():string{
    //     return `Hola, soy ${this.name} ${this.lastName}`
    // }
}

const persona2 = new Persona1('Juan', 'Perez')
console.log(persona2)

const persona3 = new Persona1()
console.log(persona3)
