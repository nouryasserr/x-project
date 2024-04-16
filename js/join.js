// nav

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdown = document.querySelector(".dropdown");

toggleBtn.onclick = function () {
  dropdown.classList.toggle("open");
  const isOpen = dropdown.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// end-nav

// form

const labels = document.querySelectorAll(".form-control label");
labels.forEach((label) => {
  label.innerHTML = label.innerText

    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 70}ms">${letter}</span>`
    )
    .join("");
});

// end-form
