// Define your employees array with names and salaries
const employees = [
  {
    fullName: "Ahmad Basha",
    salary: 2500,
  },
  {
    fullName: "Yara Saddam",
    salary: 1500,
  },
  {
    fullName: "Bahaa Joho",
    salary: 2000,
  },
  {
    fullName: "Rand Mohanad",
    salary: 1800,
  },
];

// Function to generate a unique employee ID
function generateEmployeeId() {
  return Math.floor(Math.random() * 9000) + 1000;
}

// Function to calculate the level based on salary
function calculateLevel(salary) {
  if (salary >= 1500) {
    return "Senior";
  } else if (salary >= 1000) {
    return "Mid-Senior";
  } else {
    return "Junior";
  }
}

function renderEmployees() {
  const employeeTable = document.getElementById("employee-table");
  const tbody = document.createElement("tbody");

  employees.forEach((employee) => {
    const row = document.createElement("tr");

    const employeeId = generateEmployeeId();
    const employeeDepartment = "Department";
    const employeeLevel = calculateLevel(employee.salary);

    const employeeName = document.createElement("td");
    employeeName.textContent = employee.fullName;
    row.appendChild(employeeName);

    const employeeIdElem = document.createElement("td");
    employeeIdElem.textContent = employeeId;
    row.appendChild(employeeIdElem);

    const employeeDepartmentElem = document.createElement("td");
    employeeDepartmentElem.textContent = employeeDepartment;
    row.appendChild(employeeDepartmentElem);

    const employeeLevelElem = document.createElement("td");
    employeeLevelElem.textContent = employeeLevel;
    row.appendChild(employeeLevelElem);

    const employeeSalary = document.createElement("td");
    employeeSalary.textContent = `$${employee.salary}`;
    row.appendChild(employeeSalary);

    tbody.appendChild(row);
  });

  employeeTable.appendChild(tbody);
}

renderEmployees();