const naviToggle = document.getElementById('navi-toggle')

console.log('hello from root')

document.querySelectorAll(".navigation__link").forEach(e => {
    e.addEventListener("click", () => {
        console.log('hello')
        naviToggle.checked = false
    })
})