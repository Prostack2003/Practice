// 1. Создай класс Person с полями name и age и методом introduce который будем выводить сообщение приветствия

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Приветствую тебя! Твоё имя - ${this.name}, а твой возраст - ${this.age}`);
    }
}

const vladimir = new Person('Владимир', 21)
vladimir.introduce()

// 2. Создай класс MathUtils со статическими методами  add and subtract.

class MathUtils {
    static add(firstValue, secondValue) {
        return firstValue + secondValue;
    }

    static subtract(firstValue, secondValue) {
        return firstValue - secondValue;
    }
}

console.log(MathUtils.add(1, 2));
console.log(MathUtils.subtract(2, 1));
// 3. Создай класс для структуры данных Стэк создай методы pop и push
