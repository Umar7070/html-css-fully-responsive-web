const hamberguer=document.querySelector(".header__hamburger")
const navmenu=document.querySelector(".header__navmenu")
// console.log(navmenu);
hamberguer.addEventListener("click",()=>{
  hamberguer.classList.toggle("active");
  navmenu.classList.toggle("active");
})


document.querySelectorAll(".header__navlink").forEach((n)=>n.addEventListener("click",()=>{
  hamberguer.classList.remove("active");
  navmenu.classList.remove("active");
}))


// /slider images //

let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let slideWidth = document.querySelector(".slider").clientWidth;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function autoSlide() {
    moveSlide(1);
}

let slideInterval = setInterval(autoSlide, 3000);

document.querySelector(".slider").addEventListener("mouseover", () => {
    clearInterval(slideInterval);
});
document.querySelector(".slider").addEventListener("mouseleave", () => {
    slideInterval = setInterval(autoSlide, 3000);
});

window.addEventListener("resize", () => {
    slideWidth = document.querySelector(".slider").clientWidth;
    updateSlidePosition();
});




// portfolio
let list = document.querySelectorAll(".listitemBox");
let itemBox = document.querySelectorAll(".itemBox");


for(let i=0; i<list.length; i++){
    list[i].addEventListener("click",function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hide");

            if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove("hide");
                itemBox[k].classList.add("active");
            }
        }


    })
}