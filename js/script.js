// not necessary for animation just desabling click for all anchore tag
const link = document.querySelectorAll("div");
link.forEach((item) => {
    item.onclick = function (e) {
        e.preventDefault();
    };
});

gsap.set("#loader", {
    transformOrigin: "left center",
    scaleX: 0,
});

const TextAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
        ".text-wrap h1, .text-wrap h3",
        {
            "--clip": "100%",
        },
        {
            "--clip": "0%",
            duration: 0.3,
            // duration: 2,
            stagger: 0.08,
            delay: 1,
        }
    ).fromTo(
        ".text-wrap h1, .text-wrap h3",
        {
            x: "-5%",
        },
        {
            x: "0%",
            duration: 1,
            stagger: 0.08,
        },
        "<="
    );

    return tl;
};

barba.init({
    transitions: [
        {
            name: "page-transition",
            leave(data) {
                console.log('leave', data)
                return gsap
                    .timeline()
                    .set("#loader", {
                        transformOrigin: "left center",
                    })
                    .fromTo(
                        "#loader",
                        {
                            scaleX: "0",
                        },
                        {
                            scaleX: "1",
                        }
                    )
            },
            enter(data) {
                console.log('enter', data)
                return gsap
                    .timeline()
                    .set("#loader", {
                        transformOrigin: "right center",
                    })
                    .fromTo(
                        "#loader",
                        {
                            scaleX: "1",
                        },
                        {
                            scaleX: "0",
                        }
                    )
            },
        },
    ],
});
