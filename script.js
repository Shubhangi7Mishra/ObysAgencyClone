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
        delay:3,
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
        display:"none,"
    })
    
}

loaderAnimation();