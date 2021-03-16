/* eslint-disable no-console */
const users = [];
const messages = [];

const form = document.querySelector('.form');
const nameInput = document.querySelector('.form-login');
const passInput = document.querySelector('.form-password');
const formButton = document.querySelector('.form-btn');

const chatButton = document.querySelector('.chat__btn');
const chatInput = document.querySelector('.chat__input');
const chatMessages = document.querySelector('.chat__messages');
const chatUserName = document.querySelector('.chat__user-name');
const chatFirstUserMessage = document.querySelector('.first-user');
const chatSecondUserMessage = document.querySelector('.chat__second-user');

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

  console.log(users);
  for (let i = 0; i < users.length; i += 1) {
    localStorage.setItem(`user-${i}`, JSON.stringify(users[i]));

    const getUser = localStorage.getItem(`user-${i}`);
    const parsedUser = JSON.parse(getUser);

    chatUserName.innerHTML = parsedUser.name;
  }

  const { isLogged } = user;
  if (isLogged) {
    form.classList.toggle('d-hidden');
  }
}

formButton.addEventListener('click', addUser);

chatButton.addEventListener('click', () => {
  // const msg = messages.push(chatInput.value);

  // localStorage.setItem('message', JSON.stringify(msg));

  for (let i = 0; i < users.length; i += 1) {
    users[i].message.push(chatInput.value);
    localStorage.setItem(`user-${i}`, JSON.stringify(users[i]));
  }

  const showMessage = localStorage.getItem('user-0');
  const parsedMessage = JSON.parse(showMessage);

  console.log(showMessage);
  console.log(parsedMessage);

  chatMessages.innerHTML += `<div class="chat__second-user">
        <span class="chat__message chat__message_second">
        ${parsedMessage.message[parsedMessage.message.length - 1]}
        </span>
      </div>`;

  chatInput.value = '';
});
