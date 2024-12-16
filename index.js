var d=document.querySelectorAll(".drum");
var aud=document.querySelectorAll(".aud");
function animation(element) {
    element.classList.add("pressed");
    setTimeout(function() {
        element.classList.remove("pressed");
    }, 100);
}

function add1(){
    aud[0].play();
    animation(d[0]);
}
function add2(){
    aud[1].play();

    animation(d[1]);
}
function add3(){
    aud[2].play();
    animation(d[2]);
}
function add4(){
    aud[3].play();
    animation(d[3]);
}
function add5(){
    aud[4].play();
    animation(d[4]);
}
function add6(){
    aud[5].play();
    animation(d[5]);
}
function add7(){
    aud[6].play();
    animation(d[6]);
}

d[0].addEventListener("click",add1);
d[1].addEventListener("click",add2);
d[2].addEventListener("click",add3);
d[3].addEventListener("click",add4);
d[4].addEventListener("click",add5);
d[5].addEventListener("click",add6);
d[6].addEventListener("click",add7);
document.addEventListener("keypress",function(event){
    if(event.key==="w"){
        add1();
    }
    else if(event.key==="a"){
        add2();
    }
    else if(event.key==="s"){
        add3();
    }
    else if(event.key==="d"){
        add4();
    }
    else if(event.key==="j"){
        add5();
    }
    else if(event.key==="k"){
        add6();
    }
    else if(event.key==="l"){
        add7();
    }
});
