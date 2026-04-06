console.log('hello')
console.warn('warning')
console.error('error')

var a = 30
console.log(a)

// var b = 20
// console.log(a-b)

// alert('alert')
// var ans = confirm('are u an adult?')
// console.log(ans)

// var ans = prompt('enter your name')
// console.log('my name is ',ans)

if (1>5){
    console.log('7 crores')
}else{
    console.log('0 bate sannata')
} 

a=0
while (a<5){
    console.log(a)
    a++ 
}

x=10
y='10'

if (x == y){
    console.log('sahi with ==')
}else{
    console.log('galat with ==')
}

if (x === y){
    console.log('sahi with ===')
}else{
    console.log('galat with ===')
}

function walk(a){  // var walk = function(){} and var abc = ()=>{}
    console.log('chal',a, 'bhai')
    return 'ghr walo ne mna kr diya'
}

var dukh = walk('alriyan')
console.log(dukh)

var arr = [1,'2',3.2,true,5]
console.log(arr)
arr.push(88)
console.log(arr)
console.log(arr.length)
arr.pop()
console.log(arr)


arr.forEach(function(elem){
    console.log('alriyan',elem)
})

var obj1 = {
    model : 'iphone',
    price : 70000,
    color : 'white'
}

var obj2 = {
    model : 'oneplus',
    price : 30000,
    color : 'black'
}

console.log(obj1)
console.log(obj2.price)

var obj3 = {
    userName : 'alriyan',
    age : 23,
    greet:function(){
        console.log('hello')
        return 0
    }
}

console.log(obj3)
console.log(obj3.greet())
obj3.greet()