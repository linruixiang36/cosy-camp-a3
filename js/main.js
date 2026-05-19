const menuButton = document.querySelector(".menu-toggle");

if (menuButton) {
  menuButton.addEventListener("click" , function(){
    document.body.classList.toggle("menu-open");
});
}

