// Website Builder Sydney: mobile menu toggle and footer year.
// Progressive enhancement only; every page works with JavaScript off.
(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.getElementById("mobile-menu");

  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.hidden = !open;
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1200) setOpen(false);
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
