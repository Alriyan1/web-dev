var a = 12;
var b=13; 

let arr: number[] =[1,2,3,4];

let arr2: [number,string] =[12,'alriyan']


enum UserRoles {
    ADMIN = 'admin',
    GUEST = 'guest',
    SUPER_ADMIN = 'super-admin'
}

interface User{
    name: string,
    email: string,
    password: string,
    gender?: string, //optional
}

function getData(obj:User){

}

interface Admin extends User{
    admin:boolean;
}

function newVersion(obj:Admin){
    obj.admin = true
}

type sankhy = number | string;

let z: sankhy;

type U = {
    name:string,
    email:string
}

type A = U & {
    getDetails(user: string):void
}

function abcd(a:A){
    a.getDetails
  }

class Device{
    name='lg'
    price=12000
    category='digital'
}

let d1 = new Device()
let d2 = new Device()
