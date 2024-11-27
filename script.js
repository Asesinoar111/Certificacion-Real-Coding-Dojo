const headerLi = document.querySelectorAll(".header-li2")
const headerTitle = document.getElementById("header-title")
const cardBtn = document.querySelectorAll(".card-btn") 
const btnIncio = document.getElementById("nav-btn-1")

headerLi.forEach(li => {
    li.addEventListener("click", () => {
        const TextLi = li.textContent
        headerTitle.textContent = TextLi
    })
});

cardBtn.forEach(button => {
    button.addEventListener("click", () => {
        button.style.background = "#990000" 
        button.style.color = "#f2f2f2"
        button.textContent = "No Disponible"
    })
}); 

btnIncio.addEventListener("click", () => {
    alert("Inicio de Sesión Exitoso")
})