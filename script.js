/* =========================
   MODAL CONTROLS
========================= */

function openMemories() {
  openModal(`
    <h2>Our Memories</h2>
    <p>
      The small conversations. The laughter.
      The moments that felt safe and real.
    </p>
    <p>I hold them quietly, with gratitude.</p>
  `);
}

function openApology() {
  openModal(`
    <h2>My Apology</h2>
    <p>
      I never wanted to control you.
      I only cared deeply.
    </p>
    <p>
      I’m sorry for the fear I let speak louder than trust.
    </p>
  `);
}

function openLove() {
  openModal(`
    <h2>Do You Love Me?</h2>
    <div class="mcq">
      <button onclick="answer('yes')">Yes</button>
      <button onclick="answer('no')">No</button>
      <p id="answer-text"></p>
    </div>
  `);
}

function openModal(content) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function answer(choice) {
  const text = document.getElementById("answer-text");
  if (choice === "yes") {
    text.innerText = "That means more than you know.";
  } else {
    text.innerText = "Thank you for being honest.";
  }
}

/* =========================
   FALLING FLOWERS & BUTTERFLIES (PNG)
========================= */

const floatingImages = [
  "flower1.png",
  "flower2.png",
  "flower3.png",
  "butterfly1.png",
  "butterfly2.png"
];

function createFloatingItem() {
  const container = document.getElementById("flowers-container");
  const item = document.createElement("img");

  item.src = floatingImages[Math.floor(Math.random() * floatingImages.length)];
  item.className = "floating-item";

  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = 8 + Math.random() * 6 + "s";
  item.style.width = 30 + Math.random() * 25 + "px";

  container.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 15000);
}

setInterval(createFloatingItem, 700);

/* =========================
   RANDOM BOWS (10 TOTAL)
========================= */

function createBows() {
  const container = document.getElementById("bows-container");

  for (let i = 0; i < 10; i++) {
    const bow = document.createElement("img");
    bow.src = "bow.png";
    bow.className = "bow-item";

    bow.style.top = Math.random() * 100 + "vh";
    bow.style.left = Math.random() * 100 + "vw";
    bow.style.transform = `rotate(${Math.random() * 360}deg)`;
    bow.style.width = "40px";

    container.appendChild(bow);
  }
}

createBows();

/* =========================
   CLICK OUTSIDE MODAL TO CLOSE
========================= */

window.onclick = function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
};
