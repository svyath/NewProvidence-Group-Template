function buy() {
    alert("Thnx for supporting us!")
}

function activeIndividualPlans() {
    let Ind = document.querySelector("#individual")
    let Com = document.querySelector("#company")
    if(Ind.classList.length === 0){
        Com.classList.remove("active-btn")
        Ind.classList.add("active-btn")
        document.querySelector(".Starter").style.display="flex";
        document.querySelector(".Pro").style.display="flex";
        document.querySelector(".Starter-Company").style.display="none";
        document.querySelector(".Pro-Company").style.display="none";
    }
}

function activeCompanyPlans() {
    let Ind = document.querySelector("#individual")
    let Com = document.querySelector("#company")
    if(Com.classList.length === 0){
        Com.classList.add("active-btn")
        Ind.classList.remove("active-btn")
        document.querySelector(".Starter").style.display="none";
        document.querySelector(".Pro").style.display="none";
        document.querySelector(".Starter-Company").style.display="flex";
        document.querySelector(".Pro-Company").style.display="flex";
    }
}


let counter = 0;
// let op = ["0", '420px', "840px", "420px","0",'-410px', "-840px", "-410px"];


window.addEventListener("load", _=(event)=> {
    const windowSize = window.innerWidth
    console.log(windowSize)
    if(windowSize >= 350 && windowSize<1200){
        setInterval(_=>{
            let op=["0", "-360px", "-780px", "-1190px", "-1600px", "-1190px", "-780px","-360px"]
            document.documentElement.style.setProperty("--slider", op[counter]);
            counter++;
            if(counter > op.length-1)counter =0;
        }, 3000);
    }else if(windowSize >= 1200){
        setInterval(_=>{
            let op=["0", "130%", "340%", "130%", "0", "-130%", "-340%", "-130%"]
            document.documentElement.style.setProperty("--slider", op[counter]);
            counter++;
            if(counter > op.length-1)counter =0;
        }, 3000);
    }
})


