const openBtn = document.querySelector('.navbar-open-btn')
const closeBtn = document.querySelector('.navbar-close-btn')
const navwrap = document.querySelector('.navbar')


openBtn.addEventListener('click', () =>{
  navwrap.classList.add('active')
  openBtn.classList.add('active')
  closeBtn.classList.add('active')
})

closeBtn.addEventListener('click', () =>{
  navwrap.classList.remove('active')
  openBtn.classList.remove('active')
  closeBtn.classList.remove('active')
})

const goTopBtn = document.querySelector("[data-go-top]")
window.addEventListener("scroll", function () {
if (this.window.scrollY >=800) {
  goTopBtn.classList.add("active")
} else {
  goTopBtn.classList.remove("active")
}
})