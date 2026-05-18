const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const toggledisplay1 = document.getElementsByClassName('hidden1')
const toggledisplay2 = document.getElementsByClassName('hidden2')

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});