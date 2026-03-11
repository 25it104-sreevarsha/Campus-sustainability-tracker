import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

window.signup = function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
.then(() => {

document.getElementById("message").innerText = "Account created!";

})
.catch((error)=>{

document.getElementById("message").innerText = error.message;

});

}

window.login = function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then(()=>{

document.getElementById("message").innerText = "Login successful";

window.location.href = "index.html";

})
.catch((error)=>{

document.getElementById("message").innerText = error.message;

});

}