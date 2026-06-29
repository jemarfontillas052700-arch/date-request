// Get page elements
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finishBtn = document.getElementById("finishBtn");

// Make the NO button run away
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveButton();
});

function moveButton() {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;

    noBtn.style.position = "relative";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Go to page 2
yesBtn.addEventListener("click", () => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
});

// Finish date request
finishBtn.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const food = document.getElementById("food").value;

    if (!date || !time || !food) {
        alert("Please choose a date, time, and food first! 💕");
        return;
    }

    document.getElementById("resultDate").textContent = date;
    document.getElementById("resultTime").textContent = time;
    document.getElementById("resultFood").textContent = food;

    page2.classList.add("hidden");
    page3.classList.remove("hidden");

    // Confetti (requires canvas-confetti)
    if (typeof confetti === "function") {
        confetti({
            particleCount: 180,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
});
