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
    duration: 1,
    stagger: .3,
    y: 30,
    filter: "blur(20px)",
    scrollTrigger: {
        trigger: ".cards",
        markers: true,
        start: "0% 70%"
    }
})

gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    duration: 1,
    filter: "blur(10px)",
    stagger: .03,

    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        markers: false,
        start: "0% 80%",
        end: "100% 50%",
        scrub: true
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
        stagger: .1,
        duration: .2,
        opacity: 0,

        scrollTrigger:{
            trigger: textoUnicoSplit,
            markers:false,
            start: "0% 80%",
            end:"100% 50%",
            scrub: true
        }
    })
})