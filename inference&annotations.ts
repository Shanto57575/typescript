// inference:
when typescript automatically detect the type of the variable based on the value its infering
Exmaple:
let message = "Hello, TypeScript!";
// TypeScript infers the type of `message` as `string`
let count = 10; 
// TypeScript infers `count` as `number`
count = "ten"; // Error: Type 'string' is not assignable to type 'number'

//type annotations:

In TypeScript, specifying a variable's type after a colon (:) is called a type annotation

let age: number = 25;
let name: string = "Shanto";

In this example:

The type of age is annotated as number.
The type of name is annotated as string.

const abcd = (a: number, b: number): number => {
    return a + b
}

function efgh(a: number, b: number): number{
    return a*b
}
