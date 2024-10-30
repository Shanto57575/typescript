function abcd(a:number, b:string):void {
    here a. suggests all number type of implementation we can do with them
    here b. suggests all string type of implementation we can do with them
}

function getDataOfUser(Obj) {
    but here if we write Obj.it doesnt suggest anything
    but we can make suggestions using interface.
    Lets see below
}

interface User{
    name: string,
    age: number,
    address: string
}

interface User2{
    name: string,
    age: number,
    address?: string // optional
}

function getDataOfUser2(Obj:User) {
    now after doing Obj.
    it will suggests us name, age, Address
    so thats how we can say object will look like User
}
  

Now we have to give all value 
of how the interface will look like

getDataOfUser2({age:26 , address:'halishahr', name:"shanto" })
