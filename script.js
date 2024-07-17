// var t1 = gsap.timeline();

// t1
// .to("#fs", {
    
//     height:0,
//     duration:2,
//     delay:1,
//     ease: Expo.easeInOut
// })
// .to("#elem", {
    
//     height: "100%",
//     duration:1.5,
//     delay:-2, 
//     ease: Expo.easeInOut
// })
revealToSpan();
function revealToSpan (){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    
    let parent = document.createElement("span")
    let child = document.createElement("span")

    parent.classList.add("parent")
    child.classList.add("child")

    child.innerHTML =elem.innerHTML;
    parent.appendChild(child)

    elem.innerHTML="";
    elem.appendChild(parent);
})
}

let tl = gsap.timeline();
tl
.from(".child span", {
    x: 100,
    // delay:1,
    duration:1.1,
    stagger:.1,
    ease: Expo.easeInOut,
})
.to(".parent .child",{
    y: "-100%",
    delay:-0.1,
    ease: Expo.easeInOut,
    duration:1,

})
.to("#loader", {
    height:0,
    delay:-0.8,
    duration:1.5,
    ease: Circ.easeInOut

})
.to("#green", {
    height:"100%",
    delay:-1.6,
    duration:1.5,
    ease: Circ.easeInOut

})
.to("#elem", {
    height:"100%",
    // top:0,
    delay:-1,
    duration:0.9,
    ease: Circ.easeInOut

})
// .to("#green", {
//     height:"0%",
//     // delay:-0.5,
//     duration:1,
//     ease: Circ.easeInOut

// })

// .to("#green", {
//     height: "100%",
//     top:0,
//         duration:1,
//         delay:-2, 
//         ease: Expo.easeInOut
    
// })
// .to("#green", {
//     height: "-0%",
//         duration:1,
//         delay:-1.5,
//         ease: Expo.easeInOut
    
// })


