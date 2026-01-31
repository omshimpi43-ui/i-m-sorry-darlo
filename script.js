function openModal(type) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");

    if (type === "memories") {
        body.innerHTML = `
            <h3>Our Memories</h3>
            <p>
                The small conversations.  
                The laughter.  
                The moments that felt safe and real.
            </p>
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
    document.getElementById("modal").style.display = "none";
}

function answer(choice) {
    const text = document.getElementById("answer-text");
    if (choice === "yes") {
        text.innerHTML = "That means more than you know.";
    } else {
        text.innerHTML = "Thank you for being honest.";
    }
}
