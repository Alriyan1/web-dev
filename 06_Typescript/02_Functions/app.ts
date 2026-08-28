function abcde(name:string,age:number,cb:(arg:string)=>void){
    cb('me khalnayak')
}

abcde('alriyan',23,(arg:string)=>{
    console.log(arg)
})

function abcdef(name:string,age?:number,gender:string='unknown'){
    console.log(name,age,gender)
}

abcdef('alriyan', undefined, 'male')
abcdef('fardeen',25)
abcdef('noor')

function sum(...args:number[]){
    console.log(args)
}

sum(1,2,3,4,5,6,7,8,9)

function abc(a:string): void;
function abc(a:string,b:number): number;

function abc(a:any,b?:any): void|number{
    if (typeof a === 'string' && b === undefined){
        console.log('1 chla',a)
    }
    else if (typeof a==='string' && typeof b==='number') {
        return 123;
    } else {
        throw new Error ('dono mese ek choose kr')
    }
}

abc('alriyan')
console.log(abc('fardeen',23))