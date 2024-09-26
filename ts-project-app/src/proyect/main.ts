import { addProduct1, products1 } from "./app/products/product.service";
import { faker } from '@faker-js/faker';

for(let index = 0; index < 50; index++){
    addProduct1({
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        title: faker.commerce.productName(),
        image: faker.image.url(),
        description: faker.commerce.productDescription(),
        stock: faker.number.int({min:10, max:100}),
        size: faker.helpers.arrayElement(['P','S','M','L','XL','XXL']),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price(), 10),
        category: {
            id: faker.string.uuid(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
            name: faker.commerce.department()
        },
        isNew: faker.datatype.boolean(),
        tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
    })
}

console.log('Products', products1)