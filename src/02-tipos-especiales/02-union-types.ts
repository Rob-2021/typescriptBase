(()=>{
    let userId: string | number
    userId = 123
    userId = "doce"

    console.log(userId)

    function dosTipos(miTexto:string | number){
        if(typeof miTexto === "string"){
            console.log(`string ${miTexto.toLowerCase()}`)
        }else{
            console.log(`number ${miTexto.toFixed(1)}`)
        }
    }

    dosTipos("Hola mundo")
    dosTipos(123.456)

    let productos:(number | string | boolean | object)[] = ["manzana", true, 12]

    productos.push(false)

    console.log(productos)

})();