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