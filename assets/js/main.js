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
