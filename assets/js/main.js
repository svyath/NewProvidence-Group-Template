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



$(function () {
    $('.carusel').slick({
        infnite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplay: 3000,
        draggable: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                  arrows: false,
                  
                  
                  centerMode: false,
                  slidesToShow: 3
                }
              },
            {
                breakpoint: 1000,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '280px',
                  
                  slidesToShow: 1
                }
              },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '180px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]

        
    })
})