// enum
enum StatusCode{
    NotFound = 400,
    AllOk = 200,
    Created = 201,
    InternalServerError = 500,
}

console.log(StatusCode.NotFound)
console.log(StatusCode.AllOk)
console.log(StatusCode.Created)
console.log(StatusCode.InternalServerError)
// console.log(StatusCode.Anyhing) // ==> Error it doesnt exist in enum StatusCode type

//Any

let a = 12 // number;
let b; // this is any type+> means can be of any type like number, string, boolean etc

b = 20
b = "shanto"

console.log(b.toUpperCase())

// unknown
let c:unknown
c = 12;
c = "twelve"

// c = c.toUpperCase() //=>leads to error becaus eits unknown type so there might be chance its not string ...
// so incase of unknown ts checks it
// but in terms of any it doesnt check anything
// its upto the programmer
if (typeof c == "string") {
    console.log(c)
}
// difference between any vs unknown
// difference between undefined vs null
// undefined
// null
// narrowing ==> cheking type safety
