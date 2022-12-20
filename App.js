
showLink = () => {
    let navigationLink = document.getElementsByClassName('target-nav')[0];

    
    if (navigationLink.classList.contains("d-none-1"))
    {
        navigationLink.classList.remove("d-none-1");
        navigationLink.classList.add("nav-link-1");

       
        t1.from(".first", {
            opacity: 0,
            x:40
        })
            .from(".second", {
                opacity: 0,
                x:40
            })
            .from(".thi", {
                opacity: 0,
                x:40
            })
            .from(".four", {
                opacity: 0,
                x:40
            })
            .from(".fifth", {
                opacity: 0,
                x:40
            })
            .from(".six", {
                opacity: 0,
                x:40
            })
        
            gsap.to(".resize-btn", {
                x:-40
            })
        
    }
    else {
        gsap.to(".resize-btn", {
            x:20
        })
        navigationLink.classList.add("d-none-1");
        navigationLink.classList.remove("nav-link-1");
    }
}



let t1 = gsap.timeline()
t1.from(".banner-wrapper p",1, {
    opacity: 0,
    y:60,
})
.from("nav", {
    opacity: 0,
    y:20,
})
.from(".first-container",2, {
    opacity: 0,
    x: -40,
})
    .from(".second-container", {
        opacity: 0,
        scale:1.3
})