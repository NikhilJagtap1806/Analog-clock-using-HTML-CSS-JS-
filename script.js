let clk=document.getElementsByClassName("clock")
let hr=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

function displaytime(){
    let date=new Date();

    let hrh=date.getHours();
    let minh=date.getMinutes();
    let sech=date.getSeconds();

}
setInterval(displaytime,1000)