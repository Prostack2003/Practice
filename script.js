// Задача 1. Исчезновение элемента-текста

let button = document.getElementById('hider');
let textElement = document.getElementById('text');

button.addEventListener('click', () => {
    textElement.style.display = 'none';
})

// Задача 1. Исчезновение элемента-текста

// Задача 2. Спрятать кнопку

let buttonElement = document.querySelector('.button');

buttonElement.onclick = function () {
    this.style.display = 'none';
}

// Задача 2. Спрятать кнопку

// Задача 3. Выпадающее меню

let menu = document.querySelector(".list-menu");
let menuButton = document.querySelector(".menu-button")
let menuImage = document.querySelector(".menu-button-img");

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('list-menu--hidden');
        menuImage.classList.toggle('menu-button-img--hidden');
    })
// Задача 3. Выпадающее меню

// Задача 4. Карусель

let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let listImage = document.querySelector(".list-image");

prevButton.addEventListener('click', () => {
    let marginLeft = parseInt(listImage.style.marginLeft) || 0;
    if (marginLeft === 0) {
        listImage.style.marginLeft = -910 + 'px';
    } else if (marginLeft < 0) {
        listImage.style.marginLeft = (marginLeft + 130) + 'px';
    }
});

nextButton.addEventListener('click', () => {
    let marginLeft = parseInt(listImage.style.marginLeft) || 0;
    if (marginLeft <= -910) {
        listImage.style.marginLeft = 0 + 'px';
    } else {
        listImage.style.marginLeft = (marginLeft - 130) + 'px';
    }
});

// Задача 4. Карусель

// Задача 5. Делегирование списка

let listElement = document.querySelector(".tree");

listElement.addEventListener('click', (event) => {
    let target = event.target;
    for (let elem of target.children) {
        if (elem.style.display === 'none') {
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
    }
});

// Задача 5. Делегирование списка
