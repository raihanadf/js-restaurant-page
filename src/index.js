import { renderHome } from "./home";
import { renderNav } from "./navbar";
import './style.css'

const divContent = document.querySelector("#content")

let init = () => {
    const container = document.createElement("div")
    container.classList.add("container")
    divContent.appendChild(container)
    renderHome()
}

renderNav()
init()