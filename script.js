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

class Stack {
    constructor(arr) {
        this.arr = arr;
    }

    pop() {
        if (this.arr.length === 0) {
            console.log("Стэк пустой!");
        } else {
            return this.arr.pop();
        }
    }

    push(value) {
        this.arr.push(value);
    }
}

const stack = new Stack([])
console.log(stack.arr)

// 4. Наследование и переопределение метода
/*
Создайте класс Animal, у которого есть метод speak(),
выводящий сообщение "Animal is speaking".
Затем создайте класс Dog, который наследует Animal, и переопределите метод speak() так,
чтобы он выводил сообщение "Dog is barking".
Создайте экземпляр класса Dog и вызовите метод speak().
 */

class Animal {
    speak() {
        return 'Animal is speaking'
    }
}

class Dog extends Animal {
    speak() {
        return 'Dog is barking';
    }
}

const dog = new Dog();
console.log(dog.speak())


// 5. Инкапсуляция

/*
Создайте класс BankAccount, который будет моделировать банковский счет.
У класса должны быть следующие приватные свойства: balance (баланс) и публичные методы deposit(amount) (пополнение счета),
withdraw(amount) (снятие со счета) и getBalance() (получение текущего баланса).
Сделайте так, чтобы при попытке снять больше средств, чем есть на счете,
выводилось сообщение "Недостаточно средств".
 */

class BankAccount {
    constructor() {
        this._balance = 0;
    }

    set startBalance(balance) {
        this._balance = balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (this._balance < amount) {
            return 'Недостаточно средств!';
        } else {
            this._balance -= amount;
            return `Снято ${amount}, текущий баланс: ${this._balance}`;
        }
    }

    get balance() {
        return this._balance;
    }
}

const bankAccount = new BankAccount();
bankAccount.startBalance = 1000;
bankAccount.deposit(100);
bankAccount.withdraw(1000);
console.log(bankAccount.balance)

