// let counters = document.querySelector(".c1 h1 span");
// var num = parseInt(counters.innerText);

// // counters.innerHTML = i;
// var lol = 1;
// var cnt = setInterval( ()=>{
//     counters.innerText = lol;
//     lol++;
//     if(lol == 128){
//         clearInterval(cnt);
//     }   
// } ,10)

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".logo img,h1", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

gsap.from(".main-head h1,.main-head h3",{
     y:250,
     duration:1.5,
     opacity:0
}
)
gsap.from(".btn",{
  scale:0.2,
  opacity:0,
  duration:1,
  delay:2
})

gsap.from("#home .icon",{
   x:150,
   stagger:0.3
})

gsap.from(".about-info h1",{
    y:-100,
    opacity:0,
    scrollTrigger:{
      trigger:"body",
      start:"20%",
      end:"30%"
    }
})
function breakText() {
    var h1 = document.querySelector(".about-info p");
    var h1Text = h1.textContent;
    
    var splitText = h1Text.split(/\s+/);

    var cut = "";
    splitText.forEach(function (elem) {
      cut += `<span>${elem}&nbsp;</span>`;
      })
      h1.innerHTML = cut;
}  

  breakText();

gsap.from("p span",{
  y:70,
  opacity:0,
  duration:0.9,
  stagger:0.1,
  scrollTrigger:{
    trigger:"body",
    start:"15%",
    end:"35%",
    scrub:2
  }
})

gsap.from(".counters",{
  y:200,
  scale:0.2,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"body",
    start:"35%"
  }
})

gsap.from(".service h1",{
  y:-100,
  opacity:0,
  scrollTrigger:{
    trigger:"body",
    start:"50%"
  }
})

gsap.from(".service-info",{
  x:-300,
  y:-300,
  scale:0.2,
  stagger:0.6,
  opacity:0,
  scrub:1,
  duration:1,
  scrollTrigger:{
    trigger:"body",
    start:"60%",
    end:"90%"
  }
})

var mySwiper = new Swiper('.mySwiper', {
  speed: 1000,
  initialSlide: 0,
  autoHeight: false,
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },

  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  // centeredSlides: true,
  slidesOffsetBefore: 0,
  grabCursor: true,
  slidesPerView: 5,
  breakpoints: {
    0 : {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }

})

var swiper = new Swiper(".mySwiperOP", {
  speed:1000,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});