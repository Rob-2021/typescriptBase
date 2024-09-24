(()=>{
    //funcion de retorno
    function nombreCompleto(nombre: string, apellido: string):string{
        return `${nombre} ${apellido}`
    }


    //funcion sin retorno
    function imprimirNombre(nombre: string, apellido: string):void{
        const respuesta = nombreCompleto(nombre, apellido)
        console.log(`El nombre completo es: ${respuesta}`)
    }

    imprimirNombre("Juan", "Perez")
})();