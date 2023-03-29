//  Menu on small screens 

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    $(".main-menu").toggleClass("active");
    $(".main-menu a").toggleClass("active");
}