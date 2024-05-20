const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

const prompt = require('prompt-sync')();
let nameEmployee = prompt("Enter employee name : ");

function employeeName(name) {
    if (employees.hasOwnProperty(name)) {
        // let employee = employees[name];
        // console.log(`Name: ${name}, salary: ${employee.salary}, address: ${employee.address.district}, ${employee.address.province} `)
        console.log(`Name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].address.district}, ${employees[name].address.province} `)
    }else {
        console.log('Not Found')
    }
}

employeeName(eName)