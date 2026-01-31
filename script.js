const floatContainer = document.getElementById("float-container");

const floatImages = [
  "flower1.png",
  "flower2.png",
  "flower3.png",
  "flower4.png"
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
/* BUTTERFLY GENERATOR (SEPARATE) */
const butterflyImages = [
  "butterfly1.png",
  "butterfly2.png",
  "butterfly3.png"
];

function createButterfly() {
  const butterfly = document.createElement("img");
  butterfly.src = butterflyImages[Math.floor(Math.random() * butterflyImages.length)];
  butterfly.className = "butterfly";

  const fromLeft = Math.random() > 0.5;
  butterfly.style.top = Math.random() * 80 + "vh";
  butterfly.style.left = fromLeft ? "-80px" : "100vw";
  butterfly.style.animationDuration = (10 + Math.random() * 8) + "s";
  butterfly.style.transform = fromLeft ? "scaleX(1)" : "scaleX(-1)";

  document.body.appendChild(butterfly);

  setTimeout(() => butterfly.remove(), 20000);
}

setInterval(createButterfly, 1500);

/* MODALS */
function openMemories() {
  const images = [
    "img1.jpg.jpeg",
    "img2.jpg.jpeg",
    "img3.jpg.jpeg",
    "img4.jpg.jpeg",
    "img5.jpg.jpeg",
    "img6.jpg.jpeg",
    "img7.jpg.jpeg",
    "img8.jpg.jpeg",
    "img9.jpg.jpeg",
    "img10.jpg.jpeg",
    "img11.jpg.jpeg",
    "img12.jpg.jpeg",
    "img13.jpg.jpeg"
  ];

  let gallery = `<h2>Our Memories</h2><div class="memory-grid">`;

  images.forEach(img => {
    gallery += `
      <img 
        src="${img}" 
        class="memory-img" 
        onclick="window.open('${img}', '_blank')"
      >
    `;
  });

  gallery += `</div>`;

  openModal(gallery);
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
