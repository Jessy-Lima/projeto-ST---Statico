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

gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".cards",
        start: "0% 80%",
        end: "100% 70%",
        scrub: true,
    },
});

gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    duration: 1,
    filter: "blur(10px)",
    stagger: .05,

    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        markers: false,
        start: "0% 80%",
        end: "100% 50%",
        scrub: true,
    }
})



//Selecionando todos os elementos da pagina que tem a classe .textoSplit

const grupoTextoSplit = document.querySelectorAll(".textoSplit")
// Anima cada elemento desse grupamento usando o forEach
grupoTextoSplit.forEach(textoUnicoSplit => {

    //Letras Animadas
    const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words,chars",
        mask: "lines"
    })

    gsap.from(split.chars, {
        y: 40,
        stagger: 0.1,
        duration: 0.2,
        opacity: 0,

        scrollTrigger: {
            trigger: textoUnicoSplit,
            markers: false,
            start: "0% 80%",
            end: "100% 50%",
            scrub: true
        }
    });
});

const tl = gsap.timeline({
    onComplete() {
        gsap.to("#preloader", {
            opacity: 0
        })
    }
})

tl.to("#preloader path", {
    duration: 2,
    strokeDashoffset: 0
})

tl.to("#preloader path", {
    fill: rgb(168, 19, 19),
    strokeDashoffset: 0
})