// iife

let Bank = (function(){
    let bankbalance = 12000;

    function checkbalance(){
        console.log(bankbalance);
    }

    function setBalance(val){
        bankbalance=val;
    }

    function withdraw(val){
        if (val<=bankbalance){
            bankbalance -= val;
            console.log(bankbalance)
        } else {
            console.error('Not Enough Balance')
        }
    }

    return {
        checkbalance,
        setBalance,
        withdraw
    }

    /*
    return {
        check: checkbalance,
        set: setBalance,
        draw: withdrow
    }

    Bank.draw(343)
    
    */
})();

Bank.withdraw(345)

// factory function methods

function createProduct(name,price){
    let stock = 10;
    return {
        name,
        price,
        checkstock(){
            console.log(stock);
        },
        buy(qty){
            if (qty<=stock){
                console.log(`${qty} pieces booked - ${stock} pieces left.`);
            }else{
                console.error(`we only have ${stock} left`)
            }
        },
        refill(qty){
            stock+=qty
            console.log(`refilled the stock - ${stock} now`)
        }
    }
}

let mobile = createProduct('allu',100000)

mobile.checkstock()
mobile.refill(453)

// observer pattern

class YouTubeChannel{
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`you have subscribe the channel.`)
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub!==user);
        user.update(`you have unsubscribe the channel.`)
    }

    notify(message){
        this.subscribers.forEach((sub) => sub.update(message))
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name}, ${data}`)
    }
}

let edu = new YouTubeChannel();
let u1 = new User('pehla');
let u2 = new User('dusra');

edu.subscribe(u1)
edu.subscribe(u2)
edu.notify('dosti krlo')


// debouncing

let input = document.querySelector('input')

function debounce(fnc,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        }, delay);
    }
}

input.addEventListener('input',debounce(function(){
    console.log('hee')
},1000))