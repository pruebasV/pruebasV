
// Barra de navegación
    let mainUbication = window.scrollY; 
    window.addEventListener("scroll", () => {
        let currentDisplacement = window.scrollY; 
        if (window.screen.width >= 770) { 
            if (mainUbication > currentDisplacement) {
                document.querySelector(".navigation").style.top = "0px";
                document.querySelector(".sub-menu").style.top = "50px";
            } else {
                document.querySelector(".navigation").style.top = "-100px";
                document.querySelector(".sub-menu").style.top = "-1000px";
            }
        }
        mainUbication = currentDisplacement;
    })
// Hamburger menu and his effects 


    const hamburguer = document.querySelector(".hamburguer i");
    hamburguer.addEventListener("click", ()=> {
        const navigation = document.querySelector(".navigation");
        navigation.style.transform = "translateX(-500px)";
        navigation.classList.toggle("extend");
        if (navigation.classList[1] === "extend") {
            navigation.style.transform = "translateX(0)";
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
ScrollReveal().reveal("header", {delay: 250});
ScrollReveal().reveal(".container-nosotros", {delay: 250});
ScrollReveal().reveal(".transition-one", {delay: 150})
ScrollReveal().reveal(".creencias", {delay: 350})
ScrollReveal().reveal(".transition-two", {delay: 250})
ScrollReveal().reveal(".actividades", {delay: 250})
ScrollReveal().reveal(".contactos", {delay: 250})



