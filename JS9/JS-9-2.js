function newTask() {
  console.log("========================New Task===========================");
}

class Employee {
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this._salary = salary;
  }
  //4. Добавление валидации для полей сотрудника в сеттеры:
  //Employee:
  //firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
  //profession — строка, не может быть пустой, только латинские буквы и пробелы.
  //salary — число, должно быть больше 0 и меньше 10000.
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!/^[a-zA-Z]{2,50}$/.test(value)) {
      throw new Error(
        "Имя должно быть строкой от 2 до 50 символов, только латинские буквы."
      );
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!/^[a-zA-Z]{2,50}$/.test(value)) {
      throw new Error(
        "Фамилия должна быть строкой от 2 до 50 символов, только латинские буквы."
      );
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!/^[a-zA-Z\s]+$/.test(value) || value.trim() === "") {
      throw new Error(
        "Профессия должна быть строкой, не может быть пустой, только латинские буквы и пробелы."
      );
    }
    this._profession = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (value <= 0 || value >= 10000) {
      throw new Error("Зарплата должна быть числом больше 0 и меньше 10000.");
    }
    this._salary = value;
  }

  getFullName() {
    return `${this.firstName}, ${this.lastName}`;
  }
}

class Company {
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this._employees = [];
  }

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

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this._employees.length}`;
  }

  //1. Реализуйте метод findEmployeeByName(firstName: string) в классе Company, который возвращает объект сотрудника, если такой найден.
  findEmployeeByName(firstName) {
    return this._employees.find((employee) => employee.firstName === firstName);
  }

  //2. Реализуйте метод removeEmployee(firstName) в классе Company, который удаляет сотрудника по имени.
  //Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
  // Для корретной работы создайте дополнительно приватный метод getEmployeeIndex(firstName), и используйте его в removeEmployee
  removeEmployee(firstName) {
    const index = this.getEmployeeIndex(firstName);
    if (index !== -1) {
      this._employees.splice(index, 1);
    } else {
      console.error(`Сотрудник с именем ${firstName} не найден.`);
    }
  }

  getEmployeeIndex(firstName) {
    return this._employees.findIndex(
      (employee) => employee.firstName === firstName
    );
  }

  //3. Добавьте метод getTotalSalary() в классе Company, который возвращает сумму всех зарплат сотрудников.
  getTotalSalary() {
    return this._employees.reduce(
      (total, employee) => total + employee.salary,
      0
    );
  }
}

// Проверка
const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

const company = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
newTask();
console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
newTask();
company.removeEmployee("John");
console.log(company.getEmployees()); // [Employee, Employee]
