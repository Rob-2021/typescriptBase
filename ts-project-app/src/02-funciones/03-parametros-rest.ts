import { ROLES, User } from "../01-new-types/02-enums";

const currentUser:User = {
    username: 'juan',
    role: ROLES.CUSTOMER
}

const checkAdminRole=()=>{
    if(currentUser.role === ROLES.ADMIN){
        return true;
    }
    return false;
}

const respuesta = checkAdminRole()
console.log(respuesta)

const checkRole=(roles1:string, roles2:string)=>{
    if(currentUser.role === roles1){
        return true;
    }
    if(currentUser.role === roles2){
        return true;
    }
    return false;
}

const respuesta2 = checkRole(ROLES.ADMIN, ROLES.SELLER)
console.log(respuesta2)

const checkRole2=(roles:string[])=>{
    if(roles.includes(currentUser.role)){
        return true;
    }
    return false;
}

const respuesta3 = checkRole2([ROLES.ADMIN, ROLES.SELLER])
console.log(respuesta3)

const checkRole3=(...roles:string[])=>{
    if(roles.includes(currentUser.role)){
        return true;
    }
    return false;
}

const respuesta4 = checkRole3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log(respuesta4)