function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadingAnimation (){
    var t1 = gsap.timeline()
    t1.from(".line h1, .line h2, #line1-part1,.line h4", {
        y: 150,
        stagger: 0.25,
        duration: 0.5,
        delay: 0.1,
        onStart: function () {
    
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0
    
            setInterval(() => {
                if (grow <= 100) {
    
                    h5timer.innerHTML = grow++
                }
    
            }, 30); 
        }
    })
    // t1.from("#line1-part1", {
    //     // opacity: 0,
    //     // delay:-0.01,
    //     // onStart: function () {
    
    //     //     var h5timer = document.querySelector("#line1-part1 h5");
    //     //     var grow = 0
    
    //     //     setInterval(() => {
    //     //         if (grow <= 100) {
    
    //     //             h5timer.innerHTML = grow++
    //     //         }
    
    //     //     }, 25); 
    //     // }
    
    // })
    t1.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 1.5,
    })
    t1.from("#page1",{
        delay:0.2,
        y:1600,
        ease:Power4,
        opacity:0
    })
    t1.to("#loader",{
        display:"none"  
    })
    t1.from(".center h1,#hero3 h2,#hero3 h3",{
        delay:-0.3,
        y:120,
        stagger:0.1
    })

}

function cursorAnimation (){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
            
            
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4,#nav>h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
      });

      const videoContainer = document.querySelector("#video-con");
    const video = document.querySelector("#video-con video");
    const btnElement = document.querySelector("#video-con #btn");
    const cursorElement = document.querySelector("#crsr");

    let isVideoPlaying = false;

    videoContainer.addEventListener("mouseenter", function () {
        this.addEventListener("mousemove", function (e) {
            gsap.to(cursorElement, {
                opacity: 0,
            });
            gsap.to(btnElement, {
                left: e.x -500,
                top: e.y-150,
            });
        });
    });

    video.addEventListener("mouseleave", function () {
        gsap.to(cursorElement, {
            opacity: 1,
        });
        gsap.to(btnElement, {
            top: "-10%",
            left: "80%",
        });

    });

    videoContainer.addEventListener("click", function () {
        if (isVideoPlaying) {
            video.pause();
            gsap.to(video, { opacity: 0 });
            btnElement.innerHTML = `<i class="ri-play-fill"></i>`;
            gsap.to(btnElement, { scale: 1 });
        } else {
            video.play();
            gsap.to(video, { opacity: 1 });
            btnElement.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            gsap.to(btnElement, { scale: 0.5 });
        }
        isVideoPlaying = !isVideoPlaying;
    });

    

}
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
        
    })
}
function flag(){
    document.addEventListener("mousemove",function(e){
        gsap.to("#flag",{
            x:e.x,
            y:e.y
        
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:0.6,
          
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0,
        })
    })
}

loadingAnimation()
locomotiveAnimation()
flag()
cursorAnimation()
sheryAnimation()




