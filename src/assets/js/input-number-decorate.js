'use strict';

const numberFromBtnEl = document.querySelector('.cargo__input-temperature-from');
const numberToBtnEl = document.querySelector('.cargo__input-temperature-to');

const onNumberInputBtnChange = (ev) => {
    const target = ev.target;
    if(target.id === 'input-temperature-from') {
        (target.value.charAt(0) !== '-') ? target.value = '-' + target.value : false;
    }
    else {
        (target.value.charAt(0) !== '+') ? target.value = '+' + target.value : false;
    }
}

numberFromBtnEl.addEventListener('change', onNumberInputBtnChange);
numberToBtnEl.addEventListener('change', onNumberInputBtnChange);
