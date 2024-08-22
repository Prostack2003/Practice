// Задача 1. Добавить пункт к выпадающему списку

const select = document.querySelector('#genres')
let option = new Option('Классика', 'classic', true, true)
select.append(option)

// Задача 1. Добавить пункт к выпадающему списку


//  Задача 2. Депозитный калькулятор с изменением в реальном времени

const form = document.querySelector('form[name=calculator]');

function updateCalculation() {
    let initial = +form.elements.money.value;
    let interest = +form.elements.interest.value / 100;
    let selectElement = form.elements['months'];
    let years = +selectElement.value / 12;

    let result = Math.round(initial * (1 + interest) ** years);

    const diagram = document.querySelector('#diagram');
    const diagramElements = diagram.querySelectorAll('th');

    for (let element of diagramElements) {
        if (element.id === 'money-before') {
            element.textContent = initial + '';
        }
        if (element.id === 'money-after') {
            element.textContent = result + '';
        }
    }

    const heightAfter = document.querySelector('#height-after');
    const initialHeight = 100;
    heightAfter.style.height = (initialHeight * result / initial) + 'px';
}

form.elements.money.addEventListener('input', updateCalculation);
form.elements.interest.addEventListener('input', updateCalculation);
form.elements.months.addEventListener('change', updateCalculation);


updateCalculation();

//  Задача 2. Депозитный калькулятор с изменением в реальном времени

//  Задача 3. Создание формы - сброс, фокус, отправка

const formSubmit = document.querySelector('#reset');
const buttonReset = document.querySelector('button[type="button"]');

buttonReset.addEventListener('click', () => {
    formSubmit.reset()
    document.querySelector('#user-error').textContent = '';
    document.querySelector('#email-error').textContent = '';
    document.querySelector('#password-error').textContent = '';
})

formSubmit.addEventListener('submit', (event) => {
    let valid = true;

    const username = formSubmit.elements['username'].value.trim();
    if (username === '') {
        document.querySelector('#user-error').textContent = '*Имя обязательно к заполнению!';
        valid = false;
    } else if (username.length <= 4) {
        document.querySelector('#user-error').textContent = '*Имя должно содержать более 4 символов!';
        valid = false;
    }

    const email = formSubmit.elements['email'].value.trim();
    if (email === '') {
        document.querySelector('#email-error').textContent = '*Почта обязательна к заполнению';
        valid = false;
    }

    const password = formSubmit.elements['password'].value.trim();
    if (password === '') {
        document.querySelector('#password-error').textContent = '*Пароль обязателен для заполнения';
        valid = false;
    } else if (password.length <= 6) {
        document.querySelector('#password-error').textContent = '*Пароль должен содержать более 6 символов';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
})


//  Задача 3. Создание формы - сброс, фокус, отправка
