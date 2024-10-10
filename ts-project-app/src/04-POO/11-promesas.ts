const promesa = new Promise((resolve, reject) =>{
    const exito = true;

    if(exito){
        resolve('La operación fue exitosa') //fullfilled
    }else{
        reject('La operación no fue exitosa') //rejected
    }
})

promesa.then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.log(error)
})

const miPromesa = new Promise((resolve, reject) =>{
    //
})