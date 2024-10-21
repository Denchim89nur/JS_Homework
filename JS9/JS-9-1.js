function newTask() {
  console.log("========================New Task===========================");
}
//1. Создайте класс Employee с полями:
//firstName — имя сотрудника (строка).
//lastName — фамилия сотрудника (строка).
//profession — профессия сотрудника (строка).
//Приватное поле salary — зарплата сотрудника (число).
class Employee {
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this._salary = salary;
  }
  //2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary.
  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  get profession() {
    return this._profession;
  }

  set profession(profession) {
    this._profession = profession;
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    this._salary = salary;
  }

  //3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.
  getFullName() {
    return `${this.firstName}, ${this.lastName}`;
  }
}

//5. Создайте класс Company с полями:
//title — название компании (строка).
//phone — телефон компании (число).
//address — адрес компании (строка).
//Приватное поле employees — массив сотрудников (пустой массив на старте).
class Company {
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this._employees = [];
  }
  //6. Реализуйте геттеры для полей title, phone, и address.
  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone) {
    this._phone = phone;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
  }
  //7. Добавьте методы:
  //addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
  //getEmployees() - возвращает массив всех сотрудников.
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this._employees.push(employee);
    } else {
      console.error(
        "Неверный тип объекта. Ожидается экземпляр класса Employee."
      );
    }
  }

  getEmployees() {
    return this._employees;
  }
  //9. Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):
  //Компания:
  //Адрес:
  //Количество сотрудников:
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this._employees.length}`;
  }
}

// Проверка работы класса Employee
const emp1 = new Employee("John", "Doe", "Developer", 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
newTask();

// Проверка работы класса Company
const company = new Company("Tech Corp", "123-456", "Main Street");
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees());
newTask();
console.log(company.getInfo());
