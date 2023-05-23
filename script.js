const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');
const moreLess = document.querySelector('.moreless');
const chevron = document.querySelector('.chevron');
const trainerButton = document.querySelector('.trainer-btn');

const teacher = [
    {
        id: 0,
        names: 'RABEDESANA Andry Narson',
        images: 'media/Me.jpg',
        occupation: 'Fonder and Teacher',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',  
    },
    {
        id: 1,
        names: 'RABEDESANA Andry Narson',
        images: 'media/Me.jpg',
        occupation: 'Fonder and Teacher',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',  
    },
    {
        id: 2,
        names: 'RABEDESANA Andry Narson',
        images: 'media/Me.jpg',
        occupation: 'Fonder and Teacher',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',  
    },
    {
        id: 3,
        names: 'RABEDESANA Andry Narson',
        images: 'media/Me.jpg',
        occupation: 'Fonder and Teacher',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',  
    },
    {
        id: 4,
        names: 'RABEDESANA Andry Narson',
        images: 'media/Me.jpg',
        occupation: 'Fonder and Teacher',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',  
    },
    {
        id: 5,
        names: 'RABEDESANA Andry Narson',
        images: 'media/Me.jpg',
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
        teachersContainer.innerHTML = `
        <div class="teachers-card flex">
          <img src="media/chess-board.png" alt="chess board" class="teachers-deco">
          <img src="${teacher[i].images}" alt="teacher image" class="teachers-img">
          <div class="teachers-info flex column">
            <h3 class="teachers-name">${teacher[i].names}</h3>
            <h4 class="teachers-occ" >${teacher[i].occupation}</h4>
            <hr>
            <p class="teachers-para">${teacher[i].info}</p>
          </div>
        </div>`;
    }
  }

  function widthTester() {
    if (window.innerWidth >= 768) {
      document.getElementById('teachers-container').innerHTML = '';
      generateTeachers(0, teacher.length);
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
        generateTeachers(2, teacher.length);
      moreLess.innerHTML = 'LESS ';
    } else {
        deleteTeachers(2, teacher.length);
      moreLess.innerHTML = 'MORE ';
    }
    chevron.classList.toggle('up');
  }

  menu.addEventListener('click', displayNavigation);
xmark.addEventListener('click', displayNavigation);
trainerButton.addEventListener('click', teachersChecker);
window.addEventListener('resize', widthTester);
window.addEventListener('load', widthTester);
