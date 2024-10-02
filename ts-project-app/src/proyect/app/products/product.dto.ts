
import { Product1 } from "./product.model";

export interface CreateProductDto extends Omit<Product1, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string
}

//type example = Pick<Product1, 'color' | 'description'>

/* interface UpdateProduct1{
  title?: string,
  image?: string,
  description?: string,
  stock?: number,
  size1?: Size1,
  color?: string,
  price?: number,
  category1?: Category,
  isNew?: boolean,
  tags?: string[]
} */
// 

export interface UpdateProduct extends Partial<CreateProductDto> {

}

//type example = Required<Product1, 'color' | 'description'>

export interface FindProductDto extends Readonly<Partial<Product1>>{

}

//type example = Readonly<Product1, 'color' | 'description'>