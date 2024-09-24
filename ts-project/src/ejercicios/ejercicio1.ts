//Ejercicio #1
/*Define un alias de tipo llamado Persona que represente un objeto con las propiedades nombre(de tipo string),
edad(de tipo number), y una propiedad opcional direccion(de tipo string).

define otro alias de tipo llamado ResultadoBusqueda, el cual puede ser de tipo Persona, null o undefined.

Implementa una funcion llamada buscarPersonaPorNombre que reciba un argumento de tipo string y retorne un valor
de tipo ResultadoBusqueda. La funcion debe buscar en un arreglo de objetos Persona y devolver:

El objeto Persona si el nombre coincide.
null si no se encuentra la persona.
undefined si el nombre proporcionado esta vacio.
Define un tipo literal llamado ResultadoMensaje que solo permita los valores 'exito', 'fallo' o 'pendiente'.

Implementa una funcion llamada procesarResultado que reciba como parametro un valor de tipo ResultadoMensaje y
retorne un mensaje acorde al estado proporcionado.

*/

type Persona = {
    nombre: string,
    edad: number,
    direccion?: string
}

type ResultadoBusqueda = Persona | null | undefined

const buscarPersonaPorNombre = (nombre: string): ResultadoBusqueda => {
    const personas: Persona[] = [
        {nombre: "Juan", edad: 30},
        {nombre: "Maria", edad: 25},
        {nombre: "Pedro", edad: 35}
    ]

    if(nombre === ""){
        return undefined
    }

    const personaEncontrada = personas.find(persona => persona.nombre === nombre)
    return personaEncontrada ? personaEncontrada : null
}

type ResultadoMensaje = 'exito' | 'fallo' | 'pendiente'

const procesarResultado = (resultado: ResultadoMensaje): string => {
    switch(resultado){
        case 'exito':
            return "Operación exitosa"
        case 'fallo':
            return "Operación fallida"
        case 'pendiente':
            return "El proceso esta pendiente"
        default:
            return "Resultado no reconocido"
    }
}

console.log(buscarPersonaPorNombre("Juan"))
console.log(buscarPersonaPorNombre(""))
console.log(buscarPersonaPorNombre("Jose"))

console.log(procesarResultado("exito"))
console.log(procesarResultado("fallo"))

