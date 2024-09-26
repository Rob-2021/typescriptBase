import { BaseModel } from "../../base.model";
import { Category } from "../categories/categorie.model";

export type Size1 = 'P'|'S'|'M'|'L'|'XL'|'XXL';

export interface Product1 extends BaseModel{
    title: string,
    image: string,
    description: string,
    stock: number,
    size?: Size1,
    color: string,
    price: number,
    category: Category
    isNew: boolean,
    tags: string[],
}