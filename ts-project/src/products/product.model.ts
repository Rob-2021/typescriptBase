export type Talla = "S" | "M" | "L" | "XL" | "XXL"

export type Producto = {
        title: string,
        createAt: Date,
        stock: number,
        size?: Talla,
        color?: string,
        marca?: string,
    }