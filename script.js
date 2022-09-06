const hamburger = document.querySelector('#hamburger-icon');
const cancelMenu = document.querySelectorAll('.cancel-menu');
const nameTag = document.querySelector('#cancel-name-animation');
const dropdown = document.querySelector('#dropdown-menu');
const cancel = document.querySelector('#cancel');
const modal = document.querySelector('#modal');
const cardContainer = document.getElementById('card-container');
const desktopCard1 = document.querySelector('#first-desktop-card');
const desktopCard2 = document.querySelector('#second-desktop-card');

hamburger.addEventListener('click', () => {
  dropdown.classList.toggle('visibility');
  nameTag.classList.toggle('pauseName');
});

for (let i = 0; i < cancelMenu.length; i += 1) {
  cancelMenu[i].addEventListener('click', () => {
    dropdown.classList.toggle('visibility');
    nameTag.classList.toggle('pauseName');
  });
}

const projectData = [
  {
    name: 'Project 1',
    description: 'Project 1 Description',
    featuredImage: 'assets/img/card-1.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
  {
    name: 'Project 2',
    description: 'Project 2 Description',
    featuredImage: 'assets/img/card-2.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
  {
    name: 'Project 3',
    description: 'Project 3 Description',
    featuredImage: 'assets/img/card-3.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
  {
    name: 'Project 4',
    description: 'Project 4 Description',
    featuredImage: 'assets/img/card-4.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
  {
    name: 'Project 5',
    description: 'Project 5 Description',
    featuredImage: 'assets/img/card-5.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
  {
    name: 'Project 6',
    description: 'Project 6 Description',
    featuredImage: 'assets/img/card-6.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
];

const toggleModal = () => {
  modal.classList.remove('visibility');
};

projectData.forEach((project) => {
  const card = document.createElement('div');
  card.className = 'card';
  const image = document.createElement('img');
  image.setAttribute('src', `${project.featuredImage}`);
  image.setAttribute('alt', `${project.name} screenshot`);
  const description = document.createElement('div');
  description.className = 'card-description';
  card.appendChild(image);
  card.appendChild(description);
  const name = document.createElement('p');
  name.innerText = `${project.name}`;
  const ul = document.createElement('ul');
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.innerText = `${project.technologies[i]}`;
    ul.appendChild(li);
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'see-project';
  button.innerHTML = 'See this project';
  button.addEventListener('click', toggleModal);
  description.appendChild(name);
  description.appendChild(ul);
  description.appendChild(button);
  cardContainer.appendChild(card);
});

cancel.addEventListener('click', () => {
  modal.classList.add('visibility');
});

const desktopData = [
  {
    name: 'Project 1',
    description: 'Project 1 Description',
    featuredImage: 'assets/img/card-1.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
  {
    name: 'Project 2',
    description: 'Project 2 Description',
    featuredImage: 'assets/img/card-2.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', '+1'],
    liveLink: 'https://coming.soon',
    sourceLink: 'https://developing.stage',
  },
];

const card1 = document.createElement('div');
card1.className = 'card-description';
const projectName1 = document.createElement('p');
projectName1.innerText = `${desktopData[0].name}`;
const ul1 = document.createElement('ul');
for (let i = 0; i < 3; i += 1) {
  const li = document.createElement('li');
  li.innerText = `${desktopData[0].technologies[i]}`;
  ul1.appendChild(li);
}
const button1 = document.createElement('button');
button1.type = 'button';
button1.className = 'desktop-see-project';
button1.innerHTML = 'See this project';
button1.addEventListener('click', toggleModal);
card1.appendChild(projectName1);
card1.appendChild(ul1);
card1.appendChild(button1);
desktopCard1.prepend(card1);

const card = document.createElement('div');
card.className = 'desktop-description';
const projectName = document.createElement('p');
projectName.innerText = `${desktopData[1].name}`;
const ul = document.createElement('ul');
for (let i = 0; i < 3; i += 1) {
  const li = document.createElement('li');
  li.innerText = `${desktopData[1].technologies[i]}`;
  ul.appendChild(li);
}
const button = document.createElement('button');
button.type = 'button';
button.className = 'desktop-see-project';
button.innerHTML = 'See this project';
button.addEventListener('click', toggleModal);
card.appendChild(projectName);
card.appendChild(ul);
card.appendChild(button);
desktopCard2.prepend(card);
