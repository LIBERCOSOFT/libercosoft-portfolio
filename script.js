const hamburger = document.querySelector('#hamburger-icon');
const cancelMenu = document.querySelectorAll('.cancel-menu');
const nameTag = document.querySelector('#cancel-name-animation');
const dropdown = document.querySelector('#dropdown-menu');
const cancel = document.querySelector('#cancel');
const modal = document.querySelector('#modal');
const cardContainer = document.getElementById('card-container');
const desktopCard1 = document.querySelector('#first-desktop-card');
const desktopCard2 = document.querySelector('#second-desktop-card');

const form = document.getElementById('contact-form');
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
const contactMessage = document.getElementById('message');

const projectData = [
  {
    id: '1',
    name: 'Bridal Cars Reservation',
    description: 'Bridal cars is a full stack application that allows users to reserve a bridal car. It uses React in the front end and RoR(Ruby on Rails) as an API. Using this app, users can log in by typing username and password. Once logged in, they are able to see all the available cars, the car details and can reserve a car.',
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
    id: '5',
    name: 'Budget App',
    description: 'A Ruby on Rails application that allows users to register and log in, introduce new transactions associated with a category, and see the money spent on each category.',
    featuredImage: 'assets/img/desktop-project-2/featured.png',
    preview1: 'assets/img/desktop-project-2/preview1.png',
    preview2: 'assets/img/desktop-project-2/preview2.png',
    preview3: 'assets/img/desktop-project-2/preview3.png',
    preview4: 'assets/img/desktop-project-2/preview4.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Postgres'],
    liveLink: 'https://budget-app-9ny9.onrender.com/',
    sourceLink: 'https://github.com/LIBERCOSOFT/budget-app',
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

const desktopData = [
  {
    id: 1,
    name: 'Bridal Cars Reservation',
    technologies: ['ReactJS', 'Ruby on Rails', 'Postgres'],
  },

  {
    id: 5,
    name: 'Budget',
    technologies: ['HTML/CSS', 'Ruby on Rails', '+1'],
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

const card2 = document.createElement('div');
card2.className = 'desktop-description';
const projectName2 = document.createElement('p');
projectName2.innerText = `${desktopData[1].name}`;
const ul2 = document.createElement('ul');
for (let i = 0; i < 3; i += 1) {
  const li = document.createElement('li');
  li.innerText = `${desktopData[1].technologies[i]}`;
  ul2.appendChild(li);
}
const button2 = document.createElement('button');
button2.type = 'button';
button2.id = `${desktopData[1].id}`;
button2.className = 'desktop-see-project';
button2.innerHTML = 'See this project <i class="fa-solid fa-arrow-right"></i>';
button2.addEventListener('click', toggleModal);
card2.appendChild(projectName2);
card2.appendChild(ul2);
card2.appendChild(button2);
desktopCard2.prepend(card2);

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
