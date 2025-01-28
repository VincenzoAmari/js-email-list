// Variante con il create element

// function generaEmails() {
//   fetch("https://flynn.boolean.careers/exercises/api/random/mail")
//     .then((response) => response.json())
//     .then((data) => {
//       const emailList = document.getElementById("email-list");
//       const newEmail = document.createElement("li");
//       newEmail.textContent = data.response;
//       emailList.appendChild(newEmail);
//     });
// }

// function caricaEmails() {
//   const emailList = document.getElementById("email-list");
//   emailList.innerHTML = "";

//   for (let i = 0; i < 10; i++) {
//     generaEmails();
//   }
// }

// caricaEmails();

// document
//   .getElementById("genera-emails")
//   .addEventListener("click", caricaEmails);
