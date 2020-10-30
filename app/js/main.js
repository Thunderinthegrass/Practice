// l.1-2----------------------------------------------------
let inp = document.querySelectorAll('input');
let p = document.querySelectorAll('p');

let complete = document.querySelector('.complete').onclick = function end() {
  inp[0].value = '';
  inp[1].value = '';
  for (let k = 0; k < p.length; k++) {
    p[k].innerHTML = '';
  }
}

let payment = document.querySelector('.payment').onclick = function () {
  let a = inp[0].value;
  let b = inp[1].value;


  // if (a.value == 8) {
  //   alert('Используйте запятую вместо точки');
  // }

  if (a == '' && b == '') {
    alert('Введите цену и количество');
  }
  else if (a != '' && b == '') {
    alert('Введите количество');
  }
  else if (a == '' && b != '') {
    alert('Введите цену');
  }
  else {
    a = parseFloat(a.replace(/\s/g, "").replace(",", "."));
    b = parseFloat(b.replace(/\s/g, "").replace(",", "."));
    let c = a * b;
    c = Math.floor(c * 100) / 100;

    a = String(a);
    a = a.replace(".", ",");

    b = String(b);
    b = b.replace(".", ",");

    c = String(c);
    c = c.replace(".", ",");

    p[0].innerHTML = a + 'руб.';
    p[1].innerHTML = b;
    p[2].innerHTML = c + 'руб.';
  }
}


// l-3------------------------------------------------------
window.onload = function () {

  let gameWindow = document.querySelector('.game-window');
  let start = document.querySelector('.start');
  let game = document.querySelector('.game');
  let gameInner = document.querySelector('.game-inner-1');
  let gameInner2 = document.querySelector('.game-inner-2');

  start.onclick = function () {
    gameWindow.classList.toggle('d-none');
    game.classList.remove('d-none');
    game.classList.add('d-vis');
  }

  for (let k = 0; k < 9; k++) {
    gameInner.innerHTML += '<div class="block"></div>';
    gameInner2.innerHTML += '<div class="block-x"></div>';
  }

  let div0 = document.querySelectorAll('.block');
  let divX = document.querySelectorAll('.block-x');

  function checkWin() {
    for (let k = 0; k < div0.length; k++) {

      if (div0[k].innerHTML == 'o') {
        divX[k].innerHTML = 'o';
      }
      if (divX[k].innerHTML == 'x') {
        div0[k].innerHTML = 'x';
      }

      if(div0[0].innerHTML == 'o' && div0[1].innerHTML == 'o' && div0[2].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[0].classList.add('win-bg');
        div0[1].classList.add('win-bg');
        div0[2].classList.add('win-bg');
      }
      if(div0[3].innerHTML == 'o' && div0[4].innerHTML == 'o' && div0[5].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[3].classList.add('win-bg');
        div0[4].classList.add('win-bg');
        div0[5].classList.add('win-bg');
      }
      if(div0[6].innerHTML == 'o' && div0[7].innerHTML == 'o' && div0[8].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[6].classList.add('win-bg');
        div0[7].classList.add('win-bg');
        div0[8].classList.add('win-bg');
      }
      if(div0[0].innerHTML == 'o' && div0[3].innerHTML == 'o' && div0[6].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[0].classList.add('win-bg');
        div0[3].classList.add('win-bg');
        div0[6].classList.add('win-bg');
      }
      if(div0[1].innerHTML == 'o' && div0[4].innerHTML == 'o' && div0[7].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[1].classList.add('win-bg');
        div0[4].classList.add('win-bg');
        div0[7].classList.add('win-bg');
      }
      if(div0[2].innerHTML == 'o' && div0[5].innerHTML == 'o' && div0[8].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[2].classList.add('win-bg');
        div0[5].classList.add('win-bg');
        div0[8].classList.add('win-bg');
      }
      if(div0[0].innerHTML == 'o' && div0[4].innerHTML == 'o' && div0[8].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[0].classList.add('win-bg');
        div0[4].classList.add('win-bg');
        div0[8].classList.add('win-bg');
      }
      if(div0[2].innerHTML == 'o' && div0[4].innerHTML == 'o' && div0[6].innerHTML == 'o') {
        playersTurn.innerHTML = 'Выиграл игрок О';
        div0[2].classList.add('win-bgX');
        div0[4].classList.add('win-bgX');
        div0[6].classList.add('win-bgX');
      }

      if(divX[0].innerHTML == 'x' && divX[1].innerHTML == 'x' && divX[2].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[0].classList.add('win-bgX');
        divX[1].classList.add('win-bgX');
        divX[2].classList.add('win-bgX');
      }
      if(divX[3].innerHTML == 'x' && divX[4].innerHTML == 'x' && divX[5].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[3].classList.add('win-bgX');
        divX[4].classList.add('win-bgX');
        divX[5].classList.add('win-bgX');
      }
      if(divX[6].innerHTML == 'x' && divX[7].innerHTML == 'x' && divX[8].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[6].classList.add('win-bgX');
        divX[7].classList.add('win-bgX');
        divX[8].classList.add('win-bgX');
      }
      if(divX[0].innerHTML == 'x' && divX[3].innerHTML == 'x' && divX[6].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[0].classList.add('win-bgX');
        divX[3].classList.add('win-bgX');
        divX[6].classList.add('win-bgX');
      }
      if(divX[1].innerHTML == 'x' && divX[4].innerHTML == 'x' && divX[7].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[1].classList.add('win-bgX');
        divX[4].classList.add('win-bgX');
        divX[7].classList.add('win-bgX');
      }
      if(divX[2].innerHTML == 'x' && divX[5].innerHTML == 'x' && divX[8].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[2].classList.add('win-bgX');
        divX[5].classList.add('win-bgX');
        divX[8].classList.add('win-bgX');
      }
      if(divX[0].innerHTML == 'x' && divX[4].innerHTML == 'x' && divX[8].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[0].classList.add('win-bgX');
        divX[4].classList.add('win-bgX');
        divX[8].classList.add('win-bgX');
      }
      if(divX[2].innerHTML == 'x' && divX[4].innerHTML == 'x' && divX[6].innerHTML == 'x') {
        playersTurn.innerHTML = 'Выиграл игрок X';
        divX[2].classList.add('win-bgX');
        divX[4].classList.add('win-bgX');
        divX[6].classList.add('win-bgX');
      }
    }
  }



  let move = 0;
  let playersTurn = document.querySelector('.players-turn');

  game.onclick = function (event) {
    console.log(event);
    if (event.target.className == 'block') {
      if (move % 2 == 0 && event.target.innerHTML == '') {
        event.target.innerHTML = 'o';
        playersTurn.innerHTML = 'Ходит игрок Х';
        playersTurn.classList.add('players-turn-title-color');
      }
      else if (move % 2 != 0 && event.target.innerHTML == '') {
        event.target.innerHTML = '';
      }
      move++;

      checkWin();
    }

    if (event.target.className == 'block-x') {
      if (move % 2 == 0 && event.target.innerHTML == '') {
        event.target.innerHTML = '';
      }
      else if (move % 2 != 0 && event.target.innerHTML == '') {
        event.target.innerHTML = 'x';
        playersTurn.innerHTML = 'Ходит игрок О';
        playersTurn.classList.remove('players-turn-title-color');
      }
      move++;
      checkWin();
    }
  }


  let closeBtn = document.querySelector('.close-btn').onclick = function () {
    gameWindow.classList.toggle('d-none');
  }


}

