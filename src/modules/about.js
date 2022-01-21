let renderAbout = () => {
    const container = document.querySelector(".container")
    container.innerHTML = null

    // header
    const header = document.createElement("h1")
    header.className = "header"
    header.textContent = 'About'

    // description
    const desc = document.createElement("h3")
    desc.textContent = 'idk man im too lazy to code'

    // bill gates
    const bill = document.createElement("h3")
    bill.textContent = '"wow this website is so amazing!" -Bill Gates'

    // array to loop next append
    let array = [header, desc, bill]

    array.forEach(item => container.appendChild(item))
}

export { renderAbout }