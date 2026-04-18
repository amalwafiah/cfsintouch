// Change message
function changeMessage() {
    const messages = [
        "You are amazing 💕",
        "Stay pretty and confident 🌷",
        "Don't forget to smile ✨",
        "You're doing great 🎀"
    ];

    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[random];
}

// Counter
let count = 0;

function increaseCount() {
    count++;
    document.getElementById("count").innerText = count;
}

// Notes
function addNote() {
    const input = document.getElementById("noteInput");
    const note = input.value;

    if (note === "") return;

    const li = document.createElement("li");
    li.innerText = note;

    document.getElementById("noteList").appendChild(li);

    input.value = "";
}