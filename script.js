(function () {
  const websitesWrapper = document.querySelector(".websites-wrapper");
  const designWrapper = document.querySelector(".design-wrapper");
  const webBtn = document.querySelector(".port-str");
  const designBtn = document.querySelector(".port-graf");
  let portfolioBtn;

  webBtn.addEventListener("click", priceList);
  designBtn.addEventListener("click", priceList);

  function priceList() {
    if (this.className == "port-str") {
      portfolioBtn = true;
    } else if (this.className == "port-graf") {
      portfolioBtn = false;
    }

    webBtn.classList.remove("selected");
    designBtn.classList.remove("selected");
    this.classList.add("selected");

    console.log(portfolioBtn);

    websitesWrapper.classList.remove("fade-in");
    websitesWrapper.classList.remove("fade-out");
    designWrapper.classList.remove("fade-out");
    designWrapper.classList.remove("fade-in");
    if (!portfolioBtn) {
      websitesWrapper.classList.add("fade-out");
      setTimeout(function () {
        websitesWrapper.classList.add("invisible");
        designWrapper.classList.remove("invisible");
        designWrapper.classList.add("fade-in");
      }, 200);
    } else {
      designWrapper.classList.add("fade-out");
      setTimeout(function () {
        designWrapper.classList.add("invisible");
        websitesWrapper.classList.remove("invisible");
        websitesWrapper.classList.add("fade-in");
      }, 200);
    }
  }
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
