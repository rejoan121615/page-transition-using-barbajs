// not necessary for animation just desabling click for all anchore tag
const link = document.querySelectorAll("div");
link.forEach((item) => {
    item.onclick = function (e) {
        e.preventDefault();
    };
});

// transform-origin: left center;
// transform: scaleX(0);

gsap.set("#loader", {
    transformOrigin: "left center",
    scaleX: 0,
});

// return promise on complete
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

// page animation
function PageTransition() {
    let tl = gsap.timeline();
    tl.set("#loader", {
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
        );
    return tl;
}

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
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();
                PageTransition();
                await delay(500);
                done();
            },
            async enter() {
                TextAnimation().clear();
                TextAnimation();
            },
            async once() {
                TextAnimation().clear();
                TextAnimation();
            },
        },
    ],
});
