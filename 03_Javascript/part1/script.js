u1 = Symbol('uid')
u2 = Symbol('uid')

// u1 === u2 give false 

// typeof give datatype 

// '5' + 1 + 5 = '515'

// 5 + 1 + '5' = '65'

// "5" - 1 = 4
// 5 - "1" = 4

switch(3){
    case 1:
        console.log('1')
        break;
    case 2:
        console.log('2')
        break
    default:
        console.log('default')
}

function temp(){
    console.log('kkkkkkkkk')
}

let me = function(){
    console.log('uuuuuuuu')
} 

let fn = ()=>{
    console.log('iiiiiiii');
}

function ann(a=0,b=1){
    console.log(a+b);
}

ann()

function abcd(...val){
    console.log(val);
}


abcd(1,2,3,4,5,6)

(function(){
    console.log('jjjjjjj');
})();


function getScore(...score){
    let total = 0;
    score.forEach(function (val){
        total += val;
    });
    return total;
}


let e = getScore(1,2,3,4,5,6);