import { renderAbout } from "./about"
import { renderHome } from "./home"
import { renderMenu } from "./menu"

const navBar = document.querySelector("#content")

let renderNav = () => {
    const divNav = document.createElement("div")
    const btnOne = document.createElement("button")
    const btnTwo = document.createElement("button")
    const btnThree = document.createElement("button")

    btnOne.textContent = "Home"
    btnTwo.textContent = "Menu"
    btnThree.textContent = "About"

    btnOne.onclick = renderHome
    btnTwo.onclick = renderMenu
    btnThree.onclick = renderAbout

    divNav.classList.add("divNav")
    btnOne.classList.add("navBtn")
    btnTwo.classList.add("navBtn")
    btnThree.classList.add("navBtn")

    divNav.appendChild(btnOne)
    divNav.appendChild(btnTwo)
    divNav.appendChild(btnThree)
    navBar.appendChild(divNav)
}

export { renderNav }