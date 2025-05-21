var btn =document.querySelector("button");
var bulb = document.querySelector("div");
var flag = 1;
document.addEventListener("click" ,function(){
  if(flag === 0 ){
      bulb.style.backgroundColor = "red";
      flag =1;

  }else{
    bulb.style.backgroundColor = "white";
    flag =0; 
  }
 })