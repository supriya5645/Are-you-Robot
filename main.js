const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.querySelector("#SelectedColor");
// Assign color to Elements
elements.forEach(function (element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML=color;
});

// generate random color
function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}
// check of right color
elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      checkbox.checked = true;
      alert("You are human!");
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-sucess");
    } else {
      alert("plese verify that you are human");
      location.reload(true);
    }
  });
});
