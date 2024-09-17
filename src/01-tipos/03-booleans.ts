(()=>{
    let esValido: boolean = true;
    console.log(esValido);
    esValido = false;
    console.log(esValido);
    // esValido = 1; // Error
    // esValido = 'true'; // Error
    // esValido = 'false'; // Error
    // esValido = '1'; // Error
    // esValido = 0; // Error
    // esValido = null; // Error
    // esValido = undefined; // Error
    // esValido = {}; // Error
    // esValido = []; // Error
    // esValido = function(){}; // Error
    // esValido = new Date(); // Error
    // esValido = Symbol(); // Error
    // esValido = Symbol('Hola'); // Error

    const random = Math.random();
    console.log('random', random);

    esValido = random > 0.5 ? true : false;
    console.log('Es valido: ', esValido);
})();