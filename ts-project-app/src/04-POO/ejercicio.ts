//Tarea
/**
 * const padre = new Padre("Carlos", "Mendez", "Perez")
console.log(padre.describirPadre)


const hijo = new hijo("Carlos", "Mendez", "Perez","Karla" ,"Ramirez")
console.log(hijo.describirHijo)

//Carlos Mendez Perez
//Karla Mendez Ramirez
 */

class Padre{
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string){
        this.nombre = nombre
        this.apellidoPaterno = apellidoPaterno
        this.apellidoMaterno = apellidoMaterno
    }

    describirPadre(){
        console.log(`Nombre Completo Padre: ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`)
    }
}

class Hijo extends Padre{
    nombreHijo: string
    apellidoMaternoHijo: string

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, nombreHijo: string, apellidoMaternoHijo: string){
        super(nombre, apellidoPaterno, apellidoMaterno)
        this.nombreHijo = nombreHijo
        this.apellidoMaternoHijo = apellidoMaternoHijo
    }

    describirHijo(){
        console.log(`Nombre Completo Hijo: ${this.nombreHijo} ${this.apellidoPaterno} ${this.apellidoMaternoHijo}`)
    }
}

const padre = new Padre("Carlos", "Mendez", "Perez")
padre.describirPadre()

const hijo = new Hijo("Carlos", "Mendez", "Perez","Karla" ,"Ramirez")
hijo.describirHijo()