const TOKEN = "6218237968:AAF-aFWB12uinILXIsZfi9kMi1Sdr_CJvs8";
const CHAT_ID = "-1001751122058";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const succese = document.getElementById("succese");
const succeseContent = document.getElementById("succese_content");
const formSubmit = document.getElementById("form");
const form = document.getElementById("form");
form.addEventListener("submit", handkerSubmit);

function handkerSubmit(e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>User: </b> ${this.name.value}\n`;
  message += `<b>Email: </b> ${this.email.value}\n`;
  message += `<b>Phone: </b> ${this.tel.value}\n`;
  message += `<b>Subject: </b> ${this.subject.value}\n`;
  message += `<b>Сomments: </b> ${this.comments.value}\n`;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  delay(1000).then((res) => {
    this.name.value = "";
    this.email.value = "";
    this.tel.value = "";
    this.subject.value = "";
    this.comments.value = "";
    formSubmit.classList.add("footer-form_submit");
    succese.style.display = "block";
  });
  const delay2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  delay2(1500)
    .then((res) => {
      succeseContent.style.display = "block";
    })
    .catch(() => {
      console.log("Error");
    })
    .finally(() => {
      console.log("End");
    });
}

export default handkerSubmit;
