import { addProduct1, findProduct, products1, updateProduct } from "./app/products/product.service";
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
    const response = addProduct1({
        //id: faker.string.uuid(),
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent(),
        title: faker.commerce.productName(),
        image: faker.image.url(),
        description: faker.commerce.productDescription(),
        stock: faker.number.int({ min: 10, max: 100 }),
        size: faker.helpers.arrayElement(['P', 'S', 'M', 'L', 'XL', 'XXL']),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price(), 10),
        categoryId: faker.string.uuid(),
        isNew: faker.datatype.boolean(),
        tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
    })
}

console.log('Products', products1)

const product = products1[0]

updateProduct(product.id, {
    title: "Top Amarillo",
    stock: 2,
    //id: "hgfhsg34343",
    //createdAt: new Date()
})


findProduct({
    title: 'p1',
    stock: 10,
    color: 'red'
})