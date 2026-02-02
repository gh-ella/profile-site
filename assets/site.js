(function () {
  const lang = document.documentElement.getAttribute("data-lang"); // "ko"|"en"|"ja"
  const buttons = document.querySelectorAll("[data-lang-btn]");

  buttons.forEach((btn) => {
    const target = btn.getAttribute("data-lang-btn");
    btn.setAttribute("aria-current", target === lang ? "true" : "false");

    btn.addEventListener("click", () => {
      localStorage.setItem("lang_pref", target);
      location.href = `/${target}/`;
    });
  });
})();
