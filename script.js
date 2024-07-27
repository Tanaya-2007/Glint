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
// gsap.from(".logo img",{
//     y:-100,
//     duration:2
// })

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    width:"1%",
    height:"1%",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".logo img" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
const card = document.querySelector(".logo img");

card.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  
  gsap.to(card, {
   
  });
});
card.addEventListener("mouseleave", (e) => {
  gsap.to(card, {
    x: 0,
    y: 0,
  });
});

