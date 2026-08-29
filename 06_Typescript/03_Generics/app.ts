function abcd<T>(a:T,b:string,c:number){

}

abcd<string>('halua','puri',5)

function log<T>(val:T){
    console.log(val)
}

log<number>(12)

interface Halua<T>{
    name:string
    age:number,
    key:T;
}

function abc(obj:Halua<string>){
    // obj.key.
}

abc({name:'foo',age:24,key:'askdjfkla'})

class BottleMaker<T>{
    constructor(public key:T){}
}

let b1 = new BottleMaker<string>('hey')
let b2 = new BottleMaker<number>(12)

console.log(b1,b2)