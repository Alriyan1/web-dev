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

