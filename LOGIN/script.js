const container = document.getElementById('container');
const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');

registerButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
