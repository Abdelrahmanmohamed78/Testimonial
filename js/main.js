let scrollBtn = document.querySelector(".scrollBtn");

// Scroll When Click
scrollBtn.addEventListener(("click"), () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

// Show And Hide ScrollBtn
window.addEventListener(("scroll"), () => {
  if (window.scrollY >= 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
})