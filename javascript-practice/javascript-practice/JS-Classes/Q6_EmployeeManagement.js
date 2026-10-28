// Q6: Employee Management System (Classes + Object Methods)
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus percentage cannot be negative.");
        }
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 40000),
    new Employee(2, "Riya", "HR", 35000),
    new Employee(3, "Karan", "Finance", 45000),
    new Employee(4, "Neha", "IT", 50000),
    new Employee(5, "Rahul", "Support", 30000)
];

console.log("Annual salary of each employee:");
employees.forEach(employee => {
    console.log(`${employee.name}: ₹${employee.getAnnualSalary().toLocaleString("en-IN")}`);
});

employees[0].applyBonus(10);
console.log(`\nAman's annual salary after 10% monthly salary bonus: ₹${employees[0].getAnnualSalary().toLocaleString("en-IN")}`);

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(), 0
);
console.log(`\nTotal annual company payout: ₹${totalAnnualPayout.toLocaleString("en-IN")}`);
