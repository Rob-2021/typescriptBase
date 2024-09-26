import { Product1 } from "./product.model";

export const products1:Product1[] = []

export const addProduct1 = (data:Product1) => {
    // data.createdAt = new Date(2023,1,1)
    products1.push(data)
}