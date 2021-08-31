/* <!-- ======================================= js-1=================================== --> */

function gear1(){
    document.getElementById('anime').style.animation="spin 1s linear infinite";
}
function gear2(){
    document.getElementById('anime').style.animation="spin .5s linear infinite";
}
function gear3(){
    document.getElementById('anime').style.animation="spin .25s linear infinite";
}
function gear4(){
    document.getElementById('anime').style.animation="spin .12s linear infinite";
}
function gear5(){
    document.getElementById('anime').style.animation="spin .05s linear infinite";
}
function defaulT(){
    document.getElementById('anime').style.animation="spin 2s linear infinite";
}

/* <!-- =======================================js-2=================================== --> */

function myfunc(element){
    let currentColor= element.style.backgroundColor;
    if(currentColor=='rgb(146, 127, 127)'){
        element.style.backgroundColor= "yellow";
    }else{
        element.style.backgroundColor="rgb(146, 127, 127)";
    }
}

function btn1(){
    document.getElementById('demo').style.display = "none";
}
function btn2(){
    document.getElementById('demo').style.display = "block";
}

/* <!-- =======================================js-3=================================== --> */

let mouse = document.getElementById('demo2');
mouse.addEventListener('mouseover' , function(){
    document.getElementById('demo2').style.fontSize="2rem";
    document.getElementById('demo2').style.padding="2rem"
})
let para = document.getElementById('demo2');
para.addEventListener('mouseout',function(){
    document.getElementById('demo2').style.fontSize=".5rem";
    document.getElementById('demo2').style.padding= "0";
})

/* <!-- =======================================js-4=================================== --> */

let selected = document.getElementById('skill');

selected.addEventListener('change', function(){
    let selected=document.getElementById('skill').value;
    document.getElementById('demo3').innerHTML=selected;
});

function btn10(){
    document.getElementById('html').style.display="block";
};

/* <!-- =======================================greeting =================================== --> */

let mysettime = setTimeout(function(){
    alert('this is settimeout function , press ok if it work !')
},15000);