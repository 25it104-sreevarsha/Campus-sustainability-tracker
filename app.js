import { database, ref, push } from "./firebase.js";

document.getElementById("reportForm")?.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let department = document.getElementById("department").value;
let action = document.getElementById("actionType").value;
let description = document.getElementById("description").value;

let points = 0;
let co2 = 0;

if(action === "Recycling"){
points = 10;
co2 = 2;
}

if(action === "Bicycle"){
points = 15;
co2 = 5;
}

if(action === "Electricity"){
points = 12;
co2 = 3;
}

if(action === "Water"){
points = 8;
co2 = 1;
}

if(action === "Planting"){
points = 20;
co2 = 10;
}

let reportData = {
name: name,
department: department,
action: action,
description: description,
points: points,
co2Saved: co2,
time: new Date().toString()
};

push(ref(database, "reports"), reportData);

alert("Report submitted 🌱 +" + points + " eco points");

document.getElementById("reportForm").reset();

});