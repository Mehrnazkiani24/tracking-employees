USE employee_db;

select * from employee;
select * frpm role;
select * from department;


select emp.id, emp.first_name, emp.last_name, role.title,role.salary, d.name AS "Department Name"
from employee emp
LEFT JOIN role ON emp.role_id = role.id
LEFT JOIN department d  ON role.department_id = d.id
ORDER BY emp.first_name;