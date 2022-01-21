import { renderHome } from "./modules/home";
import { renderNav } from "./modules/navbar";
import './styles/style.css'

const divContent = document.querySelector("#content")

let init = () => {
    const container = document.createElement("div")
    const divbg = document.createElement("div")
    container.classList.add("container")
    divbg.classList.add("bg")
    divbg.appendChild(container)
    divContent.appendChild(divbg)
    renderHome()
}

renderNav()
init()