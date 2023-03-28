const hamburger = document.querySelector('#hamburger-icon');
const cancelMenu = document.querySelectorAll('.cancel-menu');
const nameTag = document.querySelector('#cancel-name-animation');
const dropdown = document.querySelector('#dropdown-menu');
const cancel = document.querySelector('#cancel');
const modal = document.querySelector('#modal');
const cardContainer = document.getElementById('card-container');
const desktopCard1 = document.querySelector('#first-desktop-card');
const otherProjectContainer = document.querySelector('#other-projects-container');

const form = document.getElementById('contact-form');
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
const contactMessage = document.getElementById('message');

const projectData = [
  {
    id: '1',
    name: 'Bridal Cars Reservation',
    description: 'Bridal cars is a full-stack application that allows users to reserve a bridal car. It uses React in the front end and RoR(Ruby on Rails) as an API. Using this app, users can log in by typing their username and password. Once logged in, they can see all the available cars, and the car details and can reserve a car.',
    featuredImage: 'assets/img/desktop-project-1/featured.png',
    preview1: 'assets/img/desktop-project-1/preview-1.png',
    preview2: 'assets/img/desktop-project-1/preview-2.png',
    preview3: 'assets/img/desktop-project-1/preview-3.png',
    preview4: 'assets/img/desktop-project-1/preview-4.png',
    technologies: ['ReactJS', 'Ruby on Rails', 'Postgres'],
    liveLink: 'https://deploy-preview-18--storied-madeleine-8f057b.netlify.app/',
    sourceLink: 'https://github.com/inspecta/bridal-cars-frontend',
  },
  {
    id: '2',
    name: 'Stock Market',
    description: 'A stock market web application that gives the details of over 3000 stocks. Further, it groups the stocks into sectors, e.g Technology, Communication, and so on.',
    featuredImage: 'assets/img/mobile-project-2/featured.png',
    preview1: 'assets/img/mobile-project-2/preview1.png',
    preview2: 'assets/img/mobile-project-2/preview2.png',
    preview3: 'assets/img/mobile-project-2/preview3.png',
    preview4: 'assets/img/mobile-project-2/preview4.png',
    technologies: ['ReactJS', 'Redux', 'JEST'],
    liveLink: 'https://deploy-preview-6--lighthearted-druid-5c17e6.netlify.app/',
    sourceLink: 'https://github.com/LIBERCOSOFT/stock-market',
  },
  {
    id: '3',
    name: 'Leader Board',
    description: 'The leader-board website displays scores submitted by different players. It also allows you to submit your score, using webpack and ES6 features, notably modules.',
    featuredImage: 'assets/img/mobile-project-3/featured.png',
    preview1: 'assets/img/mobile-project-3/preview1.png',
    preview2: 'assets/img/mobile-project-3/preview2.png',
    preview3: 'assets/img/mobile-project-3/featured.png',
    preview4: 'assets/img/mobile-project-3/preview1.png',
    technologies: ['HTML/CSS', 'JavaScript', 'Webpack'],
    liveLink: 'https://libercosoft.github.io/leaderboard/dist/',
    sourceLink: 'https://github.com/LIBERCOSOFT/leaderboard',
  },
  {
    id: '4',
    name: 'Catalog of Things',
    description: 'Catalog of Things is a console application that allows users to keep track of their favorite things! Users can add records of their books, music albums, and games and can also list them. The data will be saved in .json files. The data will be automatically loaded each time the application starts.',
    featuredImage: 'assets/img/mobile-project-4/featured.png',
    preview1: 'assets/img/mobile-project-4/preview1.png',
    preview2: 'assets/img/mobile-project-4/preview2.png',
    preview3: 'assets/img/mobile-project-4/preview3.png',
    preview4: 'assets/img/mobile-project-4/preview4.png',
    technologies: ['Ruby', 'Terminal', 'RSpec'],
    note: 'Please note: This is a terminal application, you have to run it in your terminal to see the live version, thanks.',
    liveLink: 'https://drive.google.com/file/d/1a0-J0hlMK3N7mvYvvI_gE2-uejfBQUCV/view',
    sourceLink: 'https://github.com/laiifuu/Things-Catalog',
  },
  {
    id: '5',
    name: 'Budget Application',
    description: 'A Ruby on Rails application that allows users to register and log in, introduce new transactions associated with a category, and see the money spent on each category.',
    featuredImage: 'assets/img/desktop-project-2/featured.png',
    preview1: 'assets/img/desktop-project-2/preview1.png',
    preview2: 'assets/img/desktop-project-2/preview2.png',
    preview3: 'assets/img/desktop-project-2/preview3.png',
    preview4: 'assets/img/desktop-project-2/preview4.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Postgres'],
    liveLink: 'https://budget-app-production-3559.up.railway.app/',
    sourceLink: 'https://github.com/LIBERCOSOFT/budget-app',
  },
  {
    id: '6',
    name: 'Movies Catalogue',
     description: 'This web application displays the list of movies from an external API. The web application consists of two user interfaces. It has a home page with movies and a popup window with detail of the selected movie. Users can also add comments and view comments on the popup window.',
    featuredImage: 'assets/img/mobile-project-6/featured.png',
    preview1: 'assets/img/mobile-project-6/preview1.png',
    preview2: 'assets/img/mobile-project-6/preview2.png',
    preview3: 'assets/img/mobile-project-6/preview3.png',
    preview4: 'assets/img/mobile-project-6/preview4.png',
    technologies: ['HTML/CSS', 'JavaScript', 'Webpack'],
    liveLink: 'https://libercosoft.github.io/movie-capstone-app/dist/',
    sourceLink: 'https://github.com/LIBERCOSOFT/movie-capstone-app',
  },
];

