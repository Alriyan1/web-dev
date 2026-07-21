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