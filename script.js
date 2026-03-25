//Registrando o GSAP no JS
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

//Animações => Rolagem
ScrollSmoother.create({
    smooth: 1,
    effects: true
});

// Animações Hero
gsap.from(".hero", { // incluindo movimento na eção hero opacity @
    opacity: 0,
    duration: 1
})

gsap.from("picture:nth-child(2)", { // movimento dos personagens para vertical
    y: 60
})

gsap.from("picture:nth-child(1)", { // movimento do monstro para vertical
    y: -60,
    duration: 1
})

// Animações cards

gsap.from (".card", {
    opacity: 0,
    duration:1,
    stagger:.3,
    y:30,
    filter:"blur(20px)",
    scrollTrigger:{
        trigger:".cards",
        markers:true,
        start:"0% 70%"
    }
})