const desktopData = [
  {
    id: 1,
    name: 'Bridal Cars Reservation',
    technologies: ['ReactJS', 'Ruby on Rails', 'Postgres'],
  },
  {
    id: 2,
    name: 'Stock Market',
    technologies: ['ReactJS', 'Redux', 'JEST'],
  },
  {
    id: 3,
    name: 'Leader Board',
    technologies: ['HTML/CSS', 'JavaScript', 'Webpack'],
  },
  {
    id: 4,
    name: 'Catalog of Things',
   technologies: ['Ruby', 'Terminal', 'RSpec'],
  },
  {
    id: 5,
    name: 'Budget Application',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Postgres'],
  },
  {
    id: 6,
    name: 'Movies Catalogue',
    technologies: ['HTML/CSS', 'JavaScript', 'Webpack'],
  },
];

const contactData = {
  name: '',
  email: '',
  message: '',
};

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

const toggleModal = (e) => {
  modal.classList.remove('visibility');
  const { id } = e.target;
  projectData.forEach((project) => {
    if (project.id === id) {
      const modalHeader = document.querySelector('#modal-header');
      const modalTech = document.querySelector('#modal-tech');
      const modalCarousel = document.querySelector('#modal-carousel');
      const modalCarouselPre = document.querySelector('#carousel-previews');
      const modalDescription = document.querySelector('#modal-description');
      const modalNote = document.querySelector('#modal-note');
      const modLive = document.querySelector('#modal-live');
      const modSource = document.querySelector('#modal-source');
      modalHeader.innerHTML = `<h2>${project.name}</h2>`;
      modalTech.innerHTML = `
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[2]}</li>`;
      modalCarousel.innerHTML = `<img src="${project.featuredImage}" alt="project screenshot" />`;
      modalCarouselPre.innerHTML = `<img src="${project.preview1}" alt="project screenshot" />
      <img src="${project.preview2}" alt="project screenshot" />
      <img src="${project.preview3}" alt="project screenshot" />
      <img src="${project.preview4}" alt="project screenshot" />`;
      modalDescription.innerHTML = `<p class="project-description" id="modal-description">
            ${project.description}
      </p>`;
      if(project.note) {
        modalNote.innerHTML = `<b>${project.note}</b>`
      }else {
        modalNote.innerHTML = ''
      }
      modLive.setAttribute('href', `${project.liveLink}`);
      modSource.setAttribute('href', `${project.sourceLink}`);
    }
  });
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
  button.id = `${project.id}`;
  button.innerHTML = 'See this project <i class="fa-solid fa-arrow-right"></i>';
  button.addEventListener('click', toggleModal);
  description.appendChild(name);
  description.appendChild(ul);
  description.appendChild(button);
  cardContainer.appendChild(card);
});

