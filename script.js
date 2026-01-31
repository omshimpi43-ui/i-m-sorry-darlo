const floatContainer = document.getElementById("float-container");

const floatImages = [
  "flower1.png",
  "flower2.png",
  "butterfly1.png",
  "butterfly2.png",
  "rose.png"
];

function createFloatingItem() {
  const img = document.createElement("img");
  img.src = floatImages[Math.floor(Math.random() * floatImages.length)];

  img.style.left = Math.random() * 100 + "vw";
  img.style.animationDuration = (8 + Math.random() * 6) + "s";

  floatContainer.appendChild(img);

  setTimeout(() => img.remove(), 14000);
}

setInterval(createFloatingItem, 700);

/* MODALS */
function openMemories() {
  openModal("<h2>Our Memories</h2><p>The moments that felt safe, warm, and real.</p>");
}

function openApology() {
  openModal("<h2>My Apology</h2><p>I crossed boundaries. I’m working on myself.</p>");
}

function openLove() {
  openModal(`
    <h2>Do You Love Me?</h2>
    <button onclick="answer('yes')">Yes</button>
    <button onclick="answer('no')">No</button>
    <p id="answer-text"></p>
  `);
}

function answer(choice) {
  document.getElementById("answer-text").innerText =
    choice === "yes" ? "That means more than you know ❤️" : "Thank you for being honest.";
}

function openModal(content) {
  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
