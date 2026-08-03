const intro = document.getElementById("intro");
const scene = document.querySelector(".scene");
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

intro.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        scene.style.opacity = "1";

        if (music) {
            music.play().catch(() => {});
        }

        setTimeout(() => {
            envelope.classList.add("open");
        }, 700);

    }, 500);

});
