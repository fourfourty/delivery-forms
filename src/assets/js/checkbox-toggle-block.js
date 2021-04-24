'use strict';

const checkboxBlockEL = document.querySelector('.js-checkbox-container');
const temperatureBlockEL = document.querySelector('.js-temperature');

const switchTemperatureBlock = (ev) => {
    if(ev.target.tagName === 'INPUT' && ev.target.checked) {
        temperatureBlockEL.classList.remove('hide')
    }
    else {
        temperatureBlockEL.classList.add('hide')
    }
}
checkboxBlockEL.addEventListener('click',switchTemperatureBlock);