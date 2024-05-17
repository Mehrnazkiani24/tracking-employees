const mysql = require("mysql2")
const inquirer = require("inquirer")
require("console.table")

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'Luvmee1234',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);


function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: [
                "View Department",
                "View role",
                "View Employee",
                "View Employee Detail",
                "Add Department",
                "Add role",
                "Add Employee",
                "Update Employee Role",
                "Exit App",
            ]
        }
    ]).then(({ options }) => {
        switch (options) {
            case "View Department":
                viewDepartment();
                break;
            case "View role":
                ViewRole();
                break;
            case "View Employee":
                ViewEmployee();
                break;
            case "View Employee Detail":
                ViewEmployeeDetail();
                break;
            case "Add Department":
                AddDepartment();
                break;
            case "Add role":
                AddRole();
                break;
            case "Add Employee":
                AddEmployee();
                break;
            case "Update Employee Role":
                UpdateEmployeeRole();
                break;
            default:
                db.end();
                process.exit(0);


        }
    })
}


function viewDepartment() {
    db.query("select * from department;", function (err, result) {
        if (err) throw err;
        console.table(result)
        init()
    })
}





function ViewRole() {
    db.query("select * from role;", function (err, result) {
        if (err) throw err;
        console.table(result)
        init()
    })
}
function ViewEmployee() {
    db.query("select * from employee;", function (err, result) {
        if (err) throw err;
        console.table(result)
        init()
    })
}
function ViewEmployeeDetail() {
    db.query('select emp.id, emp.first_name, emp.last_name, role.title,role.salary, d.name AS "Department Name" from employee emp LEFT JOIN role ON emp.role_id = role.id LEFT JOIN department d  ON role.department_id = d.id ORDER BY emp.first_name;',
        function (err, result) {
            if (err) throw err;
            console.table(result)
            init()
        })
}

function AddDepartment(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Department name: ",
            name:"dname"
        }
    ]).then(({dname}) => {
        db.query("INSERT INTO department (name) VALUES (?);",dname,function(err,result){if(err) throw err;
            console.log(result)
            init()
        })
    })
}
function AddRole(){
    inquirer.prompt([
        {
            type:"title",
            message:"Enter Department name: ",
            name:"dname"
        },
        {
            type:"salary",
            message:"Enter Department name: ",
            name:"dname"
        },
        {
            type:"departmet",
            message:"Enter Department name: ",
            name:"dname"
        }
    ]).then(({dname}) => {
        db.query("INSERT INTO department (name) VALUES (?);",dname,function(err,result){if(err) throw err;
            console.log(result)
            init()
        })
    })
}

init()