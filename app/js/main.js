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
    a = a.replace(".",",");

    b = String(b);
    b = b.replace(".",",");

    c = String(c);
    c = c.replace(".",",");

    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
  }
}

