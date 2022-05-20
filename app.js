offBulb = document.getElementById("of");
onBulb = document.getElementById("on");

onBulb.style.display = "none"

offBulb.addEventListener("click",()=>{
    offBulb.style.display = "none"
    onBulb.style.display = "block"
})

onBulb.addEventListener("click",()=>{
    offBulb.style.display = "block"
    onBulb.style.display = "none"
})

