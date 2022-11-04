class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        if ([...arguments].some((a) => a === null || a === undefined || a === "") || salary < 0) {
            throw new Error("Invalid input!");
        }
        if (!Object.keys(this.departments).includes(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name: name, salary: salary, position: position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let averageSalary = {};
        let totalSalary = 0;
        let countWorkersInDepartment = 0;
        Object.keys(this.departments).forEach((x) => {
            Object(this.departments[x]).forEach((y) => {
                totalSalary += y.salary;
                countWorkersInDepartment++;
            });
            averageSalary[x] = totalSalary / countWorkersInDepartment;
        });
        let bestDepartment = Object.keys(averageSalary).reduce((a, b) => (averageSalary[a] > averageSalary[b] ? a : b));
        let result = `Best Department is: ${bestDepartment}\n`;
        result += `Average salary: ${Number(averageSalary[bestDepartment]).toFixed(2)}`;
        this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        Object(this.departments[best]).forEach((x) => {
            result += `\n${x.name} ${x.salary} ${x.position}`;
        });
        return result;
    }
}
