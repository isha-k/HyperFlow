console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    gsap
        .timeline ({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: '+=250%',
                pin: true,
                scrub: true,
            },
        })
        .to(".overlay-text", {
            transform: "translate(-50%, -50%) scale(2)",
            transformOrigin: 'center center',
            ease: "power1.inOut",
        },
        '<'
    );
});