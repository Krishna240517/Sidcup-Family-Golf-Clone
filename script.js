
const blurCursor = document.querySelector("#cursor-blur");
const cursor = document.querySelector("#cursor");
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let blurX = 0, blurY = 0;

const cursorDelay = 0.8 ;
const blurDelay = 0.08;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
let isHovering = false;
function animateCursors() {
    cursorX += (mouseX - cursorX) * cursorDelay;
    cursorY += (mouseY - cursorY) * cursorDelay;

    const scale = isHovering ? 2 : 1;

    cursor.style.transform = `translate(${cursorX - 12.5}px, ${cursorY - 12.5}px) scale(${scale})`;

    blurX += (mouseX - blurX) * blurDelay;
    blurY += (mouseY - blurY) * blurDelay;
    blurCursor.style.transform = `translate(${blurX - 150}px, ${blurY - 150}px)`;

    requestAnimationFrame(animateCursors);
}
animateCursors();

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
});


const h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        isHovering = true;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor="transparent";
    });
    elem.addEventListener("mouseleave", function () {
        isHovering = false;
        cursor.style.border = "none";
        cursor.style.backgroundColor = "#95C11E";
    });
});

gsap.from("#about-us img, #about-us-info",{
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start:"top 60%",
        end: "top 58%",
        scrub: 3,   
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub: 4,
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub: 4,
    }
})

gsap.from("#page5 h1",{
    y:70,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#page5 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 79%",
        scrub: 4,
    }
})