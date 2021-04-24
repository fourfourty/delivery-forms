'use strict';

import Choices from 'choices.js';

export const selectsElem = document.querySelectorAll('select');

const defaultSelects = (collect) => {
   const selectArr = [...collect];
    selectArr.forEach((select) => {
        const choices = new Choices(select , {
            searchEnabled: false,
            itemSelectText: '',
            position: false,
        });
    })
}


defaultSelects(selectsElem);