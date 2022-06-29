const employees = [];

function Employee(name, title, salary){
    this.name = name,
    this.title = title,
    this.salary = salary,
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name}, Job Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`);
}

const jeff = new Employee("Jeff", "Manager", "100K");
const bill = new Employee("Bill", "Sales Rep", "90K");
const sarah = new Employee("Sarah", "Manager", "100K");
sarah.status = "Part Time";

jeff.printEmployeeForm();
bill.printEmployeeForm();
sarah.printEmployeeForm();