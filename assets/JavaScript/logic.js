const toggleButton = document.querySelector("#togglebutton");

function darkModeToggle() {
  document.body.classList.toggle("dark-mode");
}

toggleButton.addEventListener("click", darkModeToggle);
