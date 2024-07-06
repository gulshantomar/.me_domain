var t1 = gsap.timeline();

t1
.to("#fs", {
    
    height:0,
    duration:2,
    delay:1,
    ease: Expo.easeInOut
})
.to("#elem", {
    
    height: "100%",
    duration:1.5,
    delay:-2, 
    ease: Expo.easeInOut
})

