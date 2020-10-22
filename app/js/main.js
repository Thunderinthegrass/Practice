let inp = document.querySelectorAll('input');
let p = document.querySelectorAll('p');

let payment = document.querySelector('.payment').onclick = function() {
  for (let k = 0; k < inp.length; k++) {
    let a = inp[0].value;
    a = parseFloat(a.replace(/\s/g, "").replace(",", "."));
    let b = inp[1].value;
    b = parseFloat(b.replace(/\s/g, "").replace(",", "."));
    let c = a * b;
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
  }
}

let complete = document.querySelector('.complete').onclick = function() {
  for (let k = 0; k < p.length; k++) {
    inp[0].value = '';
    inp[1].value = '';
    p[k].innerHTML = '';
  }
}
