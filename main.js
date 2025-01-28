function generateEmails() {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      const emailList = document.getElementById("email-list");
      const newEmail = document.createElement("li");
      newEmail.textContent = data.response;
      emailList.appendChild(newEmail);
    });
}
