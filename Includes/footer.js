// emailFunctions.js

function seeEmail(event) {
  event.preventDefault();
  let email = "elvira.a.graf@gmail.com";
  alert("My 📧 address is: " + email);
}

/*function seeEmail(event) {
    event.preventDefault();
    let email = "elvira.a.graf@gmail.com";
    alert("My 📧 address is: " + email);
  }*/

let emailIcon = document.querySelector("#emailIcon");
emailIcon.addEventListener("click", seeEmail);
