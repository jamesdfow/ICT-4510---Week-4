/*
James Fowler
ICT 4510
27 April, 2025

Collects form input, builds a message using the user's data, 
and displays it dynamically in the HTML page
*/

function getData (){
let firstName = document.querySelector("#firstName").value;
let lastName = document.querySelector("#lastName").value;
let emailAddress = document.querySelector("#emailAddress").value;

let formData = {
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress
};

displayData(formData);
}

function displayData (data){
let message = `Thank you, ${data.firstName}. Your email address is ${data.emailAddress}!`;
let paragraph = document.createElement("p");
let textNode = document.createTextNode(message);
paragraph.appendChild(textNode);
document.querySelector("#output").appendChild(paragraph);
}

document.getElementById("formButton").onclick = getData;

