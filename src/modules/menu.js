const createItem = (url, title, desc) => {
    const div = document.createElement("div")
    const img = document.createElement("img")
    const header = document.createElement("h1")
    const text = document.createElement("p")

    img.src = url
    header.textContent = title
    text.textContent = desc

    div.appendChild(img)
    div.appendChild(header)
    div.appendChild(text)

    return div
}

const item = [
    createItem("https://www.redbrick.me/wp-content/uploads/2019/02/2017-07-12-10-51-59-900x596.jpg", "Sadwich", "maybe this all is the end of it"),
    createItem("https://wl-brightside.cf.tsp.li/resize/728x/jpg/4e5/5b2/cdeb4d51ee931744549f3920ed.jpg", "Chocomie", "wtf is this"),
    createItem("https://mamasuncut.com/wp-content/uploads/2020/11/2226442184910163891_ZQ4MM.jpg", "Cookvie", "Baked cookie with special topping ")
]
const renderMenu = () => {
    const container = document.querySelector(".container")
    container.innerHTML = null
    const div = document.createElement("h1")
    div.className = "header"
    div.textContent = 'Menu'
    container.appendChild(div)
    item.forEach(content => container.appendChild(content))
}


export { renderMenu }