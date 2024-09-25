export enum ROLES{
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

export type User={
    username: string,
    role: ROLES
}

const JuanUser:User={
    username: 'admin',
    role: ROLES.ADMIN
}