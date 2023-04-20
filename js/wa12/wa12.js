//Problem 1

const mary =  {
    "name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise": true
}

const sam = {
    "name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise": true
}

const bill = {
    "name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise": false
}

console.log(mary)
console.log(sam)
console.log(bill)

//Problem 2
const company = {
    "companyName": " www.techstars.site",
    "website": "www.techstars.site",
    "employees": [mary,sam,bill]       
}

console.log(company)

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
const emps = company.employees
console.log(emps)

var sum = 0
for (let i = 0; i < emps.length; i++) {
    sum += emps[i].salary
}
console.log("Total salry is " + sum)

//Problem 5


for (let i = 0; i < emps.length; i++) {
    if (emps[i].raise == true) {
        add = emps[i].salary*.1
        newSal = emps[i].salary + add
        console.log(emps[i].name + "'s new Salary is " + newSal)
        emps[i].raise = false
    }
}

//Problem 6

company.wfh = ["Anna","Sam"]
const home = company.wfh

for (let i = 0; i < emps.length; i++) {
    emps[i].wfh = false
    if (home.includes(emps[i].name)){
        emps[i].wfh = true
    }
    console.log("Working from home " + emps[i].name + emps[i].wfh)
 }
