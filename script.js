const intro = document.getElementById("intro");
const scene = document.querySelector(".scene");
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

intro.addEventListener("click", async () => {

    intro.style.opacity = "0";

    try {
        music.volume = 0.7;
        await music.play();
    } catch (e) {
        console.log(e);
    }

    setTimeout(() => {

        intro.style.display = "none";
        scene.style.opacity = "1";

        setTimeout(() => {
            envelope.classList.add("open");
        }, 500);

    }, 500);

});
