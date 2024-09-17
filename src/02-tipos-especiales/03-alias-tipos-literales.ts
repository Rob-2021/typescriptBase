(()=>{
    // let userId: string | number

    type UserId = string | number
    let userId: UserId

    function dosTipos(miTexto: UserId){
        if(typeof miTexto === "string"){
            console.log(`string ${miTexto.toLowerCase()}`)
        }else{
            console.log(`number ${miTexto.toFixed(1)}`)
        }
    }

    dosTipos("Hola mundo")
    dosTipos(123.456)

    //Literal types
    type Talla = "S"| "M"| "L"| "XL"
    let talla: Talla
    talla = "S"
    talla = "M"
    talla = "L"
    talla = "XL"

    function  dosTipos2(userId: UserId, talla: Talla){
        console.log(`userId ${userId}, talla ${talla}`)
    }

    dosTipos2(123, "XL")
})();