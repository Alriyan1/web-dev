var a = document.querySelector('h1')
console.log(a)

a.innerHTML = 'changed'

a.style.color = 'black'
a.style.backgroundColor = "royalblue"

a.addEventListener('click',function(){
    console.log('hello')
    a.innerHTML = 'gurde'
})