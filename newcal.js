let boxes=document.querySelectorAll('.box');
let display=document.querySelector('.display');
boxes.forEach((box)=>{
box.addEventListener('click',()=>{
    text=box.innerText;
    cal(text);

});
});
const cal=(text)=>{
    if(text==='AC'){
        display.innerText=" ";
    }
    else if(text==='DE'){
    display.innerText=display.innerText.toString().slice(0,-1);
    }
    else if(text==='='){
        display.innerText=eval(display.innerText);
    }
    else{
    display.innerText+=text;}
}
