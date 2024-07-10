const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
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

function loaderAnimation(){

    var tl = gsap.timeline()
    gsap.from(".line h1 , .line h2",{
        y:150,
        stagger:0.2,
        duration:0.6,
        delay:0.5
    })
    
    tl.from("#line1-part1",{
        opacity:0,
        duration:1,
    })
    
    tl.from("#line1-part1 h5,#line1-part1 h6 , .line h2",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5")
    
            var count = 0;
            setInterval( function() {
                if(count<100){
                    h5timer.innerHTML = count++;
                }
                else{
                    h5timer.innerHTML = count;
                }
            }, 25);
          },
        });
    
    
    
    tl.to("#loader",{
        duration:2,
        delay:2.5,
        opacity:0,
    })
    
    tl.from("#page1",{
        delay:0.2,
        y:1600,
        duration:0.5,
        opacity:0,
        ease:Power4,
    })
    
    tl.to("#loader",{
        display:"none",
    })
    
    tl.from("#nav",{
        opacity:0,
    })

    tl.from(".page1center h1,.page1center h2",{
        y:150,
        stagger:0.2,
    })

    tl.from("#page1c , #page2",{
        opacity:0
    },"-=1.2")
    
}


function cursorAnimation(){
    document.addEventListener("mousemove",function(move){
        gsap.to("#crsr",{
            left:move.x,
            top:move.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4", {
        ease: "cubic-bezier( -500, -601, -408, -640)",
        duration:1,
      });

      var videocontainer = document.querySelector("#video-container")
      var video = document.querySelector("#video-container video")
      var videocursor = document.querySelector("#video-cursor")


    videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener("mousemove",function(move){
            gsap.to("#crsr",{
                opacity:"0",
            })
            
            gsap.to("#video-cursor",{
                left:move.x - 500,
                top:move.y - 300
            })
        })
    })

    videocontainer.addEventListener("mouseleave",function(){
            gsap.to("#crsr",{
                opacity:"1",
            })
            
            gsap.to("#video-cursor",{
                top: "-10%",
                left: "69%",
            })
        })    


        var flag = 0
        video.addEventListener("click",function(){
            if(flag == 0){
                video.play()
            video.style.opacity="1"

            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-line"></i>`
            gsap.to("#video-cursor",{
                scale:0.5
            })
            flag = 1
            }
            else{
                video.pause()
            video.style.opacity="0"

            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
            gsap.to("#video-cursor",{
                scale:1
            })
            flag = 0
            }
        })

        var flag = 0
        videocursor.addEventListener("click",function(){
            if(flag == 0){
                video.play()
            video.style.opacity="1"

            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-line"></i>`
            gsap.to("#video-cursor",{
                scale:0.5
            })
            flag = 1
            }
            else{
                video.pause()
            video.style.opacity="0"

            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
            gsap.to("#video-cursor",{
                scale:1
            })
            flag = 0
            }
        })
}

function sheryAnimation(){
    Shery.imageEffect(".img-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.32,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey:true
    })
}


locomotiveAnimation();
loaderAnimation();
cursorAnimation();
sheryAnimation();


document.addEventListener("mousemove",function(dets){
  gsap.to("#flag",{
    x:dets.x,
    y:dets.y
  })
})

document.querySelector("#underline").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:"1"
    })
})


document.querySelector("#underline").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:"0"
    })
})


var footer = document.querySelector("#footer h1")
footer.addEventListener("mouseenter",function(){
    gsap.to("#footer h1",{
        onStart:function(){
            $('h1').textillate({ in: { effect: 'fadeIn' },outEffects: [ 'hinge' ], });
        }
    })
})
