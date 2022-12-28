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
       
    //  onComplete
        


    })
})
});

// =====Speaker button======

let video = document.getElementById("background-video");
let muteButton = document.getElementById("mute-button");

muteButton.addEventListener('click', (function(){
    // video.muted = !video.muted;
    let initialText = "mute"
    if (video.muted == true){
        muteButton.textContent ="UNMUTE";
        video.muted = !video.muted;
    }
    else {
        muteButton.textContent = initialText;
        video.muted = !video.muted;
    }
    }))



