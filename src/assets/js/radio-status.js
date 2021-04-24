'use strict';

const radioBlockEl = document.querySelector('.time__radio-content');

const resetBtnStatusState = () => {
    let radioBlockArr = [...radioBlockEl.children];
        radioBlockArr.forEach(element => {
            if(element.classList.contains('time__radio-block')) {
                radioBlockArr = [...element.children];
                radioBlockArr.forEach((el) => {
                    (el.classList.contains('time__status_disabled')) ? el.textContent = 'НЕ ВЫБРАНО': false;
                })
            }
        });
}

const onradioStatusBtnChange = (ev) => {
    const target = event.target;
    if (target.tagName === 'INPUT' && target.checked) {
        resetBtnStatusState();
        let parentArr = Array.from(target.parentNode.children);
        parentArr.forEach((el) => {
            if(el.classList.contains('time__status_disabled')) {
                el.textContent = 'Выбрано'
            }
        })
    }

}

radioBlockEl.addEventListener('click', onradioStatusBtnChange);
