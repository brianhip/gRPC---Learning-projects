const fs = require("fs");

const employees = [];
const brian = {
    "name": "Brian",
    "salary": 100,
    "id": 1001
}

const jacob = {
    "name": "jacob",
    "salary": 1000,
    "id": 1002
}
const miguel = {
    "name": "miguel",
    "salary": 1200,
    "id": 1003
}

employees.push(brian, jacob, miguel);

fs.writeFileSync("json-data.json",JSON.stringify(employees));
console.log(JSON.stringify(employees));


/*
Json is takes more memory and Protobuf uses structure data to save memory

*/