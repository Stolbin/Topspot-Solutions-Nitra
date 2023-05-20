const TOKEN = "6295958096:AAEpfHzcgg2SVWGo2JBxrJWnJYimDvgP9hY";
const CHAT_ID = "-1001848182059";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const seccess = document.getElementById("succese");
const form = document.getElementById("form");

form.addEventListener("submit", handkerSubmit);

function handkerSubmit(e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>User: </b> ${this.name.value}\n`;
  message += `<b>Email: </b> ${this.email.value}\n`;
  message += `<b>Phone: </b> ${this.tel.value}\n`;
  message += `<b>Subject: </b> ${this.subject.value}\n`;
  message += `<b>Somments: </b> ${this.comments.value}\n`;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  delay(1000)
    .then((res) => {
      this.name.value = "";
      this.email.value = "";
      this.phone.value = "";
      this.subject.value = "";
      this.comments.value = "";
      seccess.style.display = "block";
    })
    .catch(() => {
      console.log("Error");
    })
    .finally(() => {
      console.log("End");
    });
}

export default handkerSubmit;
