(() => {
    type Talla = "S" | "M" | "L" | "XL" | "XXL"
    type Producto = {
        title: string,
        createAt: Date,
        stock: number,
        size?: Talla,
        color?: string,
        marca?: string,
    }
    const productos: any[] = []

    const addProductos = (data: Producto) => {
        productos.push(data)
    }

    addProductos({
        title: "Camiseta",
        createAt: new Date(),
        stock: 12,
        size: "XL",
        color: "negro",
        marca: "Levis"
    })

    addProductos({
        title: "Pantalón",
        createAt: new Date(),
        stock: 100,
        size: "L",
        //color: "azul",
        //marca: "toto"
    })

    productos.push({
        title: "Short",
        createAt: new Date(),
        stock: 10,
        size: "XL"
    })

    console.log(productos)

})();