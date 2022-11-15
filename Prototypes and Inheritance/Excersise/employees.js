function solve() {
    class Employee {
        tasks = [];
        constructor(name, age, salary) {
            this.name = name;
            this.age = age;
            this.salary = salary ? salary : 0;
        }
        work() {
            console.log(this.tasks[0]);
            this.tasks.push(this.tasks.shift());
        }
        collectSalary() {
            let total = this.dividend ? this.salary + this.dividend : this.salary;
            console.log(`${this.name} received ${total} this month.`);
        }
    }
    class Junior extends Employee {
        tasks = [`${this.name} is working on a simple task.`];
        constructor(name, age, salary) {
            super(name, age, salary);
        }
    }
    class Senior extends Employee {
        tasks = [
            `${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`,
        ];
        constructor(name, age, salary) {
            super(name, age, salary);
        }
    }

    class Manager extends Employee {
        tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];
        constructor(name, age, salary, dividend) {
            super(name, age, salary);
            this.dividend = dividend ? dividend : 0;
        }
    }
    return { Employee, Junior, Senior, Manager };
}
const classes = solve();
const junior = new classes.Junior("Ivan", 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior("Alex", 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager("Tom", 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
