const btnBox = document.querySelector('#menu-display');
const modalContainer = document.querySelector('#modal-container');
const workCard = document.getElementById('work-card-cont');
const menuOverlay = document.querySelector('#menu-overlay');
const menuButton = document.querySelector('#menu-btn-2');
const hamburgerButton = document.querySelector('#hamburger-button');
const workButton = document.querySelector('#work-btn');
const aboutButton = document.querySelector('#about-btn');
const contactButton = document.querySelector('#contact-btn');
const form = document.querySelector('#contact-me');
const inputField = document.querySelectorAll('.input-field');
const errorMessage = document.querySelector('#error-message');
const headerBox = document.querySelector('.header');
const { email } = form.elements;

function showMenu() {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
}

function showNav() {
  headerBox.classList.toggle('header-position');
}

menuButton.addEventListener('click', () => {
  showMenu();
  showNav();
});

hamburgerButton.addEventListener('click', () => {
  showMenu();
  showNav();
});

workButton.addEventListener('click', () => {
  showMenu();
});

aboutButton.addEventListener('click', () => {
  showMenu();
});

contactButton.addEventListener('click', () => {
  showMenu();
});

const projects = [
  {
    id: 1,
    name: 'Convo Discord Bot',
    description: 'Convo is a fun and interactive discord bot, it is tailored on being able to make your discord server fun again, but it is not complete and doesnt even work LMAO, anyways in the future i\'ll reccomend it.',
    cardImage: 'https://cdn.discordapp.com/attachments/1207901649117646950/1212583761217191976/image.png?ex=65f25da1&is=65dfe8a1&hm=a7cd3be7795520a3b32fedb610ed6154b55f89762f4b07d658785222a2a90b19&',
    modalImage: 'https://cdn.discordapp.com/attachments/1207901649117646950/1212583761217191976/image.png?ex=65f25da1&is=65dfe8a1&hm=a7cd3be7795520a3b32fedb610ed6154b55f89762f4b07d658785222a2a90b19&',
    imageAlt: 'Convo',
    technologies: ['Node.js', 'Discord.js'],
    liveLink: 'https://discord.gg/QV6FEnRk7q',
    sourceLink: 'https://discord.gg/QV6FEnRk7q',
  },
  {
    id: 2,
    name: 'This Current Website',
    description: 'This is a dynamic platform for film lovers. Movie details are collected from an API and displayed to users, complete with a user-friendly interface for browsing and searching. Users can also like and add comments for each movie, allowing for a community-driven experience.',
    cardImage: 'https://cdn.discordapp.com/attachments/1207901649117646950/1212584109130518649/image.png?ex=65f25df4&is=65dfe8f4&hm=0dda23c0135744fb7e888a42bc187c8b5eddaf486e29c4a085a256e096c39d19&',
    modalImage: 'https://cdn.discordapp.com/attachments/1207901649117646950/1212584109130518649/image.png?ex=65f25df4&is=65dfe8f4&hm=0dda23c0135744fb7e888a42bc187c8b5eddaf486e29c4a085a256e096c39d19&',
    imageAlt: 'Gold Portfolio',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveLink: '#',
    sourceLink: 'https://github.com/goldzo/portfolio/',
  },
  {
    id: 3,
    name: 'Simple Calculator',
    description: 'This is a mobile application that collates and displays the updated cryptocurrency market data in real time, showing all significant cryptocurrencies, including their current price, market valuation, rank, and more. Built with React and Redux.',
    cardImage: 'https://cdn.discordapp.com/attachments/1207901649117646950/1212599591820595301/image.png?ex=65f26c5f&is=65dff75f&hm=00bbef0b23bc15ee72a3627cb4d60195afdb579b1c6f07fcb59a3a286781ed9b&',
    modalImage: 'https://cdn.discordapp.com/attachments/1207901649117646950/1212599591820595301/image.png?ex=65f26c5f&is=65dff75f&hm=00bbef0b23bc15ee72a3627cb4d60195afdb579b1c6f07fcb59a3a286781ed9b&',
    imageAlt: 'Calculator',
    technologies: ['HTML', 'Javascript', 'CSS'],
    liveLink: '../src/stuff/calculator/index.html',
    sourceLink: 'https://github.com/goldzo/portfolio/',
  },
  {
    id: 4,
    name: 'Simple todo-list',
    description: 'Looking for a simple solution for keeping you tidy? Use this and youl\'ll now how to organized, this also provides a free data save, sso when you refresh or your computer crashes or wtv, your data will be saved, not to the a data but your localStorage.',
    cardImage: 'https://cdn.discordapp.com/attachments/1212866764925435924/1212928172186927177/image.png?ex=65f39e63&is=65e12963&hm=100c86af302520a2c7ba6a9600e416eaae9cd940a8190544bc319cbbd4e8bb34&',
    modalImage: 'https://cdn.discordapp.com/attachments/1212866764925435924/1212928172186927177/image.png?ex=65f39e63&is=65e12963&hm=100c86af302520a2c7ba6a9600e416eaae9cd940a8190544bc319cbbd4e8bb34&',
    imageAlt: 'Todo Image',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '../src/stuff/to-do list/index.html',
    sourceLink: 'https://github.com/goldzo/portfolio/',
  },
];

