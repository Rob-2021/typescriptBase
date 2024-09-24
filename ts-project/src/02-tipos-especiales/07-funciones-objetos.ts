(() => {

    const login = (data: { email: string, password: string }) => {
        console.log(data.email, data.password)
    }

    login({ email: "Juan@gmail", password: "12345" })

    type Talla = 'S' | 'M' | 'L' | 'XL' | 'XXL'
    const productos: any[] = []

    const addProductos = (data: {
        title: string,
        createAt: Date,
        stock: number,
        size?: Talla
    }) => {
        productos.push(data)
    }

    addProductos({
        title: 'Producto1',
        createAt: new Date(),
        stock: 12,
        size: 'M'
    })

    addProductos({
        title: 'Producto2',
        createAt: new Date(),
        stock: 33
    })
    console.log(productos)

})();