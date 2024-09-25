const createProduct = (
    id: string|number,
    stock?: number,
    isNew?: boolean
)=>{
    return{
        id,
        isNew: isNew ?? true,
        stock: stock ?? 10
    }
}

//""
//false
//0

const producto1 = createProduct(12, 22, true)
console.log(producto1)

const producto2 = createProduct("12")
console.log(producto2)

const producto3 = createProduct(12,0,false)
console.log(producto3)