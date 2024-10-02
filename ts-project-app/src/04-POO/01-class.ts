
const date = new Date()
date.getDay()
date.getHours()
date.getTime()

console.log(date)

const date2 = new Date(2023,0, 12)
console.log(date2)

/* class nombre_de_la_clase{
  ...
  constructor(...){

  }
} */

// class Persona{
//   nombre: string
//   apellido: string
//   edad: number

//   constructor(nombre: string, apellido: string, edad: number){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//   }

//   saludar(){
//     console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
//   }
// }

// const persona1 = new Persona('Juan', 'Perez', 30)
// persona1.saludar()

class MiFecha{
    year:number
    month:number
    day:number

    constructor(year:number, month:number, day:number){
        this.year = year
        this.month = month
        this.day = day
    }
}

const fecha = new MiFecha(2023, 1, 12)
console.log(fecha)