//Read More & Less Button

const btn1 = document.querySelector("#btn1");
const text1 = document.querySelector(".show-1");

btn1.addEventListener("click", button);
function button() {
  text1.classList.toggle("hide-1");

  btn1.textContent == "Read More"
    ? (btn1.textContent = "Read Less")
    : (btn1.textContent = "Read More");
}

const btn2 = document.querySelector("#btn2");
const text2 = document.querySelector(".show-2");

btn2.addEventListener("click", button2);
function button2() {
  text2.classList.toggle("hide-2");

  btn2.textContent == "Read More"
    ? (btn2.textContent = "Read Less")
    : (btn2.textContent = "Read More");
}

//Date & Time

var date = new Date();

document.getElementById("day").innerHTML = date.getDate();
document.getElementById("month").innerHTML = date.getMonth();
document.getElementById("year").innerHTML = date.getFullYear();

document.getElementById("day2").innerHTML = date.getDate();
document.getElementById("month2").innerHTML = date.getMonth();
document.getElementById("year2").innerHTML = date.getFullYear();

//Blog Panel Activation

var panels=document.querySelectorAll(".panel");

panels.forEach((panel)=>{
  panel.addEventListener("click",()=>{
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass(){
  panels.forEach((panel)=>{
    panel.classList.remove("active");
  });
}