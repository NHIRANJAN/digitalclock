const hour=document.getElementById("hour")
const min=document.getElementById("minutes")
const sec=document.getElementById("seconds")
const am1=document.getElementById("ampm")
// let val=Number(prompt("Enter a number"))
function Clock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am="AM"
    if(h>12){
        h=h-12;
        am="PM";
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    // if(s==val){
    //     alert("Arrived")
    //     console.log("hi")
    // }
    
    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    am1.innerText=am;
    console.log(h)
setTimeout(()=>{
    Clock()
},1000)
}
Clock()
