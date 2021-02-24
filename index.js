const buttons = document.querySelectorAll("button")
const box = document.querySelector(".box")

buttons[0].addEventListener("click", e => {
    box.classList.remove("moveUp")
    box.classList.add("moveDown")
})

buttons[1].addEventListener("click", e => {
    box.classList.remove("moveDown")
    box.classList.add("moveUp")
})