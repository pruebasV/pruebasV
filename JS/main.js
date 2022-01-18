// Hamburger menu and his effects 
    const hamburguer = document.querySelector(".hamburguer i");
    hamburguer.addEventListener("click", ()=> {
        hamburguer.classList.add("actived")
        const navigation = document.querySelector(".navigation");
        const slider = document.querySelector(".container-slider");
        const ministries = document.querySelector(".ministries-container");
        const showcase = document.querySelector(".container-showcase");
        const contentOfMain = document.querySelector(".main-content");
        navigation.style.transition = "transform .5s ease"
        navigation.style.transform = "translateX(-500px)";
        navigation.classList.toggle("extend");
        if (navigation.classList[1] === "extend") {
            navigation.style.transform = "translateX(0)";
            if (window.location.pathname == "/pruebasV/ministerios.html" || window.location.pathname == "/ministerios.html") {
                slider.addEventListener("click", ()=> {
                navigation.style.transform = "translateX(-500px)";
                navigation.classList.toggle("extend");
                })
                ministries.addEventListener("click", ()=> {
                    navigation.style.transform = "translateX(-500px)";
                    navigation.classList.toggle("extend");
                    })
            }
            if (window.location.pathname == "/index.html" || window.location.pathname == "/" || window.location.pathname == "/pruebasV/") {
                showcase.addEventListener("click", ()=> {
                    navigation.style.transform = "translateX(-500px)";
                    navigation.classList.toggle("extend");
                    })
                contentOfMain.addEventListener("click", ()=> {
                    navigation.style.transform = "translateX(-500px)";
                    navigation.classList.toggle("extend");
                    })
            }
        }     
    });

    const firstLink = document.querySelector(".uno");
    const secondLink = document.querySelector(".dos");
    const thirthLink = document.querySelector(".tres");
    const fourthLink = document.querySelector(".cuatro");
    const fifthLink = document.querySelector(".cinco");

    const linksFunctions = (link)=> {
        link.addEventListener("click", ()=> {
            if (window.screen.width <= 770){
            const navigation = document.querySelector(".navigation");
            navigation.style.transform = "translateX(-500px)"; 
            navigation.classList.toggle("extend");
            console.clear() 
        }
        })
    }

    linksFunctions(firstLink)
    linksFunctions(secondLink) 
    linksFunctions(thirthLink) 
    linksFunctions(fourthLink)    
    linksFunctions(fifthLink)    

// Scroll Reveal
if (window.location.pathname == "/index.html" || window.location.pathname == "/" || window.location.pathname == "/pruebasV") {
    ScrollReveal().reveal(".container-showcase", {delay: 250});
    ScrollReveal().reveal(".container-nosotros", {delay: 250});
    ScrollReveal().reveal(".transition-one", {delay: 150})
    ScrollReveal().reveal(".creencias", {delay: 350})
    ScrollReveal().reveal(".transition-two", {delay: 250})
    ScrollReveal().reveal(".actividades", {delay: 250})
    ScrollReveal().reveal(".contactos", {delay: 250})
} else {
    ScrollReveal().reveal(".container-slider", {delay: 250})
    ScrollReveal().reveal(".ministries-title", {delay: 251})
    ScrollReveal().reveal(".ministries-container", {delay: 250})
}
 


// Slider
if (window.location.pathname == "/pruebasV/ministerios.html" || window.location.pathname == "/ministerios.html") {
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slide3 = document.getElementById("slide3");
    const slide4 = document.getElementById("slide4");
    const slide5 = document.getElementById("slide5");
    const slide6 = document.getElementById("slide6");



    setTimeout(()=> {
        slide2.style.opacity = 1;
        slide1.style.opacity = 0;
    }, 5000)
    setTimeout(()=> {
        slide3.style.opacity = 1;
        slide2.style.opacity = 0;
    }, 10000)
    setTimeout(()=> {
        slide4.style.opacity = 1;
        slide3.style.opacity = 0;
    }, 15000)
    setTimeout(()=>{
        slide5.style.opacity = 1
        slide4.style.opacity = 0;
    }, 20000)
    setTimeout(()=>{
        slide6.style.opacity = 1
        slide5.style.opacity = 0;
    }, 25000)
    setTimeout(()=>{
        slide1.style.opacity = 1
        slide6.style.opacity = 0;
    }, 30000)


    setInterval(()=> {
        setTimeout(()=> {
            slide2.style.opacity = 1;
            slide1.style.opacity = 0;
        }, 5000)
        setTimeout(()=> {
            slide3.style.opacity = 1;
            slide2.style.opacity = 0;
        }, 10000)
        setTimeout(()=> {
            slide4.style.opacity = 1;
            slide3.style.opacity = 0;
        }, 15000)
        setTimeout(()=>{
            slide5.style.opacity = 1
            slide4.style.opacity = 0;
        }, 20000)
        setTimeout(()=>{
            slide6.style.opacity = 1
            slide5.style.opacity = 0;
        }, 25000)
        setTimeout(()=>{
            slide1.style.opacity = 1
            slide6.style.opacity = 0;
        }, 30000)
    }, 30000)
}
