import { database } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

const reportsRef = ref(database, "reports");

let chart;
let trees = 0;
let bicycle = 0;
let electricity = 0;
let water = 0;
let recycling = 0;
onValue(reportsRef, (snapshot) => {

const data = snapshot.val() || {};

let total = 0;
let totalCO2 = 0;
let stats = {};

// Process reports
for (let id in data) {

total++;

let action = data[id].action;
let co2 = data[id].co2Saved || 0;

totalCO2 += co2;

if (!stats[action]) {
stats[action] = 0;
}

stats[action]++;
if(action === "Planting") trees++;
if(action === "Bicycle") bicycle++;
if(action === "Electricity") electricity++;
if(action === "Water") water++;
if(action === "Recycling") recycling++;
}

// Update total reports
document.getElementById("totalReports").innerText = total;

// Update CO2 saved
document.getElementById("co2Saved").innerText = totalCO2 + " kg";

document.getElementById("treesCount").innerText = trees;
document.getElementById("bicycleCount").innerText = bicycle;
document.getElementById("electricityCount").innerText = electricity;
document.getElementById("waterCount").innerText = water;
document.getElementById("recyclingCount").innerText = recycling;



// Calculate sustainability score
let score = (totalCO2 * 2) + (total * 5);

// Limit score to 100
if(score > 100){
score = 100;
}

// Update progress bar
let bar = document.getElementById("scoreBar");
let text = document.getElementById("scoreText");

if(bar){
bar.style.width = score + "%";
}

if(text){
text.innerText = score + "%";
}

// Update action statistics list
let list = document.getElementById("actionStats");
list.innerHTML = "";

for (let action in stats) {

let li = document.createElement("li");
li.innerText = action + " : " + stats[action];
list.appendChild(li);

}

// Prepare chart data
let labels = Object.keys(stats);
let values = Object.values(stats);

const ctx = document.getElementById("actionChart");

// Destroy old chart before creating new one
if (chart) {
chart.destroy();
}

// Create chart
chart = new Chart(ctx, {
type: "bar",
data: {
labels: labels,
datasets: [{
label: "Sustainability Actions",
data: values
}]
},
options: {
responsive: true,
plugins: {
legend: {
display: true
}
}
}
});

});