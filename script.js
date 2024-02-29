const popup = document.querySelector('.popup');
const popupShow = document.querySelector('.popup-show_btn');
const popupHide = document.querySelector('.popup__hide');
const overlay = document.querySelector('.overlay')

const draggable = document.querySelector('.draggable');
const addInputValue = document.querySelector('.add-input__input');
const addInputBtn = document.querySelector('.add-input__btn');
let inputs = ['Гражданство', 'Дата рождения', 'Сопроводительное письмо'];


popupShow.addEventListener('click', () => {
    popup.classList.remove('hide');
    overlay.classList.remove('hide');
})

popupHide.addEventListener('click', () => {
    popup.classList.add('hide')
    overlay.classList.add('hide')
})


const inputsInit = () => {
    inputs.forEach((input) => {
        addInput(input)
    })
}

const addInput = (placeholder) => {
    let newInput = document.createElement('div');
    newInput.classList.add('draggable__input');
    newInput.setAttribute('draggable', true)
    
    newInput.innerHTML = `
    
    <div class="draggable__input" draggable="true">
    <div class="draggable-icon" draggable="true">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_33_5)">
    <path d="M8.65332 5.76758C8.59411 5.62484 8.57855 5.46775 8.60862 5.31617C8.6387 5.16459 8.71305 5.02534 8.82227 4.91602L11.9473 1.79102C12.0198 1.71838 12.106 1.66075 12.2008 1.62144C12.2957 1.58212 12.3973 1.56189 12.5 1.56189C12.6027 1.56189 12.7043 1.58212 12.7992 1.62144C12.894 1.66075 12.9802 1.71838 13.0527 1.79102L16.1777 4.91602C16.2871 5.02528 16.3616 5.16454 16.3918 5.31617C16.422 5.4678 16.4065 5.62497 16.3474 5.76781C16.2882 5.91064 16.188 6.0327 16.0594 6.11853C15.9308 6.20437 15.7796 6.25012 15.625 6.25H13.2813V9.375C13.2813 9.5822 13.1989 9.78091 13.0524 9.92743C12.9059 10.0739 12.7072 10.1562 12.5 10.1562C12.2928 10.1562 12.0941 10.0739 11.9476 9.92743C11.8011 9.78091 11.7188 9.5822 11.7188 9.375V6.25H9.375C9.22049 6.24997 9.06945 6.20412 8.94099 6.11825C8.81254 6.03238 8.71243 5.91034 8.65332 5.76758ZM15.625 18.75H13.2813V15.625C13.2813 15.4178 13.1989 15.2191 13.0524 15.0726C12.9059 14.9261 12.7072 14.8437 12.5 14.8437C12.2928 14.8437 12.0941 14.9261 11.9476 15.0726C11.8011 15.2191 11.7188 15.4178 11.7188 15.625V18.75H9.375C9.2204 18.7499 9.06923 18.7956 8.94064 18.8815C8.81205 18.9673 8.71182 19.0894 8.65264 19.2322C8.59346 19.375 8.57799 19.5322 8.60818 19.6838C8.63838 19.8355 8.71289 19.9747 8.82227 20.084L11.9473 23.209C12.0198 23.2816 12.106 23.3392 12.2008 23.3786C12.2957 23.4179 12.3973 23.4381 12.5 23.4381C12.6027 23.4381 12.7043 23.4179 12.7992 23.3786C12.894 23.3392 12.9802 23.2816 13.0527 23.209L16.1777 20.084C16.2871 19.9747 16.3616 19.8355 16.3918 19.6838C16.422 19.5322 16.4065 19.375 16.3474 19.2322C16.2882 19.0894 16.188 18.9673 16.0594 18.8815C15.9308 18.7956 15.7796 18.7499 15.625 18.75ZM23.209 11.9473L20.084 8.82227C19.9747 8.71288 19.8355 8.63838 19.6838 8.60818C19.5322 8.57798 19.375 8.59346 19.2322 8.65264C19.0894 8.71182 18.9673 8.81205 18.8815 8.94064C18.7956 9.06923 18.7499 9.22039 18.75 9.375V11.7188H15.625C15.4178 11.7188 15.2191 11.8011 15.0726 11.9476C14.9261 12.0941 14.8438 12.2928 14.8438 12.5C14.8438 12.7072 14.9261 12.9059 15.0726 13.0524C15.2191 13.1989 15.4178 13.2812 15.625 13.2812H18.75V15.625C18.7499 15.7796 18.7956 15.9308 18.8815 16.0594C18.9673 16.1879 19.0894 16.2882 19.2322 16.3474C19.375 16.4065 19.5322 16.422 19.6838 16.3918C19.8355 16.3616 19.9747 16.2871 20.084 16.1777L23.209 13.0527C23.2816 12.9802 23.3392 12.894 23.3786 12.7992C23.4179 12.7043 23.4381 12.6027 23.4381 12.5C23.4381 12.3973 23.4179 12.2957 23.3786 12.2008C23.3392 12.106 23.2816 12.0198 23.209 11.9473ZM9.375 13.2812C9.5822 13.2812 9.78092 13.1989 9.92743 13.0524C10.0739 12.9059 10.1563 12.7072 10.1563 12.5C10.1563 12.2928 10.0739 12.0941 9.92743 11.9476C9.78092 11.8011 9.5822 11.7188 9.375 11.7188H6.25V9.375C6.25013 9.22039 6.20437 9.06923 6.11854 8.94064C6.0327 8.81205 5.91064 8.71182 5.76781 8.65264C5.62498 8.59346 5.4678 8.57798 5.31617 8.60818C5.16454 8.63838 5.02528 8.71288 4.91602 8.82227L1.79102 11.9473C1.71838 12.0198 1.66076 12.106 1.62144 12.2008C1.58213 12.2957 1.56189 12.3973 1.56189 12.5C1.56189 12.6027 1.58213 12.7043 1.62144 12.7992C1.66076 12.894 1.71838 12.9802 1.79102 13.0527L4.91602 16.1777C5.02528 16.2871 5.16454 16.3616 5.31617 16.3918C5.4678 16.422 5.62498 16.4065 5.76781 16.3474C5.91064 16.2882 6.0327 16.1879 6.11854 16.0594C6.20437 15.9308 6.25013 15.7796 6.25 15.625V13.2812H9.375Z" fill="#9098B4"/>
    </g>
    <defs>
    <clipPath id="clip0_33_5">
    <rect width="25" height="25" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    </div>
    <input type="text" class="popup__input popup__input--draggable" placeholder="${placeholder ? placeholder : addInputValue.value}">
    <div class="delete-input-btn">
    <img src="images/trash.svg" width="20" height="20" class="delete-icon" alt="Удалить">
    </div>
    </div>
    `
    draggable.appendChild(newInput)

    const deleteInputBtn = newInput.querySelector('.delete-input-btn');
    deleteInputBtn.addEventListener('click', () => {
        deleteInput(newInput);
    });

    addInputValue.value = ''
}

const deleteInput = (element) => {
    draggable.removeChild(element);
    inputs = inputs.filter(input => input !== element.querySelector('input').placeholder);
};

addInputBtn.addEventListener('click', () => {
    if(addInputValue.value != '') {
        inputs.push(addInputValue.value);
        addInput()
    } else {
        addInputValue.classList.add('warning')
    }
})

addInputValue.addEventListener('input', () => {
    addInputValue.classList.remove('warning')
})

inputsInit()

new Sortable(draggable, {
    animation: 300
});
