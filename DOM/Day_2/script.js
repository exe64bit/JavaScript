const btn = document.querySelector("button")
const bulb = document.querySelector(".bulb")



btn.addEventListener("click", ()=>{
    bulb.classList.toggle("lightBulb")
    if(btn.textContent === "ON"){
        btn.textContent = "OFF"
    }else{
        btn.textContent = "ON"
    }
})