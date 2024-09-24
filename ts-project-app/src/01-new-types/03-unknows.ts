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

console.log(unknownVar)