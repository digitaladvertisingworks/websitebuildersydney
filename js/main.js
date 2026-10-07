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

// Quote form: submit to Web3Forms in place and show the result.
// Without JavaScript the form posts normally and Web3Forms shows its own page.
(function () {
  var form = document.querySelector("[data-web3forms]");
  if (!form || !window.fetch) return;
  var status = form.querySelector("[data-form-status]");
  var button = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    button.disabled = true;
    button.textContent = "Sending…";
    var data = Object.fromEntries(new FormData(form));
    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (!res.success) throw new Error(res.message || "Send failed");
        form.reset();
        status.textContent = "Thanks, your brief has been sent. Marcelo will reply the same business day.";
        button.textContent = "Sent";
      })
      .catch(function () {
        status.textContent = "Sorry, that didn't send. Please call or text 0404 084 847.";
        button.disabled = false;
        button.textContent = "Send my brief";
      });
  });
})();
