// let abcd = document.getElementbyId("abcde ");
// let abcd = document.getElementsbyClassName("abcd");

// let abcd = document.querySelector('h1')
// console.log(abcd)

// let abcd = document.querySelectorAll('h1')
// console.log(abcd)

let h1 = document.querySelector('h1');

h1.innerHTML = 'alriyan cheeta'

let a = document.querySelector('a');
a.href = "https://www.google.com" // a.setAttribute("href","https://www.google.com")

console.log(a.getAttribute("href"))

// a.removeAttribute("href") attribute ko i hta dega na ki uski value ko

let hh = document.createElement('h1');
hh.textContent = 'gurde';
document.body.append(hh); // ya prepend

// document.querySelector("body").prepend(h2)

// hh.style.color = 'yellow'
// hh.style.backgroundColor = 'red'

hh.classList.add('hulu') // hh.classList.remove("hulu")

let lis = document.querySelectorAll('li');
lis.forEach(function (val){
    console.log(val.textContent)
})

let img = document.createElement('img')
img.width = '20px'
img.setAttribute('alt','00000000000')
document.body.append(img)


let li = document.querySelectorAll("ul li:nth-child(2n)");

li.forEach(function (val){
    val.style.color = 'pink'; 
})


let h = document.querySelector('h1');

function event(){
    h.style.color = 'green'
}

h.addEventListener("click",event); // h.removeEventListner("click",event);

let input = document.querySelector('input');

input.addEventListener('input',function(val){
    console.log(val.data)
})

let opt = document.querySelector('select');
let device = document.querySelector('h3');

opt.addEventListener('change',function(val){
    console.log(val.target.value)
}); 

opt.addEventListener('change',function(val){
    device.textContent = `${val.target.value} SELECTED`
});


let fileinp = document.querySelector('#dis');
let butt = document.querySelector('#btn');

butt.addEventListener('click',function(){
    fileinp.click();
})

fileinp.addEventListener('change',function(val){
    const file = val.target.files[0];

    if (file){
        butt.textContent = file.name;
        console.log(file.name)
    }
})

let form = document.querySelector('form');

form.addEventListener('submit',function(val){
    val.preventDefault();
    console.log(
        val.target[0].value,
        val.target[1].value,
        val.target[2].value,
        val.target[3 ].value
    );
})

let abcd = document.querySelector(".abcd");

abcd.addEventListener('mouseover',function(){
    abcd.style.backgroundColor = 'yellow';
});

abcd.addEventListener('mouseout',function(){
    abcd.style.backgroundColor = 'red';
})

let abcd2 = document.querySelector(".abcd2");

window.addEventListener('mousemove',function(val){
    abcd2.style.top = val.clientY + "px";
    abcd2.style.left = val.clientX + "px";
});