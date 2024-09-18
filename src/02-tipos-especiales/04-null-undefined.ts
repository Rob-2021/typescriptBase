(()=>{
    let myNull: null = null
    let myUndefined: undefined = undefined

    let miNumero: number | null=null

    let mistring: string | undefined = undefined

    function hola(nombre: string | null){
        let hola1="Hola "

        if(nombre){
            hola1 += nombre
        }else{
            hola1 += "nada "
        }
        console.log(hola1)
    }

    hola("Mundo")
    hola(null)


    function adios(nombre: string | null){
        let hello = "Adios "
        hello += nombre?.toLowerCase() || "nada" 
        console.log(hello)
    }

    adios("Mundo")
    adios(null)

})();