class Employee {
  constructor(name, pay, role, level, branch, experience, nationality) {
    this.name = name;
    this.pay = pay;
    this.role = role;
    this.level = level;
    this.branch = branch;
    this.experience = experience;
    this.nationality = nationality;
  }
}

class SeniorEmployee extends Employee {
  constructor(name, role, branch, nationality) {
    super(name, 500_000, role, "Senior", branch, 6, nationality);
  }
}

const employee1 = new Employee(
  `Oluwafemi Olatubosun`,
  ` $500k`,
  `Software Engineer`,
  `Senior`,
  ` Dubai`,
  `6 years`,
  `Nigerian`
);

console.log(employee1.pay);

const seniorStaff = new SeniorEmployee(
  "Inioluwa Oyetunji",
  "Engineer",
  "Indonesia",
  "Nigerian"
);

console.log(seniorStaff.pay);