// l-4----------------------------------

// Equipment
let priceL4 = document.querySelector('.price-l4');
let priceDop = document.querySelector('.price-dop-l4');
let inpL4 = document.querySelectorAll('.inp-l4');

let btnL4 = document.querySelector('.btn-l4').onclick = function() {

  priceL4.innerHTML = 431 + ' ' + 500 + ',00 р.'
  let sum = 0;

    if (inpL4[0].checked) {
      sum += 4500;
    }
    if (inpL4[1].checked) {
      sum += 12000;
    }
    if (inpL4[2].checked) {
      sum += 12000;
    }
    if (inpL4[3].checked) {
      sum += 1200;
    }
  priceDop.innerHTML = sum + ',00 р.';
}

// Photo--------------------------------------------
let inp_l4 = document.querySelectorAll('.inp_l4');
let sumPhot = document.querySelector('.sum-phot_'); 

for (let k = 0; k < inp_l4.length; k++) {
  inp_l4[k].onclick = function() {
    if (inp_l4[k].checked) {
      btn__l4.classList.add('btn-bg');
    }
  }
}

let btn__l4 = document.querySelector('.btn__l4');

btn__l4.onclick = function() {
  let amount = inp_l4[3].value;
    if (inp_l4[0].checked) {
      sumPhot.innerHTML = amount * 3.50 + ' руб.';
    }
    if (inp_l4[1].checked) {
      sumPhot.innerHTML = amount * 4.50 + ' руб.';
    }
    if (inp_l4[2].checked) {
      sumPhot.innerHTML = amount * 14.50 + ' руб.';
    }
}

// жалюзи

let jHeight = document.querySelector('.jalousie-height');
let jWidth = document.querySelector('.jalousie-width');
let btnL4J = document.querySelector('.btn__l4-j');
let sumL4J = document.querySelector('.sum-l4-j');
let opt = document.querySelector('#opt');

btnL4J.onclick = function() {
  let area = jHeight.value * jWidth.value / 10000;
  let value = opt.value;
  let valueArea = value * area;
  sumL4J.innerHTML = 'площадь: ' + area + 'м.' + '<br>' + 'Стоимость: ' + valueArea + ' руб.';
  
}





// Плавный скролл------------------
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


// back-to-top--------------------------------------------
function btnToTop() {
  let button = $('.btn-totop');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 100) {
      button.fadeIn();
    }
    else {
      button.fadeOut();
    }
  });

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 500);
  })
}

btnToTop();





