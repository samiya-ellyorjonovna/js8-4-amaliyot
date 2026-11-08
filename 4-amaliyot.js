const raqam = document.querySelector('#raqam');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

let son = 0;
plus.addEventListener('click', () => {
    son++;
    raqam.innerHTML = son;
});

minus.addEventListener('click', () => {
   
    if (son > 0) {
        son--;
        raqam.innerHTML = son;
    }
});