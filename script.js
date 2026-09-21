const button = document.getElementById("magicButton");
const secretMessage = document.getElementById("secretMessage");

button.addEventListener("click", () => {

    secretMessage.classList.toggle("show");

    if (secretMessage.classList.contains("show")) {

        button.innerHTML = "💗 Cerrar";

        createHearts();

    } else {

        button.innerHTML = "✨ Toca aquí ✨";

    }

});


function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = Math.random() > .5 ? "💗" : "🌸";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "200";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration =
            3 + Math.random() * 3;

        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)
                         rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    duration * 1000,

                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}