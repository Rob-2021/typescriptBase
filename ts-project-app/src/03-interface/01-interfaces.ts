type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL'; //literal types

type Product = {
    id: string,
    title: string,
    size: Size
}

interface Product1{
    id: string,
    title: string,
    size: Size
}

export interface Product2 extends Product1 {
    name: string
}