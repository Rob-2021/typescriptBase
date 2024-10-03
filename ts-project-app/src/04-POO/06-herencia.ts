
class PersonaNueva{
    nombre: string
    apellido: string
    edad: number

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    get nombreCompleto():string{
        return `Su nombre es: ${this.nombre}, apellido: ${this.apellido} y su edad: ${this.edad}`
    }
}

class Estudiante extends PersonaNueva{
    ci: number
    cu: number
    carrera: string

    constructor(nombre: string, apellido: string, edad: number, ci: number, cu: number, carrera: string){
        super(nombre, apellido, edad)
        this.ci = ci
        this.cu = cu
        this.carrera = carrera
    }

    get datosEstudiante():string{
        return `Su nombre es: ${this.nombre}, apellido: ${this.apellido}, edad: ${this.edad}, ci: ${this.ci}, cu: ${this.cu} y carrera: ${this.carrera}`
    }
}

const personaNueva = new PersonaNueva('Juan', 'Perez', 30)
console.log(personaNueva.nombreCompleto)

const estudiante = new Estudiante("Pedro", "Gomez", 25, 123456, 353098, "Ing. Sistemas")
console.log(estudiante.datosEstudiante)

//Tarea
/**
 * const padre = new Padre("Carlos", "Mendez", "Perez")
console.log(padre.describirPadre)


const hijo = new hijo("Carlos", "Mendez", "Perez","Karla" ,"Ramirez")
console.log(hijo.describirHijo)

//Carlos Mendez Perez
//Karla Mendez Ramirez
 */