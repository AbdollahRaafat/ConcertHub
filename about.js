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