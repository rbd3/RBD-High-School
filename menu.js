const hamburger = document.querySelector('.humburger');
const closeBtn = document.querySelector('.closebtn');
const workSection = document.querySelector('.work');
const aboutSection = document.querySelector('.about-me');
const contactSection = document.querySelector('.contact-form');

// Show the mobile menu when the hamburger button is clicked
hamburger.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});

closeBtn.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});

const Portfolio = document.querySelector('#program-menu');
Portfolio.addEventListener('click', () => {
  workSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});

const about = document.querySelector('#about');
about.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});

const registration = document.querySelector('#registration');
contact.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});


const sponsor = document.querySelector('#sponsor');
contact.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});


const news = document.querySelector('#news');
contact.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});