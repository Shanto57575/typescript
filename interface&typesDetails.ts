interface User{
    name: string,
    age: number,
    password: string
}

interface Admin extends User{
    isAdmin: boolean
}

function abcd(obj:User) {
    obj.name
    obj.age
    obj.password
}

function efgh(obj: Admin) {
    obj.name
    obj.age
    obj.password
    obj.isAdmin
}

interface ABCD{
    email: string
}

interface ABCD{
    password: string
}

function ijkl(obj: ABCD) {
    obj.email
    obj.password
}

// type aliases

type value = string | number | boolean

let a: value

// intersection

type User = {
    name: string,
    email: string,
}

type Admin = User & {
    getDetails(user: string):void
}

function mnop(a: Admin) {
    a.getDetails('shanto')
}

// interface are meant to define shapes what will object contain
// type are meant to define what type of value will be assigned to a variable

// This will throw an error for `type`:
// type Person = { name: string; }
// type Person = { age: number; }

// But it’s allowed with `interface`:
interface Person {
    name: string;
}
interface Person {
    age: number;
}
// Merged result: { name: string; age: number; }

Interface: Ideal for structured objects, extensibility, and readability.
Type: Preferred for unions, intersections, and more flexible or complex types.
