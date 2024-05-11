USE employee_db;
INSERT INTO department (name)
VALUES ("customer service"),
       ("sales"),
       ("marketing"),
       ("servicing"),
       ("operations");

INSERT INTO role (tile,salary,department_id)
VALUES ( "Manager of customer service!",1248728,1),
       ( "Manager of sales!",1267468,2),
       ("Manager of Marketing!",8787673,3),
       ("Manager of Servicing!",7364847,4),
       ("Manager of Operations!",7364746,5);
         
    INSERT INTO EMPLOYEE ( first_name, last_name, role_id)
    VALUES ("Tom","Hank",1),
    ("John","Doe",2),
    ("Sam","Lopez",3),
    ("Sara","King",4),
    ("oscar","Gomez",5);
