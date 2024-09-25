let anyVar:any
anyVar = true
anyVar = undefined
anyVar = null
anyVar = 1
anyVar = []
anyVar = {}

console.log(anyVar)

let isNew:boolean = anyVar
console.log(isNew)

let unknownVar:unknown
unknownVar = true
unknownVar = undefined
unknownVar = null
unknownVar = 1
unknownVar = []
unknownVar = {}

if (typeof unknownVar === "string"){
    unknownVar.toUpperCase()
}

if(typeof unknownVar === "boolean"){
    let isNew:boolean = unknownVar
}

const parText=(str:string):unknown=>{
    return JSON.parse(str)
}

JSON.parse("hhh") // Error
JSON.parse('{"name":"John"}') 

console.log(unknownVar)