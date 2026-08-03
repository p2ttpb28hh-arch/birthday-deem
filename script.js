const intro = document.getElementById("intro");
const scene = document.querySelector(".scene");
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

intro.addEventListener("click", async () => {

    // إخفاء شاشة البداية
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        scene.style.opacity = "1";
    }, 500);

    // تشغيل الموسيقى
    try {
        music.volume = 0.7;
        await music.play();
    } catch (err) {
        console.log("Music couldn't play:", err);
    }

    // فتح الظرف
    setTimeout(() => {
        envelope.classList.add("open");
    }, 900);

});
