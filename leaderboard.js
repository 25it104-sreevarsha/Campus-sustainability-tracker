import { database } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

const reportsRef = ref(database, "reports");

onValue(reportsRef, (snapshot) => {

const data = snapshot.val() || {};

let users = {};

// Collect points for each user
for (let id in data) {

let name = data[id].name;
let dept = data[id].department;
let points = data[id].points || 0;

if (!users[name]) {
users[name] = {
department: dept,
points: 0
};
}

users[name].points += points;

}

// Sort users by points
let sortedUsers = Object.entries(users).sort((a,b)=>b[1].points-a[1].points);

let table = document.getElementById("leaderboardTable");
table.innerHTML = "";

sortedUsers.forEach((user,index) => {

let medal = "";

// Add medals for top 3
if(index === 0) medal = "🥇 ";
if(index === 1) medal = "🥈 ";
if(index === 2) medal = "🥉 ";

let row = `
<tr>
<td>${medal}${user[0]}</td>
<td>${user[1].department}</td>
<td>${user[1].points}</td>
</tr>
`;

table.innerHTML += row;

});

});