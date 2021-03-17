/* eslint-disable no-console */
const users = [];
let enterCount = 0;

const form = document.querySelector('.form');
const nameInput = document.querySelector('.form-login');
const passInput = document.querySelector('.form-password');
const formButton = document.querySelector('.form-btn');

const chatButton = document.querySelector('.chat__btn');
const chatInput = document.querySelector('.chat__input');
const chatMessages = document.querySelector('.chat__messages');
const chatUserName = document.querySelector('.chat__user-name');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

function addUser() {
  const user = {
    name: nameInput.value,
    password: passInput.value,
    isLogged: true,
    message: []
  };

  users.push(user);
  nameInput.value = '';
  passInput.value = '';

  localStorage.setItem('users', JSON.stringify(users));

  const getUser = localStorage.getItem('users');
  const parsedUser = JSON.parse(getUser);

  chatUserName.innerHTML = parsedUser[0].name;

  const { isLogged } = user;
  if (isLogged) {
    form.classList.toggle('d-hidden');
  }
  enterCount += 1;
  console.log(enterCount);
}

formButton.addEventListener('click', addUser);

// localStorage.setItem('users', JSON.stringify(users));
const getUser = localStorage.getItem('users');
const parsedUser = JSON.parse(getUser);

if (enterCount !== 0) {
  chatUserName.innerHTML = parsedUser[0].name;
}

chatButton.addEventListener('click', () => {
  const getUsr = localStorage.getItem('users');
  const parsedUsr = JSON.parse(getUsr);

  console.log(parsedUsr);
  for (let i = 0; i < parsedUsr.length; i += 1) {
    parsedUsr[i].message.push(chatInput.value);
    localStorage.setItem('users', JSON.stringify(parsedUsr));
  }

  console.log(parsedUsr);
  const showMessage = localStorage.getItem('users');
  const parsedMessage = JSON.parse(showMessage);

  console.log(showMessage);
  console.log(parsedMessage[0].message);

  chatMessages.innerHTML += `<div class="chat__second-user">
        <span class="chat__message chat__message_second">
        ${parsedMessage[0].message[parsedMessage[0].message.length - 1]}
        </span>
      </div>`;

  chatInput.value = '';
});
