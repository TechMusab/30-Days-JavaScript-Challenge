const socket = io();
let username;
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const sendButton = document.querySelector(".button");
const container = document.querySelector(".container");
do {
    username = prompt("Enter username");
} while (!username);

socket.emit("new-user-joined", username);

const append = (message, pos) => {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add("message");
    messageElement.classList.add(pos);
    container.append(messageElement);
};

socket.on("user-joined", (username) => {
    append(`${username} joined the chat`, "center");
});

socket.on("user-left", (user) => {
    append(`${user} left the chat`, "center");
});

sendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const message = input.value.trim();
    if (message !== "") {
        append(`${username}: ${message}`, "right");
        socket.emit("message", { user: username, message: message });
        input.value = "";
    }
});
socket.on("message", (data) => {
    append(`${data.user}: ${data.message}`, "left");
});
