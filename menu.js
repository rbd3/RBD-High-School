const hamburger = document.querySelector('.humburger');
const closeBtn = document.querySelector('.closebtn');

// Show the mobile menu when the hamburger button is clicked
hamburger.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});

closeBtn.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});

const Portfolio = document.querySelector('#program-menu');
Portfolio.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});

const about = document.querySelector('#about');
about.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});
