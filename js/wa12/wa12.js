//Problem 1

const mary =  {
    "first-name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise-eligible": true
}

const sam = {
    "first-name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 400000,
    "raise-eligible": true
}

const bill = {
    "first-name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise-eligible": false
}

//Problem 2
const company = {
    "companyName": " www.techstars.site",
    "website": "www.techstars.site",
    "employees": [mary,sam,bill]       
}

//Problem 3
class Employee {
    constructor(name,department,designation,salary,raise) {
        this.name = name;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
        this.raise = raise;
    }
}

const anna = new Employee("Anna", "Tech", "Executive", 25600, true)

var employeeArray = company.employees
employeeArray.push(anna)

console.log(company)

//Problem 4

//Problem 5

//Problem 6
