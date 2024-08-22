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
