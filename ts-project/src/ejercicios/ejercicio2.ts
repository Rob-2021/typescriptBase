/**
    * Ejercicio 2
    implementar una funcion que reciba un string para determinar el orden de los resultados en una consulta. 
    
    -El string tiene el formato "campo-orden", donde campo es el nombre del campo por el que se quiere ordenar(por ejemplo: "name" o "createdAt"), y orden puede ser
    asc(ascendente) o desc(descendente), Requisitos:
    
    -Si no se pasa el parametro sortBy, la funcion debe devolver un objeto que ordene los resultados por defecto, en este caso, por createdAt de manera
    descendente ({createdAt: -1})

    -Si se pasa el parametro invalido o un campo que no esta permitido para ordenar, la funcion debe devolver el mismo objeto por defecto.

    -La funcion debe verificar si el campo de ordenamiento esta permitido(allowedSortFields), y si el orden es asc o desc. Si el valor es invalido, debe
    retornar el objeto por defecto.

    -Finalmente, debe retornar un objeto con el campo a ordenar y el tipo de orden, donde 1 representa ascendente y -1 respresenta descendente.

    -Tu tarea es completar y probar la funcion asegurandote de manejar correctamente los posibles casos y verificando la salida esperada con diferentes valores de sortBy.

    Entradas:
    name-asc
    lastname-desc
    edad-asc
    updatedAt-desc

    Salidas:
    {name: 1}
    {lastname: -1}
    {edad: 1}
    {updatedAt: -1}
 */

// type AllowedSortFields = "name" | "createdAt" | "updatedAt"

// const defaultSort = {createdAt: -1}

// const sortByField = (sortBy: string): { [key: string]: number } => {
//     const [field, order] = sortBy.split("-")
//     const allowedSortFields: AllowedSortFields[] = ["name", "createdAt", "updatedAt"]

//     if(!sortBy || !allowedSortFields.includes(field) || (order !== "asc" && order !== "desc")){
//         return defaultSort
//     }

//     return {
//         [field]: order === "asc" ? 1 : -1
//     }
// }

// console.log(sortByField("name-asc"))
// console.log(sortByField("lastname-desc"))
// console.log(sortByField("edad-asc"))
// console.log(sortByField("updatedAt-desc"))


// Definir los campos permitidos para ordenar
const allowedSortFields = ['name', 'lastname', 'edad', 'createdAt', 'updatedAt'];

type SortOrder = 1 | -1;

// Función para obtener el objeto de ordenamiento basado en el string de entrada
function getSortObject(sortBy?: string): Record<string, SortOrder> {
    // Objeto por defecto (orden por createdAt en forma descendente)
    const defaultSort = { createdAt: -1 as SortOrder };

    // Si no se proporciona sortBy, retornar el objeto por defecto
    if (!sortBy) {
        return defaultSort;
    }

    // Separar el string en campo y orden
    const [field, order] = sortBy.split('-');

    // Verificar si el campo está permitido
    if (!allowedSortFields.includes(field)) {
        return defaultSort;
    }

    // Verificar si el orden es válido (asc o desc)
    if (order === 'asc') {
        return { [field]: 1 as SortOrder };
    } else if (order === 'desc') {
        return { [field]: -1 as SortOrder };
    } else {
        // Si el orden es inválido, retornar el objeto por defecto
        return defaultSort;
    }
}

// Pruebas con diferentes entradas
console.log(getSortObject('name-asc'));       // { name: 1 }
console.log(getSortObject('lastname-desc'));  // { lastname: -1 }
console.log(getSortObject('edad-asc'));       // { edad: 1 }
console.log(getSortObject('updatedAt-desc')); // { updatedAt: -1 }
console.log(getSortObject('invalidField-asc')); // { createdAt: -1 } (por defecto)
//console.log(getSortObject('name-invalidOrder')); // { createdAt: -1 } (por defecto)
//console.log(getSortObject());                // { createdAt: -1 } (sin sortBy)
