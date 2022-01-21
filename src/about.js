let renderAbout = () => {
    const container = document.querySelector(".container")
    container.innerHTML = null
    const div = document.createElement("div")
    div.textContent = 'About'
    container.appendChild(div)
}

export { renderAbout }