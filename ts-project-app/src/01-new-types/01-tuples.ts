const prices:(number|string)[] = [1,2,3,"dos"]
console.log(prices)

prices.push("uno")
console.log(prices)

//Tupla
let user:[string, number]

user = ["username", 10]

const [username, edad]=user
console.log(username)
console.log(edad)