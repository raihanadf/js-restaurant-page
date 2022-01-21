let renderHome = () => {
    const container = document.querySelector(".container")
    container.innerHTML = null

    // header
    const header = document.createElement("h1")
    header.className = "header"
    header.textContent = 'Home'

    // description
    const desc = document.createElement("h3")
    desc.textContent = 'malesssssssssssssssss, why do i need to do this again? i dont understand why i do this to myself. but it was fear, something that i said and cant take back, were letting the night end talked it down but it was fading'

    // array to loop next append
    let array = [header, desc]

    array.forEach(item => container.appendChild(item))
}

export { renderHome }