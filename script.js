const burger = document.querySelector("#burger");
let counter = 0;

burger.onclick = function () {
  const menuList = document.querySelector(".header__nav-left");
  const background = document.querySelector(".header__nav-wrapper-mob");
  if (counter === 0) {
    menuList.style.display = "block";
    background.style.background = "#fff";
    counter++;
  } else {
    menuList.style.display = "none";
    background.style.background = "none";
    counter = 0;
  }
};
