let circle = document.getElementById("circle");
let basic = document.getElementById("basic");
let professional = document.getElementById("professional");
let master = document.getElementById("master");
let check = false;
circle.addEventListener("click", function () {
  if (check) {
    circle.className = "circle";
    check = false;
    monthlyPrice();
  } else {
    circle.className = "circle left";
    check = true;
    annuallyPrice();
  }
});

function monthlyPrice() {
  basic.textContent = "$19.99";
  professional.textContent = "$24.99";
  master.textContent = "$39.99";
}
function annuallyPrice() {
  basic.textContent = "$199.99";
  professional.textContent = "$249.99";
  master.textContent = "$399.99";
}
