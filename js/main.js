const btnOpenForm = document.querySelector('.btn_open-form');
const body = document.querySelector('body');
const formBox = document.querySelector('.form-service__box');
const inputs = document.querySelectorAll('.form-service__input');
const btnFormSend = document.querySelector('.btn_form-service');
const btnCloseForm = document.querySelector('.form-service__close-btn');
const overlay = document.querySelector('.overlay');

if (btnOpenForm) {
    btnOpenForm.addEventListener('click', () => {
        formBox.classList.add('form-service__box_open')
        inputs.forEach(input => {
            input.setAttribute('tabindex', '1')
        })
        btnFormSend.setAttribute('tabindex', '1')
        btnCloseForm.setAttribute('tabindex', '1')
        body.classList.add('no-scroll')
        overlay.classList.remove('overlay_hidden')
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
        body.classList.remove('no-scroll')
        overlay.classList.add('overlay_hidden')
    })
}
if (overlay) {
    overlay.addEventListener('click', () => {
        formBox.classList.remove('form-service__box_open')
        inputs.forEach(input => {
            input.setAttribute('tabindex', '-1')
        })
        btnFormSend.setAttribute('tabindex', '-1')
        btnCloseForm.setAttribute('tabindex', '-1')
        body.classList.remove('no-scroll')
        overlay.classList.add('overlay_hidden')
    })
}

const sidebarItem = document.querySelectorAll('.sidebar__item');
const sidebarItemDesc = document.querySelectorAll('.sidebar__item-desc');
const sidebarItemName = document.querySelectorAll('.sidebar__item-name');
if (sidebarItem) {
    sidebarItem.forEach(item => { 
        
        item.addEventListener('click', () => {
            sidebarItemDesc.forEach(desc => {
                desc.classList.add('sidebar__item-desc_hidden')
                desc.style.maxHeight = 0
            })
            sidebarItemName.forEach(name => {
                name.classList.remove('sidebar__item-name_open')    
            })
            const desc = item.querySelector('.sidebar__item-desc')
            const name = item.querySelector('.sidebar__item-name')
            const computed = getComputedStyle(desc).maxHeight[0]
            if(computed >= 1) {
                desc.style.maxHeight = 0
                name.classList.remove('sidebar__item-name_open')    
            } else {
                desc.style.maxHeight = desc.scrollHeight + "px"
                name.classList.add('sidebar__item-name_open')   
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