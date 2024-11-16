const fs = require("fs");

const Schema = require("./employees_pb");

const hussein = new Schema.Employee();
hussein.setId(1001);
hussein.setName("Hussein");
hussein.setSalary(1020);

const ahmed = new Schema.Employee();
ahmed.setId(1002);
ahmed.setName("Ahmed");
ahmed.setSalary(2000);

const rick = new Schema.Employee();
rick.setId(1003);
rick.setName("Rick");
rick.setSalary(3000);

const employees = new Schema.Employees();
employees.addEmployees(hussein);
employees.addEmployees(ahmed);
employees.addEmployees(rick);

const bytes = employees.serializeBinary();

fs.writeFileSync("employeesbinary", bytes);

const employees_2 = Schema.Employees.deserializeBinary(bytes);

console.log("employees_2 " + employees_2.toString());

/* 

Pros:
    Having a schema, because it's a structured.    
        Allows for optimizations
    Compact size
        Small memory used for store
        Faster to transfer through network
    Language neutral
        Compiler allows:
            To generate the code in any language supported from the .proto file

Cons: 
    It's more time consumming to set up specially if you know your language
    Bugs:
        The auto generated code may contain bugs and you have to dissect and fix the code.
    Schema may not be desirable:
        Sometimes in small applications schemas are an overkill

*/