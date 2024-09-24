import { Producto } from "./product.model";

export const productos: Producto[] = []

export const addProductos = (data: Producto) =>{
    productos.push(data)
}