cancel.addEventListener('click', () => {
  modal.classList.add('visibility');
});

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
button1.id = `${desktopData[0].id}`;
button1.className = 'desktop-see-project';
button1.innerHTML = 'See this project <i class="fa-solid fa-arrow-right"></i>';
button1.addEventListener('click', toggleModal);
card1.appendChild(projectName1);
card1.appendChild(ul1);
card1.appendChild(button1);
desktopCard1.prepend(card1);

for (let i = desktopData.length - 1; i > 0; i--){
  const cardContainer = document.createElement('div');
  cardContainer.className = `desktop-card-container-${desktopData[i].id}`;
  const card = document.createElement('div');
  card.className = `desktop-card-${desktopData[i].id}`;
  const projectName = document.createElement('p');
  projectName.innerText = `${desktopData[i].name}`;
  const ul = document.createElement('ul');
  for (let u = 0; u < 3; u += 1) {
    const li = document.createElement('li');
    li.innerText = `${desktopData[i].technologies[u]}`;
    ul.appendChild(li);
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.id = `${desktopData[i].id}`;
  button.className = 'desktop-see-project';
  button.innerHTML = 'See this project <i class="fa-solid fa-arrow-right"></i>';
  button.addEventListener('click', toggleModal);
  card.appendChild(projectName);
  card.appendChild(ul);
  card.appendChild(button);
  cardContainer.appendChild(card)
  otherProjectContainer.prepend(cardContainer);
}

form.addEventListener('submit', (event) => {
  const { value } = form.elements.email;
  if (value.toLowerCase() !== value) {
    event.preventDefault();
    const error = document.querySelector('#error');
    error.innerText = 'email should be in lowercase';

    const email = document.getElementById('email');
    email.id = 'error-indicator';
  } else {
    localStorage.removeItem('contactData');
    form.submit();
  }
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    const { code, name } = e;
    return (
      e instanceof DOMException
        && (code === 22
          || code === 1014
          || name === 'QuotaExceededError'
          || name === 'NS_ERROR_DOM_QUOTA_REACHED')
        && storage.length !== 0
    );
  }
}

const storageChecker = storageAvailable('localStorage');

contactName.addEventListener('change', () => {
  if (storageChecker) {
    const { value } = contactName;
    contactData.name = value;
    const stringify = JSON.stringify(contactData);
    localStorage.setItem('contactData', stringify);
  }
});

contactEmail.addEventListener('change', () => {
  if (storageChecker) {
    const { value } = contactEmail;
    contactData.email = value;
    const stringify = JSON.stringify(contactData);
    localStorage.setItem('contactData', stringify);
  }
});

contactMessage.addEventListener('change', () => {
  if (storageChecker) {
    const { value } = contactMessage;
    contactData.message = value;
    const stringify = JSON.stringify(contactData);
    localStorage.setItem('contactData', stringify);
  }
});

window.onload = () => {
  if (localStorage.getItem('contactData')) {
    const contactData = localStorage.getItem('contactData');
    const parsed = JSON.parse(contactData);
    contactName.value = parsed.name;
    contactEmail.value = parsed.email;
    contactMessage.value = parsed.message;
  }
};
