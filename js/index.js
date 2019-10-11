// Calc
const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .eq').addEventListener('click', checkInfinity);
document.querySelector('.calc .clear').addEventListener('click', clear);
document.querySelector('.calc .deleteChar').addEventListener('click', deleteChar);
document.querySelector('.calc .memAdd').addEventListener('click', memAdd);
document.querySelector('.calc .mrc').addEventListener('click', mrc);
document.querySelector('.calc .oneChar .button').addEventListener('click', oneChar);

function checkInfinity() {
    const displayValue = display.value;
    if (eval(displayValue) !== Infinity) {
        display.value = eval(displayValue);
    } else {
        display.value = '';
        display.placeholder = 'Error';
    }
    ;
}

function deleteChar() {
    let exp = display.value;
    display.value = exp.substr(0, exp.length - 1);
}

function clear() {
    display.value = '';
}

function memAdd() {
    let mem = display.value;
    memMrc = mem.slice(0, mem.length);
    display.value = 'added to memory';
}

function mrc() {
   display.value = memMrc;
   }

function oneChar() {
    let char = display.value;
    //display.value = char.slice(0, 1);
}


  