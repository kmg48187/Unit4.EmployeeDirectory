import express from "express";

const app = express();
export default app;
import employees from "./db/employees.js"

app.route("/").get((req, res) => {
    res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
    res.send(employees);
});

app.route("/employees/:id").get((req, res) => {
    const {id} = req.params;
    const employee = employees[+id];
    if(!employees.includes(+id)){
       return res.status(404);
    }
    res.send(employee);
});

app.route("/employees/random").get((req, res) => {
    const randomId  = Math.floor(Math.random()* employees.length);
    const randomEmployee = employees[randomId];
    res.send(randomEmployee);
});