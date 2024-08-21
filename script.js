// Задача 1. Исчезновение элемента-текста

const button = document.getElementById('hider');
const textElement = document.getElementById('text');

button.addEventListener('click', () => {
    textElement.style.display = 'none';
})

// Задача 1. Исчезновение элемента-текста

// Задача 2. Спрятать кнопку

const buttonElement = document.querySelector('.button');

buttonElement.onclick = function () {
    this.style.display = 'none';
}

// Задача 2. Спрятать кнопку

// Задача 3. Выпадающее меню

const menu = document.querySelector(".list-menu");
const menuButton = document.querySelector(".menu-button")
const menuImage = document.querySelector(".menu-button-img");

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('list-menu--hidden');
        menuImage.classList.toggle('menu-button-img--hidden');
    })
// Задача 3. Выпадающее меню

// Задача 4. Карусель

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const listImage = document.querySelector(".list-image");

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

const listElement = document.querySelector(".tree");

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

// Задача 6. Перехват ссылки и прерывание события

const contentsLinks = document.getElementById('contents');
const links = contentsLinks.getElementsByTagName('a');


contentsLinks.addEventListener('click', function (event) {
    let target = event.target.closest('a');
    if (target) {
        let verify = confirm('Вы хотите перейти по ссылке?')
        for (let link of links) {
            if (target.href === link.href && verify === false) {
                event.preventDefault();
            }
        }
    }
})

// Задача 6. Перехват ссылки и прерывание события
