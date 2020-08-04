(function () {
  const pcWrapper = document.querySelector(".pc-wrapper");
  const tabletWrapper = document.querySelector(".tablet-wrapper");
  const phoneWrapper = document.querySelector(".phone-wrapper");
  const menu = document.querySelectorAll(".menu-item");

  menu.forEach(function (item) {
    item.addEventListener("click", function () {
      pcWrapper.classList.add("invisible");
      tabletWrapper.classList.add("invisible");
      phoneWrapper.classList.add("invisible");

      if (event.target == menu[0]) {
        pcWrapper.classList.remove("invisible");
        tabletWrapper.classList.add("invisible");
        phoneWrapper.classList.add("invisible");
      } else if (event.target == menu[1]) {
        pcWrapper.classList.add("invisible");
        tabletWrapper.classList.remove("invisible");
        phoneWrapper.classList.add("invisible");
      } else {
        phoneWrapper.classList.add("invisible");
        phoneWrapper.classList.add("invisible");
        phoneWrapper.classList.remove("invisible");
      }
    });
  });
})();
