const dismissBtn = document.getElementById("dismiss-btn");
const thanksSection = document.getElementById("thanks-section");
const mainSection = document.getElementById("main-section");
const email = document.getElementById("email-address");
const submitBtn = document.getElementById("submit-btn");


submitBtn.addEventListener("click", () => {
  thanksSection.toggleAttribute("data-hidden");
  mainSection.toggleAttribute("data-hidden");
  document.getElementById("span").innerHTML = email.value;
});

dismissBtn.addEventListener("click", () => {
  thanksSection.toggleAttribute("data-hidden");
  mainSection.toggleAttribute("data-hidden");
  email.value = null;
});
