let renderMenu = () => {
    const container = document.querySelector(".container")
    container.innerHTML = null
    const div = document.createElement("div")
    div.textContent = 'Menu'
    container.appendChild(div)
}

export { renderMenu }