let renderHome = () => {
    const container = document.querySelector(".container")
    container.innerHTML = null
    const div = document.createElement("div")
    div.textContent = 'Home'
    container.appendChild(div)
}

export { renderHome }