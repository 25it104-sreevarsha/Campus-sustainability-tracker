import { auth } from "./firebase.js";
import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

if(user){

let email = user.email;

let userDisplay = document.getElementById("userEmail");

if(userDisplay){
userDisplay.innerText = email;
}

}

});