import { faker } from "@faker-js/faker/.";

import { Product1 } from "./product.model";
import { CreateProductDto, UpdateProduct, FindProductDto } from "./product.dto"


export const products1: Product1[] = []

export const addProduct1 = (data: CreateProductDto): Product1 => {
    //data.createdAt = new Date(2023, 1, 1)

    const newProduct = {
        ...data,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),

        }
    }
    products1.push(newProduct)
    return newProduct
}


export const updateProduct = (id: string, changes: UpdateProduct): Product1 => {
    const index = products1.findIndex(item => item.id === id)
    const prevData = products1[index]
    products1[index] = {
        ...prevData,
        ...changes
    }
    return products1[index]
}


export const findProduct = (dto: FindProductDto): Product1[] => {
    //dto.color = 'white'
    return products1
}