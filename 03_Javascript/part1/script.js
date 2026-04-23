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

let arr = [1,2,3,4,5];

arr.push(28) // add in last
arr.unshift(0) // add in first
arr.pop(); // last se remove
arr.shift() // start se remove
arr.splice(2,1) // remove from index to how many
arr.splice(1,0,'one','two') // no remove but add one,two
arr.slice(0,3) // return new array from to given index -1
arr.reverse() // reverse the arr
arr.sort(function(a,b){
    return a-b;  // return the asc sorted array if b- a return desc sorted arr
});

arr.map(function(val){
    return 12;  // return new array [12,12,12,12,12]
});

arr.filter(function(val){
    if(val>3){
        return true;   // array = [4,5]
    }
});

arr.reduce(function(accumulator,val){
    return accumulator+val;    //reutn sum
},0);

arr.find(function(val){
    return val===1;
});

arr.some(function(val){
    return val>4;   // return true
})

let [a,b,,c]=arr; // a=1,b=2,c=4

arr2 = [...arr]; // arr ka copy [...a,...b] combine two arr