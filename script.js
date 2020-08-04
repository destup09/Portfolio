(function () {
  const menu = document.querySelectorAll(".port-menu");
  const rowWebsites = document.querySelector(".row-websites");
  const rowDesign = document.querySelectorAll(".row-graphic");
  const projectsWrapper = document.querySelector("#portfolio");

  let prev = menu[0];

  menu.forEach(function (item) {
    item.addEventListener("click", function () {
      if (prev) {
        prev.classList.remove("selected");
      }
      prev = this;
      this.classList.add("selected");
      let current = event.target;

      if (current == menu[0]) {
        rowWebsites.classList.remove("invisible");
        rowDesign.forEach(function (item) {
          item.classList.remove("invisible");
        });
      } else if (current == menu[1]) {
        rowWebsites.classList.remove("invisible");
        rowDesign.forEach(function (item) {
          item.classList.add("fade-out");
          setTimeout(() => {
            item.style.display = "none";
            projectsWrapper.classList.add("portfolio-up");
            projectsWrapper.style.height = "750px";
          }, 300);
        });
      }
      console.log(rowDesign[1]);
    });
  });
})();

(function () {
  window.onscroll = function () {
    scrollFunction();
  };

  const windowWidth = window.innerWidth / 20;

  function scrollFunction() {
    if (
      document.body.scrollTop > windowWidth ||
      document.documentElement.scrollTop > windowWidth
    ) {
      document.querySelector("#nav").classList.add("nav-active");
      document.querySelector("#nav").style.height = "60px";
    } else {
      document.querySelector("#nav").classList.remove("nav-active");
      document.querySelector("#nav").style.height = "110px";
    }

    if (
      document.body.scrollTop > 410 ||
      document.documentElement.scrollTop > 410
    ) {
      const rowWrapper = document.querySelectorAll(".row-wrapper");
      rowWrapper.forEach(function (row) {
        row.classList.add("projects-slide");
        row.style.opacity = 1;
      });
    }

    if (
      document.body.scrollTop > 1400 ||
      document.documentElement.scrollTop > 1400
    ) {
      const icons = document.querySelectorAll(".icon");
      icons.forEach(function (icon) {
        icon.classList.add("icon-slide");
      });
    }
  }
})();

(function () {
  const images = document.querySelectorAll(".project-image");
  const closeImg = document.querySelector(".fa-times");
  const enlargedImg = document.querySelector(".enlarged-img");
  const enlargedWrapper = document.querySelector(".enlarged-wrapper");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      enlargedImg.src = this.src;
      enlargedWrapper.classList.remove("invisible");
      enlargedWrapper.classList.remove("fade-out");
      enlargedWrapper.classList.add("fade-in");

      enlargedImg.classList.remove("project-anim-hide");
      enlargedImg.classList.add("project-anim-show");
    });
  });

  closeImg.addEventListener("click", function () {
    enlargedImg.classList.remove("project-anim-show");
    enlargedImg.classList.add("project-anim-hide");

    enlargedWrapper.classList.remove("fade-in");
    enlargedWrapper.classList.add("fade-out");
    setTimeout(() => {
      enlargedWrapper.classList.add("invisible");
    }, 300);
  });
})();

(function () {
  const email = document.querySelector(".email");
  const emailArrow = document.querySelector(".email-arrow");

  email.addEventListener("mouseenter", function () {
    emailArrow.classList.remove("email-hover-leave");
    emailArrow.classList.add("email-hover-enter");
  });

  email.addEventListener("mouseleave", function () {
    emailArrow.classList.remove("email-hover-enter");
    emailArrow.classList.add("email-hover-leave");
  });
})();
