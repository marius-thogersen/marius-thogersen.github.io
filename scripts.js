addEventListener("DOMContentLoaded", () => {

  document.querySelector(".theme-switch").onclick = (e) => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  };
});
