let count = 0;

const countelement = document.getElementById("count")
const incbtn = document.getElementById("inc")
const decbtn = document.getElementById("dec")
const reset = document.getElementById("resetbtn")

incbtn.addEventListener("click", ()=>{
    count++;
    countelement.innerText = count;
})
decbtn.addEventListener("click", ()=>{
    count--;
    countelement.innerText = count;
})
reset.addEventListener("click", ()=>{
    count = 0;
    countelement.innerText = count;
})
