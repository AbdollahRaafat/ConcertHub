// Menu-btn

const menuIcon = document.getElementById('menu-id');

menuIcon.addEventListener('click', () => {
  document.getElementById('pop-list').style.display = 'block';
});

const closeIcon = document.getElementById('close-Icon');

closeIcon.addEventListener('click', () => {
  document.getElementById('pop-list').style.display = 'none';
});

const openPortfolio = document.getElementById('pop-buttons-1');
openPortfolio.addEventListener('click', () => {
  document.getElementById('pop-list').style.display = 'none';
});

const openAbout = document.getElementById('pop-buttons-2');
openAbout.addEventListener('click', () => {
  document.getElementById('pop-list').style.display = 'none';
});

const openContact = document.getElementById('pop-buttons-3');
openContact.addEventListener('click', () => {
  document.getElementById('pop-list').style.display = 'none';
});

// Singers
const singers = [

  {
    name: 'Adel',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor.`,
    image: '../images/adel.jpg',
  },

  {
    name: 'Kanye West',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor.`,
    image: './images/kanyeWest.jpg',
  },

  {
    name: 'The Weekend',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor.`,
    image: './images/weekend.png',
  },

  {
    name: 'Drake',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor.`,
    image: './images/drake.png',
  },

  {
    name: 'Billie Eilish',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor.`,
    image: './images/billieeilish.jpg',
  },

  {
    name: 'Harry Styles',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor.`,
    image: './images/harry.jfif',
  },

];

const singerProfile = document.querySelector('.f-singers');

function createSinger(item) {
  return `<div class="col-md-6 d-flex ">
            <img src="${item.image}" alt="${item.name}" class="m-2" style="width: 8.25rem; height: 8.25rem; border-radius: 5px;">
            <div>
              <h6 class="program-title px-3">${item.name}</h6>
              <div class="line line-2  my-2"></div>
              <p class="program-text pb-2 px-3"> ${item.description} </p>
            </div>
            
          </div>`;
}

singerProfile.innerHTML = singers.map((item) => createSinger(item)).join('');