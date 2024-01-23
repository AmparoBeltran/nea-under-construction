
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let form = document.querySelector("form")

form.addEventListener("submit", myScript)

function myScript(event) {
    event.preventDefault()
    console.log({ name: name.value, email: email.value, message: message.value })
}