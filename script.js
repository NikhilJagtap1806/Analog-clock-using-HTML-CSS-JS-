let clk=document.getElementsByClassName("clock")
let hr=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

function displaytime(){
    let date=new Date();

    let hrh=date.getHours();
    let minh=date.getMinutes();
    let sech=date.getSeconds();

    let hr_rotation=hrh*30+minh/2;
    let min_rotation=minh*6;
    let sec_rotation=sech*6;


    hr.style.transform=`rotate(${hr_rotation}deg)`;
    min.style.transform=`rotate(${min_rotation}deg)`;
    sec.style.transform=`rotate(${sec_rotation}deg)`;

}
setInterval(displaytime,1000)