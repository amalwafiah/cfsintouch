// Section switching
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

// Quotes
function newQuote() {
    const quotes = [
        "You are enough 💕",
        "Soft heart, strong mind 🌸",
        "Bloom at your own pace 🌷",
        "Stay kind, stay pretty ✨"
    ];

    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerText = quotes[random];
}

// To-do list
function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value;

    if (task === "") return;

    const li = document.createElement("li");
    li.innerText = task;

    li.onclick = function () {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}