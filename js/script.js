/** @format */

let navBar = document.querySelector(".header .flex .navbar")

document.getElementById("menu-btn").onclick = () => {
  navBar.classList.toggle("active")
}
window.onscroll = () => {
  navBar.classList.toggle("active")
}

document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.ariaValueMax.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength)
  }
})
AOS.init({
  duration: 400,
  delay: 200,
})
