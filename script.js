function button() {
    const container = document.querySelector('.container');
    const button = document.createElement('button');
    const paragraph = document.querySelector('.paragraph');
    button.textContent = 'Кнопка'
    button.setAttribute('type', 'button')
    container.append(button)

    button.addEventListener('click', () => {
        paragraph.classList.toggle('paragraph--blue')
    })
}

button()


function simulateAsync(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Асинхронная операция была выполнена спустя ${seconds} секунд`)
        }, seconds * 1000)
    })
}

simulateAsync(1).then(message => {
    document.querySelector('.async-message').textContent = `${message}`
})

function counter(value) {
    for (let number = 0; number < value; number++) {
        setTimeout(() => {
            document.querySelector('.counter').textContent += `${number} `
        }, 1000)
    }
}

counter(5)


// Задача 4. Что выполнится быстрее?

console.log('Start');
setTimeout(() => {
    console.log('Timeout');
    }, 0);
Promise.resolve().then(() => {
    console.log('Promise');
});
console.log('End');


/* Start, End, Promise, Timeout

Start и End выводятся быстрее, потому что это синхронный код, который моментально
обрабатывается

Promise и Timeout - это асинхронные операции;

Но Promise выполняется быстрее из-за того, что
он является микрозадачей, которая выполняется после того как стек будет пуст

Timeout - это макрозадача, которая выполнится в конце

 */
