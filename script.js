const hamburger = document.querySelector('#hamburger-icon');
const cancelMenu = document.querySelectorAll('.cancel-menu');
const nameTag = document.querySelector('#cancel-name-animation');
const dropdown = document.querySelector('#dropdown-menu');

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

const cardContainer = document.getElementById('card-container');

projectData.forEach((project) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = ` 
  <img src="${project.featuredImage}" alt="${project.name} screenshot" />
  <div class="card-description">
    <p>${project.name}</p>
      <ul>
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[2]}</li>
      </ul>
      <button type="button">
        See this project
        <img
          src="assets/img/ic_arrow_right.svg"
          alt="right arrow icon"
        />
      </button>
  </div>`;

  cardContainer.appendChild(card);
});
