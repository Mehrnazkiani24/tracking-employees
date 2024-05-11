USE employee_db;

select * from employee;
select * frpm role;
select * from department;


select emp.id, emp.first_name, emp.last_name, role.title,role.salary, d.name
from employee emp
LEFT JOIN role ON emp.rolde_id = role.id
LEFT JOIN department  ON role.department_id = d.id
ORDER BY emp.first_name;