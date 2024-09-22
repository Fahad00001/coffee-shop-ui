gsap.to(".box",{
    x:200,
    y:200,
    duration:1,
    backgroundColor:"red"
})
 let tl=gsap.timeline()
tl.from(".front",{
    y:1000,
    duration:1
})
tl.from("#coffee",{
    y:800,
    duration:1,
    scale:2
})
tl.from(" .front h1",{
    y:1000,
    duration:1
})
tl.from("#c1",{
    y:800,
    duration:1,
    scale:2

})
tl.from("#c2",{
    y:800,
    duration:1,
    scale:2

})
tl.from("#c3",{
    y:800,
    duration:1,
    scale:2

})
tl.from("#c4",{
    y:800,
    duration:1,
    scale:2

})
tl.from("#c5",{
    y:800,
    duration:1,
    scale:2

})
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        markers:true,
        start:"0% 90%",
        end:"50% 50%",
        

    } 
})

  
tl2.to("#coffee",{
   left:105,
   top:680,
   scale:0.8

},"hi")
tl2.to("#c1",{

    left:253,
    top:754,
    scale:0.8,
    rotate:142
},"hi")
let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        markers:true,
        start:"0% 90%",
        end:"50% 50%",
        

    }
})
tl3.to("#coffee",{
    top:1300,
    left:556,
    scale:0.9,
    duration:1
 },"hi")
 tl3.to("#c1",{

    left:460,
    top:1300,
    scale:0.8,
    rotate:45,
    duration:1
    
},"hi")

tl3.from("#coco",{
    x:-300,
    duration:1
},"hi")
tl3.from("#fizz",{
    x:300,
    duration:1
},"hi")
tl3.from("#bean1",{
    x:-300,
    duration:1,
    rotate:200

},"hi")
tl3.from("#bean2",{
    x:300,
    duration:1,
    rotate:200
},"hi")

let tl4=gsap.timeline({
    scrollTrigger :{
        trigger:"#contact",
        scroller:"body",
        scrub:true,
        markers:false,
        start:"0% 90%",
        end:"50% 50%"

    }
})
tl4.to("#coffee",{
    top:2000,
    left:900,
    duration:1,
    zIndex:3
    // scale:0.9
 },"hi")
 tl4.to("#c1",{

    left:1000,
    top:2100,
   duration:1,
    rotate:239,
    zIndex:2
    
},"hi")
tl4.to("#coco",{

    left:560,
    top:600,
   duration:1,
    rotate:-23,
    // zIndex:2
    duration:1
    
},"hi")
tl4.to("#fizz",{

    left:200,
    top:600,
   duration:1,
    rotate:+23,
    // zIndex:2
    duration:1
    
},"hi")
  

