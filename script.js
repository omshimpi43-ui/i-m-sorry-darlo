const modal = document.getElementById("modal");

function openModal(type) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");

if (type === "memories") {
    modal.classList.add("fullscreen");

    body.innerHTML = `
        <h3>Our Memories</h3>

        <p>
            The small conversations.  
            The laughter.  
            The moments that felt safe and real.
        </p>

        <div class="memory-gallery">
            <img src="img1.jpg.jpeg">
            <img src="img2.jpg.jpeg">
            <img src="img3.jpg.jpeg">
            <img src="img4.jpg.jpeg">
            <img src="img5.jpg.jpeg">
            <img src="img6.jpg.jpeg">
            <img src="img7.jpg.jpeg">
            <img src="img8.jpg.jpeg">
            <img src="img9.jpg.jpeg">
            <img src="img10.jpg.jpeg">
            <img src="img11.jpg.jpeg">
            <img src="img12.jpg.jpeg">
            <img src="img13.jpg.jpeg">
        </div>

        <p>
            I hold them quietly, with gratitude.
        </p>
    `;
}



    if (type === "apology") {
        body.innerHTML = `
            <h3>My Apology</h3>
            <p>
                I crossed a boundary, and I understand that now.
                What I thought was care felt like control.
            </p>
            <p>
                I take responsibility, and I am working on myself.
            </p>
            <p><em>Take all the time you need.</em></p>
        `;
    }

    if (type === "question") {
        body.innerHTML = `
            <h3>Do You Love Me?</h3>
            <button class="mcq-btn" onclick="answer('yes')">Yes</button>
            <button class="mcq-btn" onclick="answer('no')">No</button>
            <p id="answer-text"></p>
        `;
    }

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.classList.remove("fullscreen");
}

function answer(choice) {
    const text = document.getElementById("answer-text");
    if (choice === "yes") {
        text.innerHTML = "That means more than you know.";
    } else {
        text.innerHTML = "Thank you for being honest.";
    }
}
/* ===== Falling Flowers Generator ===== */
const flowers = ["🌸", "🌼", "🌷", "🌺", "💐"];

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = 20 + Math.random() * 15 + "px";
    flower.style.animationDuration = 6 + Math.random() * 6 + "s";

    document.getElementById("flowers-container").appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 12000);
}
/* ==== Butterfly PNG Generator ==== */

const butterflyImages = [
  "butterfly1.png",
  "butterfly2.png",
  "butterfly3.png"
];

function createButterfly() {
  const butterfly = document.createElement("img");
  butterfly.src =
    butterflyImages[Math.floor(Math.random() * butterflyImages.length)];

  butterfly.classList.add("butterfly");

  butterfly.style.left = Math.random() * 100 + "vw";
  butterfly.style.top = "110vh";
  butterfly.style.animationDuration = 10 + Math.random() * 6 + "s";

  document.body.appendChild(butterfly);

  setTimeout(() => {
    butterfly.remove();
  }, 16000);
}

setInterval(createButterfly, 3500);

setInterval(createFlower, 500);
