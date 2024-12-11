//open rules
const btnRules = document.querySelector(".btn-rules");
const btnClose = document.querySelector(".close-btn");
const rules = document.querySelector(".rules-hide");
const body = document.body;


btnRules.addEventListener("click", () => {
  rules.style.display = "block";
  body.style.background = "hsl(237, 49%, 12%)";
});
btnClose.addEventListener('click', () =>{
    rules.style.display = "none";
    body.style.background = "";
})