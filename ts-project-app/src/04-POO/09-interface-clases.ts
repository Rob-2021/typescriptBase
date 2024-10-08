interface Drive{
    database: string
    password: string
    port: number

    connect(): void
    disconnect(): void
    isConnected(name:string): boolean
}

class PostgresDriver implements Drive{
    constructor(public database: string, public password: string, public port: number){}
    connect(): void {
        
    }
    disconnect(): void {
        
    }

    isConnected(name: string): boolean {
        return true
    }
}