import { addProductos, productos} from "./product.service";

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

console.log(productos)