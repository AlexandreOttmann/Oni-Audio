gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) =>{
    link.addEventListener("click", ()=>{
        gsap.to(links, {color: "#F7375C" });
        // Turn navs blue
        if(document.activeElement === link){
        gsap.to(link, {color: '#385ae0'}) 
        }

        // Want to move the Line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav)
        Flip.from(state,{
            duration: 1.25,
            absolute: true,
            ease: "elastic.out(1,0.5)",
        });
    });
});



// Cards
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
card.addEventListener('click', () => {
    // get State
    const state = Flip.getState(cards);

    // Add the active class to the clicked one and add inactive to the others
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIdx) => {
        otherCard.classList.remove('active');
        otherCard.classList.remove('is-inactive');
        if(!isCardActive && index !== otherIdx) 
        otherCard.classList.add("is-inactive");
    });

    if(!isCardActive) card.classList.add("active");


    Flip.from(state, {
        duration: 1,
        ease: "expo.out",
        absolute: true,
    })
})
});

// =====Speaker button======

let video = document.getElementById("background-video");
let muteButton = document.getElementById("mute-button");

muteButton.addEventListener('click', (function(){
    // video.muted = !video.muted;
    let initialText = "UNMUTE"
    if (video.muted == true){
        muteButton.textContent ="MUTE";
        video.muted = !video.muted;
    }
    else {
        muteButton.textContent = initialText;
        video.muted = !video.muted;
    }
    }))



// ======== CARD HOVERING EFFECT

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }



//   SCROLLING HORIZONTAL

var windowWidth = window.innerWidth;

var horLength = document.querySelector(".element-wrapper").scrollWidth;
var horLength2 = document.querySelector(".element-wrapper2").scrollWidth;

var distFromTop = document.querySelector(".horizontal-section").offsetTop;
var distFromTop2 = document.querySelector(".horizontal-section2").offsetTop;

var scrollDistance = distFromTop + horLength - windowWidth;
var scrollDistance2 = distFromTop2 + horLength2 - windowWidth;

document.querySelector(".horizontal-section").style.height = horLength + "px";

document.querySelector(".horizontal-section2").style.height = horLength2 + "px";

window.onscroll = function(){
  var scrollTop = window.pageYOffset;
  
  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
  }
  
  if (scrollTop >= distFromTop2 && scrollTop <= scrollDistance2) {
    document.querySelector(".element-wrapper2").style.transform = "translateX(-"+(scrollTop - distFromTop2)+"px)";
  }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}