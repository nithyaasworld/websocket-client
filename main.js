let messageEl = document.getElementById('message');
let inputEl = document.getElementById('msg-input');
let buttonEl = document.getElementById('send');
let chatContainer = document.querySelector('ul');

const socket = io('ws://localhost:3030');
socket.on('connect', () => {
    console.log('Connection established');
})
socket.on('message', (data) => {
    console.log(data);
    let listEl = document.createElement('li');
    listEl.innerText = data;
    chatContainer.appendChild(listEl);
})
buttonEl.addEventListener('click', (e) => {
    console.log(inputEl.value);
    socket.send(inputEl.value);
})


// let socket = new WebSocket('ws://localhost:3030');

// socket.onopen = (e) => {
//     console.log('connected to server');
//     socket.send('Hi from the client');
// }
// socket.onclose = () => {
//     console.log('Server is closed');
// }
// socket.onmessage = (message) => {
//     console.log("message is: ", message.data);

// }
// buttonEl.addEventListener('click', (e) => {
//     console.log(inputEl.value);
//     socket.send(inputEl.value);
// })