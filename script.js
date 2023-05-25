const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');
const moreLess = document.querySelector('.moreless');
const chevron = document.querySelector('.chevron');
const teacherButton = document.querySelector('.teachers-btn');
const teachers = [
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Fonder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Fonder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Fonder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Fonder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Fonder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Fonder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
];

function displayNavigation() {
  const nav = document.querySelector('.navigation');
  nav.classList.toggle('display-nav');
}

function generateTeachers(start, number) {
  const teachersContainer = document.querySelector('#teachers-container');
  for (let i = start; i < number; i += 1) {
    teachersContainer.innerHTML += `
      <div class="teachers-card flex">
      <img src="media/chess-board.png" alt="" class="trainer-deco">
        <img src="${teachers[i].image}" alt="" class="teachers-img">
        <div class="teachers-info flex column">
          <h3 class="teachers-name">${teachers[i].name}</h3>
          <h4 class="teachers-occ" >${teachers[i].occupation}</h4>
          <hr>
          <p class="teachers-para">${teachers[i].info}</p>
        </div>
      </div>`;
  }
}

function widthTester() {
  if (window.innerWidth >= 768) {
    document.getElementById('teachers-container').innerHTML = '';
    generateTeachers(0, teachers.length);
  } else {
    document.getElementById('teachers-container').innerHTML = '';
    generateTeachers(0, 2);
    chevron.classList.remove('up');
    moreLess.innerHTML = 'MORE ';
  }
}

function deleteTeachers(start, number) {
  document.querySelectorAll(`#teachers-container > div:nth-last-child(-n+${number - 2})`).forEach((n) => {
    n.parentNode.removeChild(n);
  });
}

function teachersChecker() {
  if (moreLess.innerHTML === 'MORE ') {
    generateTeachers(2, teachers.length);
    moreLess.innerHTML = 'LESS ';
  } else {
    deleteTeachers(2, teachers.length);
    moreLess.innerHTML = 'MORE ';
  }
  chevron.classList.toggle('up');
}

menu.addEventListener('click', displayNavigation);
xmark.addEventListener('click', displayNavigation);
teacherButton.addEventListener('click', teachersChecker);
window.addEventListener('resize', widthTester);
window.addEventListener('load', widthTester);
