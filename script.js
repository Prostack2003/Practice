// Задача 1. Добавить пункт к выпадающему списку

const select = document.querySelector('#genres')
let option = new Option('Классика', 'classic', true, true)
select.append(option)
console.log(select.options)

// Задача 1. Добавить пункт к выпадающему списку
