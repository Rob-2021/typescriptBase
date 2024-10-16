import express, { Application, Request, Response } from 'express';
import path from 'path';

const app: Application = express();

const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));

// Rutas
app.get('/', (req: Request, res:Response) => {
    res.send('Hola mundo');
})

app.get('/nueva-ruta', (req: Request, res:Response) => {
    res.send('Nueva ruta');
})

app.get('/html', (req: Request, res:Response) => {
    res.send(`
        <html>
            <head>
                <title>API</title>
            </head>
            <body>
                <h1>Hola mundo</h1>
                <span><strong>Su Nombres: </strong>Pepe</span>
            </body>
        </html>
        `)
})

app.get('/products', (req: Request, res:Response) => {
    res.json([
        {
            name: 'Producto 1',
            price: 12
        },
        {
            name: 'Producto 2',
            price: 23
        },
    ])
})

app.get('/products/:id', (req: Request, res:Response) => {
    const {id} = req.params; //destructuring
    res.json({
        id,
        name: 'Producto 3',
        price: 24
    })
})

app.get('/categories/:categoryID/products/:productID', (req: Request, res:Response)=>{
    //const { categoryID, productID } = req.params
    res.json({
        categoryID: req.params.categoryID,
        productID: req.params.productID,
        name: 'Producto 4',
        price: 25
    })
})

app.post('/products', (req: Request, res:Response) => {
    res.send("creando un producto")
})

//rutas para archivos
app.get('/download/txt', (req: Request, res:Response) => {
    const filePath = path.join(publicDirectory, 'holamundo.txt');
    res.sendFile(filePath);
})

app.get('/download/csv', (req: Request, res:Response) => {
    const filePath = path.join(publicDirectory, 'data.csv');
    res.sendFile(filePath);
})

app.get('/download/xlsx', (req: Request, res:Response) => {
    const filePath = path.join(publicDirectory, 'dbestudiante.xlsx');
    res.sendFile(filePath);
})

app.get('/download/pdf', (req: Request, res:Response) => {
    const filePath = path.join(publicDirectory, 'remota.pdf');
    res.sendFile(filePath);
})

export default app;

/**
 * tarea
 * crear 3 peticiones get, que me devuelva
 * archivos .txt, .csv, xlsx, .pdf
 * estos archivos deben estar en la carpeta public
 */