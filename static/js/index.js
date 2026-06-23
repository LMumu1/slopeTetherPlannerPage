document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".navbar-burger");
  var menu = document.getElementById("project-menu");
  var scrollButton = document.querySelector(".scroll-to-top");
  var copyButton = document.querySelector(".copy-bibtex-btn");
  var bibtex = document.getElementById("bibtex-code");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      burger.setAttribute("aria-expanded", String(burger.classList.contains("is-active")));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (scrollButton) {
    scrollButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
      scrollButton.classList.toggle("visible", window.scrollY > 360);
    });
  }

  if (copyButton && bibtex) {
    copyButton.addEventListener("click", function () {
      var text = bibtex.textContent.trim();
      navigator.clipboard.writeText(text).then(function () {
        var label = copyButton.querySelector(".copy-text");
        if (!label) return;
        label.textContent = "Copied";
        setTimeout(function () {
          label.textContent = "Copy";
        }, 1800);
      });
    });
  }
});
