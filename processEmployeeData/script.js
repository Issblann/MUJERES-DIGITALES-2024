const employee1 = {
  name: 'John Doe',
  salary: 40000,
  age: 25,
  averageCalifications: [100, 100, 90, 92, 99],
};

const employee2 = {
  name: 'Jane Doe',
  salary: 80000,
  age: 29,
  averageCalifications: [90, 95, 87, 60, 70],
};
function processEmployeeData(employee) {
  let employeeResult = {
    name: employee.name,
    elegibleForBonus: null,
    averageCalifications: null,
    performanceRange: null,
  };
  if (employee.salary <= 50000) {
    employeeResult.elegibleForBonus = true;
  } else {
    employeeResult.elegibleForBonus = false;
  }

  const sumOfCalifications = employee.averageCalifications.reduce(
    (acc, calification) => acc + calification,
    0
  );

  employeeResult.averageCalifications =
    sumOfCalifications / employee.averageCalifications.length;

  if (
    employeeResult.averageCalifications >= 90 &&
    employeeResult.averageCalifications <= 100
  ) {
    employeeResult.performanceRange = 'A';
  } else if (
    employeeResult.averageCalifications >= 80 &&
    employeeResult.averageCalifications <= 89
  ) {
    employeeResult.performanceRange = 'B';
  } else if (
    employeeResult.averageCalifications >= 70 &&
    employeeResult.averageCalifications <= 79
  ) {
    employeeResult.performanceRange = 'C';
  } else if (
    employeeResult.averageCalifications >= 60 &&
    employeeResult.averageCalifications <= 69
  ) {
    employeeResult.performanceRange = 'D';
  } else {
    employeeResult.performanceRange = 'F';
  }

  const dataJSON = JSON.stringify(employeeResult);
  console.log(dataJSON);
}

processEmployeeData(employee1);
processEmployeeData(employee2);
