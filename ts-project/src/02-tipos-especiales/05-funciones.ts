(()=>{
    type Talla = "S"| "M"| "L"| "XL" | "XXL"

    function crearProductos(
        title: string,
        createAt: Date,
        stock: number,
        size: Talla,
    ){
        return {title, createAt, stock, size}
    }

    const producto1 = crearProductos("Camiseta", new Date(), 12, "XL")
    console.log(producto1)

    const crearProductos2 =(
        title: string,
        createAt: Date,
        stock: number,
        size?: Talla,
    )=>{
        return {title, createAt, stock, size}
    }
    
    const producto2 = crearProductos2("Pantalón", new Date(), 100)
    console.log(producto2)
})();