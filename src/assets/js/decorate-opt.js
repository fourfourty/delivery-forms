'use strict';

const radioLabelEl = document.querySelectorAll('.time__label');
const selectsEl = [...document.querySelectorAll('.choices__inner')];

const decorateRadioLabel = (collect) => {
    const radioLabelArr = [...collect];
    radioLabelArr.forEach((label) => {
        if(window.innerWidth < 576 && label.textContent.length > 15) {
            label.textContent = label.textContent.slice(0,15);
        }
        else {
            return false;
        }
    })
}

decorateRadioLabel(radioLabelEl);

selectsEl.forEach( (el) => el.addEventListener('change', (ev) => {
        const parentEL = [...ev.target.parentNode.children];
        parentEL.forEach((el) => {
            if(el.closest('.choices__list')) {
                let selectable = el.children[0];
                console.log(selectable)
                if(selectable.textContent.length > 20 ) {
                    selectable.textContent = selectable.textContent.slice(0,15);
                    selectable.classList.add('gradient');
                }
            }   
        }) 
    }
))