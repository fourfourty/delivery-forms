
import './assets/css/styles.scss';
import './assets/css/styles.scss';
import './assets/css/normalize.scss';
import  './assets/js/option-hover-effect.js';
import  './assets/js/checkbox-toggle-block';
import  './assets/js/decorate-opt';
import  './assets/js/radio-status';
import  './assets/js/input-number-decorate';

const choicesElem = document.querySelectorAll('.choices__inner');
const choicesListElem = document.querySelectorAll('.choices__list');


window.addEventListener('load', () => {
    const choicesArr = [choicesElem[2],choicesListElem[7],choicesListElem[8]];
        choicesArr.forEach((elem) => {
            elem.classList.add('exceptionWidth');
    })
})