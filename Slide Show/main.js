let slideElements=document.querySelectorAll(".slideshowElement")
console.log(slideElements.length)


count=0;
setInterval(()=>{
  count++;
  
let currentElement=document.querySelector(".current");
  currentElement.classList.remove("current")
  
  
  if(count>=slideElements.length){
    count=0;
    slideElements[count].classList.add("current")
  }else{
  
currentElement.nextElementSibling.classList.add('current');
  }
  
},1500)