class AccPersona1 {
    protected nombre: string
    public apellido: string
    edad: number

    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    get nombreCompleto() {
        return `Su nombre es: ${this.nombre}, apellido: ${this.apellido} y su edad: ${this.edad}`
    }
}

class Estudiante1 extends AccPersona1 {
    ci: number
    cu: number
    carrera: string
    constructor(nombre: string, apellido: string, edad: number, ci: number, cu: number, carrera: string) {
        super(nombre, apellido, edad)
        this.ci = ci
        this.cu = cu
        this.carrera = carrera
    }

    get datosEstudiante(): string {
        return `Sus datos son ${this.nombre}, ${this.apellido}, ${this.edad}, ${this.ci}, ${this.cu}, ${this.carrera} `
    }
}


const accPersona1 = new AccPersona1("Carlos", "Mendez", 12)
console.log(accPersona1.nombreCompleto)



const estudiante1 = new Estudiante1("Karla", "Perez", 17, 244545, 98866, "ing.sistemas")
console.log(estudiante1.datosEstudiante)
//estudiante1.nombre = "Freddy"
