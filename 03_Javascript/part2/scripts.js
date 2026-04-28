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