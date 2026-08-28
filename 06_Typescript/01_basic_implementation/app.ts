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


class BottleMaker {
    constructor(public brand:string,public price: number, public color:string,public material:string){

    }
}

let b1 = new BottleMaker('milton',1200,'pink','metal')
let b2 = new BottleMaker('cello',1000,'red','plastic')

class MakeBottle{
    private halua: string = 'halua';
    protected readonly ajaa: string = 'nooo';
    constructor(public name:string){}
}

class MetalBottle extends MakeBottle{
    constructor(name:string){
        super(name);
    }

    getValue(){
        console.log(this.name,this.halua,this.ajaa) // halua can only accessed on it own class
        this.ajaa = 'nahi' // can not change as readonly  
        console.log(this.ajaa)
    }

}

let bb1 = new MetalBottle('chilton')
bb1.getValue()


class User2{
    constructor(public _name: string,public _age:number){}

    get name(){
        return this._name
    }

    set name(value:string){
        this._name = value
    }
}

let u1 = new User2('alriyan',23)