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

// 6. Класс "Автомобиль"

class Car {
    _fuelLevel = 0;

    constructor(brand, model, year, fuelTankCapacity) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelTankCapacity = fuelTankCapacity;
    }

    startEngine() {
        return 'Двигатель запущен';
    }

    getCarInfo() {
        return `
        Ваш автомобиль - это ${this.brand}, ${this.model}, ${this.year} года.
        Емкость бака - ${this.fuelTankCapacity} литров.
        `;
    }

    setFuelLevel(liters) {
        if (liters < 0) {
            return 'Количество топлива не может быть отрицательным!';
        }

        if (this._fuelLevel + liters > this.fuelTankCapacity) {
            const overflow = this._fuelLevel + liters - this.fuelTankCapacity;
            this._fuelLevel = this.fuelTankCapacity;
            return `Бак заполнен. Осталось ${overflow} литров лишнего топлива, которое не влезло.`;
        }

        this._fuelLevel += liters;
        return `Заправлено ${liters} литров. Текущий уровень топлива: ${this._fuelLevel} литров.`;
    }

    getFuelLevel() {
        return `Текущий уровень топлива: ${this._fuelLevel} литров.`;
    }
}

const myCar = new Car('Lada', 'Granta', 2024, 50);

console.log(myCar.startEngine());
console.log(myCar.getCarInfo());
console.log(myCar.setFuelLevel(20));
console.log(myCar.getFuelLevel());
console.log(myCar.setFuelLevel(35));
console.log(myCar.getFuelLevel());

// 7. Класс "Электронный Кошелек"

class EWallet {
    constructor(owner, balance = 0, transactionHistory) {
        this.owner = owner;
        this.balance = balance;
        this.transactionHistory = [];
    }

    addMoney(amount) {
        if (amount <= 0) {
            return 'Сумма пополнения должна быть положительной!';
        }
        this.balance += amount;
        this.transactionHistory.push({'Баланс после пополнения': this.balance, 'Сумма Пополнения': amount})
        return `На счёт зачислено ${amount} Rub. На вашем счёте теперь ${this.balance} Rub.`;
    }

    makePayment(amount) {
        if (amount <= 0) {
            return 'Сумма платежа должна быть положительной!';
        }
        if (amount > this.balance) {
            return `Ваш баланс = ${this.balance} Rub. Недостаточно средств для выполнения платежа.`;
        }
        this.balance -= amount;
        this.transactionHistory.push({'Баланс после снятия': this.balance, 'Сумма Снятия': amount})
        return `Платёж на сумму ${amount} Rub выполнен успешно. Ваш текущий баланс = ${this.balance} Rub.`;
    }

    getBalance() {
        return `Ваш баланс = ${this.balance} Rub.`;
    }

    getTransactionHistory() {
        return this.transactionHistory;
    }
}


const myWallet = new EWallet('Владимир', 1000);

console.log(myWallet.getBalance());
console.log(myWallet.addMoney(1000));
console.log(myWallet.makePayment(1500));
console.log(myWallet.getTransactionHistory());

// 8. Класс "Employee"

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails() {
        return `Имя сотрудника - ${this.name}, Должность - ${this.position}, Зарплата - ${this.salary}`;
    }

    promote(newPosition, salaryIncrease) {
        this.position = newPosition;
        this.salary += salaryIncrease
    }
}

const employee = new Employee('John Doe', 'Developer', 50000);
console.log(employee.getDetails()); // "Имя: John Doe, Должность: Developer, Зарплата: 50000"
employee.promote('Senior Developer', 10000);
console.log(employee.getDetails()); // "Имя: John Doe, Должность: Senior Developer, Зарплата: 60000"

// 9.  Класс "LibraryBook"

class LibraryBook {
    constructor(title, author, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    borrow() {
        this.isAvailable = false;
    }

    returnBook() {
        this.isAvailable = true;
    }

    getInfo() {
        return `Название: ${this.title}, Автор: ${this.author}, Доступна: ${this.isAvailable === true ? 'Да' : 'Нет' }`
    }
}

const book = new LibraryBook('1984', 'George Orwell');
console.log(book.getInfo()); // "Название: 1984, Автор: George Orwell, Доступна: да"
book.borrow();
console.log(book.getInfo()); // "Название: 1984, Автор: George Orwell, Доступна: нет"
book.returnBook();
console.log(book.getInfo()); // "Название: 1984, Автор: George Orwell, Доступна: да"
