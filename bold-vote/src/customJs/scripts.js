import $ from "jquery";

export const toggleMain = () => {
  const main = document.querySelector(".main");
  main.classList.toggle("main-expanded");
};

$("#menu").bind("click", function(e) {
  $("#menu")
    .find(".menu-item")
    .removeClass("selected");
  $(e.target).addClass("selected");
});
