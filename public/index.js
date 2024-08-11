const body = document.querySelector("body");
const hiddenNav = document.querySelector("#hiddenNav");
const buttonCloseNav = document.querySelector(
  "#buttonCloseNav"
);
const buttonMenuNav = document.querySelector(
  "#buttonMenuNav"
);

const listNav = document.querySelectorAll("#listNav > li");

listNav.forEach((li) => {
  li.addEventListener("click", () => {
    hiddenNav.classList.toggle("hidden");
  });
});

buttonCloseNav.addEventListener("click", () => {
  hiddenNav.classList.toggle("hidden");
});

buttonMenuNav.addEventListener("click", () => {
  hiddenNav.classList.contains("hidden")
    ? hiddenNav.classList.remove("hidden")
    : hiddenNav.classList.add("hidden");
});
