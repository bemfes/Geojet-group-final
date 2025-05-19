const btnOpenForm = document.querySelector('.btn_open-form');

const formBox = document.querySelector('.form-service__box');
const inputs = document.querySelectorAll('.form-service__input');
const btnFormSend = document.querySelector('.btn_form-service');
const btnCloseForm = document.querySelector('.form-service__close-btn');
if (btnOpenForm) {
    btnOpenForm.addEventListener('click', () => {
        formBox.classList.add('form-service__box_open')
        inputs.forEach(input => {
            input.setAttribute('tabindex', '1')
        })
        btnFormSend.setAttribute('tabindex', '1')
        btnCloseForm.setAttribute('tabindex', '1')
    })
}


if (btnCloseForm) {
    btnCloseForm.addEventListener('click', () => {
        formBox.classList.remove('form-service__box_open')
        inputs.forEach(input => {
            input.setAttribute('tabindex', '-1')
        })
        btnFormSend.setAttribute('tabindex', '-1')
        btnCloseForm.setAttribute('tabindex', '-1')
    })
}

const sidebarItem = document.querySelectorAll('.sidebar__item');
if (sidebarItem) {
    sidebarItem.forEach(item => {  
        item.addEventListener('click', () => {
            const desc = item.querySelector('.sidebar__item-desc')
            const btn = item.querySelector('.sidebar__item-name')
            if (desc.style.maxHeight) {
                    desc.style.maxHeight = null
                    btn.classList.remove('sidebar__item-name_open')
                    desc.classList.add('sidebar__item-desc_hidden')
                } else {
                    desc.style.maxHeight = desc.scrollHeight + "px"
                    btn.classList.add('sidebar__item-name_open')            
        }
        })
    })

}

const swiperBox = document.querySelector('.slider-cases');
if (swiperBox) {
  const swiper = new Swiper(swiperBox, {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
  })

}