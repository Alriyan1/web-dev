// closure -> private 
function countForme(){
    let c =0;
    return function (){
        c++;
        console.log(c)
    }
}

let fnc = countForme();
fnc();

// encapsulation

function clickLimiter(){
    let click = 0;
    return function(){
        if (click<5){
            click++;
            console.log(`clicked : ${click} times`);
        } else {
            console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
        }
    }
}

let fnc2 = clickLimiter()
fnc2()
fnc2()
fnc2()
fnc2()
fnc2()
fnc2()

// toaster

function createToaster(config){
    return function(notification){
        let div = document.createElement("div");
        div.className = `fixed ${config.theme === 'dark'?'bg-gray-800 text-white':'bg-gray-100 text-black'} px-6
        py-3 rounded shadow-lg pointer-events-none ${config.positionX==='right'?'right-10':'left-10'} ${config.positionY === 'top'?'top-10':'bottom-10'}`;

        div.textContent = notification;
        document.body.appendChild(div);

        setTimeout(()=>{
            document.body.removeChild(div);

        },config.duration*1000);
    };
}

let toaster = createToaster({
    positionX:'left',
    positionY:'bottom',
    theme:'light',
    duration:3,
});

toaster('This is dummy notification!')

function createToaster2(config){
    return function(str){
        let div = document.createElement('div');
        div.textContent = str;
        div.className = `inline-block ${config.theme === 'dark'?'bg-gray-800 text-white':'bg-gray-100 text-black'} text-white px-6 py-3 rounded shadow-lg\
         pointer-events-none transition-opacity duration-300`

        document.querySelector('.parent').appendChild(div);

        setTimeout(()=>{
            document.querySelector('.parent').removeChild(div);
        },config.duration*1000)
    };
}

let toast = createToaster2({
    positionX:'right',
    positionY:'top',
    theme:'dark',
    duration:3
})

toast('download')
setTimeout(()=>{
    toast('Aja ladle!!')
},2000)

// this keyword

console.log(this)

let abcd = function(){
    console.log(this)
}

abcd()

let obj = {
    name : 'alriyan',
    age : 23,
    sayName : function(){
        console.log(this)
    }
}

obj.sayName()

document.querySelector('h1').addEventListener('click',function(){
    console.log(this.style.color='red');
})


// call

let objj = {
    name:'alriyan',
    age:26
};

function abcd2(a,b,c){
    console.log(this.age,a,b,c)
}

abcd2.call(objj,1,2,3)

//  oops

function CreatePencil(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
        let h1 = document.createElement('h1');
        h1.textContent = text
        h1.style.color = color;
        document.body.append(h1);
    }
}

CreatePencil.prototype.owner = 'alriyan';

let p1 = new CreatePencil('natraj',10,'black','natraj')
let p2 = new CreatePencil('natraj',10,'red','natraj')

// class

class CreatePen{
    constructor(name,company,price,color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    write(text){
        let h2 = document.createElement('h2');
        h2.textContent = text;
        h2.style.color = this.color;
        document.body.appendChild(h2);
    }

    erase (){
        document.body.querySelectorAll('h2').forEach((element) =>{
            if (element.style.color === this.color){
                element.remove();
            }
        });
    }
}

let pen1 = new CreatePen('alriyan','fan',7989,'green');
let pen2 = new CreatePen('fardeen','ufn',798989,'blue');


// inheritance

class User{
    constructor(name,address,username,email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = 'user';
    }
    
    checkRole(){
        return `You are a ${this.role}`;
    }

    write(text){
        let h = document.createElement('h1');
        h.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h);
    }
}

class Admin extends User{
    constructor(name,address,username,email){
        super(name,address,username,email);
        this.role = 'admin'
    }

    remove(){
        document.querySelectorAll('h1').forEach(function(elem){
            elem.remove();
        })
    }
}

let u1 = new User('alriyan','sihali','aalaa','aaaa.com');
let u2 = new User('fardeen','delhi','faaah','faaah.com')
let a1 = new Admin('Noor','hsnpr','noooh','noooh.com')

// prototype inheritance

let coffee = {
    color: 'dark',
    drink: function(){
        console.log('gut gut gut');
    },
};

let desiCoffee = Object.create(coffee);
desiCoffee.taste = 'bitter';

// sync and async

function kuchDerBaadChlega(val){
    setTimeout(
        ()=>{
            console.log(val);
        },
        Math.floor(Math.random()*10)*1000
    );
}

kuchDerBaadChlega(12)


function profileLekarAao(username,cb){
    console.log('fetching all data...')
    setTimeout(()=>{
        console.log(`profile fetched of ${username}`);
        cb({username,_id:1242,age:23})
    },2000);
}

function saarePostLekarAoo(id,cb){
    console.log('Fetching profile posts...');
    setTimeout(()=>{
        cb({_id:id,posts:[1,2,3]});
    },3000)
}

profileLekarAao('alriyan',function(profiledata){
    console.log(profiledata)

    saarePostLekarAoo(profiledata._id,function(posts){
        console.log(posts)
    })
})

// promises

let pr = new Promise(function (res,rej){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10);
        if (rn>5) res('resolved with '+rn);
        else rej('rejected with '+rn);
    },3000);
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})

let pr2 = new Promise(function (res,rej){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10);
        if (rn>5) res('resolved with '+rn);
        else rej('rejected with '+rn);
    },3000);
});

async function temp(){
    try{
        let val = await pr2;
        console.log(val)
    } catch (err){
        console.log(err)
    }
}

temp()