function showModal() {
  modalContainer.classList.toggle('modal-display');
}

function openModal(projectIndex) {
  const oneProject = projects[projectIndex];
  let list = '';
  oneProject.technologies.forEach((item1) => {
    list += `<li>${item1}</li>`;
  });

  const modalContent = `<div class="modal">
  <div class="modal-image-box">
      <div class="modal-close-btn" id="modal-close-btn">
          <i onclick="showModal()" class="fa-solid fa-xmark"></i>
      </div>
      <img src="${oneProject.modalImage}" alt="${oneProject.imageAlt}" class="modal-image-mobile">
  </div>
  <div class="modal-text-box">
      <h3>${oneProject.name}</h3>
      <ul class="modal-pr-lang">
        ${list}
      </ul>
      <p>${oneProject.description}</p>
      <div class="modal-btns">
          <button><a href="${oneProject.liveLink}" target=”_blank”>See Live <i class="fa-solid fa-arrow-up-right-from-square modal-btn-icon"></i></a></button>
          <button><a href="${oneProject.sourceLink}" target=”_blank”>See Source <i class="fa-brands fa-github modal-btn-icon"></i></a></button>
      </div>
  </div>
  </div>`;
  modalContainer.innerHTML = modalContent;
  showModal();
}

projects.forEach((items) => {
  let list = '';
  items.technologies.forEach((item1) => {
    list += `<li>${item1}</li>`;
  });
  const workCardContent = `<li class="work-card">
  <div class="word-card-img">
    <img src="${items.cardImage}" alt="${items.imageAlt}" class="modal-image-mobile">
  </div>
  <div class="work-card-info">
      <h2>${items.name}</h2>
      <ul class="work-card-pr-lang" id="work-card-pr-lang-1">
          ${list}
      </ul>
      <button data-id="${items.id}" id="project-buttons">See Project</button>
  </div>
  </li>`;
  workCard.innerHTML += workCardContent;
});

const projectButtonList = document.querySelectorAll('#project-buttons');

projectButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    const projectId = parseInt(button.dataset.id, 10) - 1;
    openModal(projectId);
  });
});

/** FORM VALIDATION */

form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    errorMessage.classList.remove('modal-display');
    event.preventDefault();
  }
});

/** STORE VALUES LOCALLY */

const storedData = {
  name: '',
  email: '',
  message: '',
};

inputField.forEach((input) => {
  input.addEventListener('input', () => {
    storedData[input.name] = input.value;
    localStorage.setItem('allData', JSON.stringify(storedData));
  });
});

const storedForm = JSON.parse(localStorage.getItem('allData'));
if (storedForm) {
  inputField.forEach((keyItem) => {
    keyItem.value = storedForm[keyItem.name];
  });
}
