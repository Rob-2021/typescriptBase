const withoutEnd=()=>{
    while(true){
        console.log("sigue aprendiendo")
    }
}

const fail = (mensaje:string)=>{
    throw new Error(mensaje)
}

const example=(input:unknown)=>{
    if(typeof input === "string"){
        return "Es un string"
    }else if(Array.isArray(input)){
        return "Es un array"
    }
    return fail("No hizo match")
}

console.log(example("Hola"))
console.log(example([1,2,3]))
//console.log(example(12233132))

console.log(example("Despues de que se detiene"))