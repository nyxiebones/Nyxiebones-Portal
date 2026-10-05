const themeButton = document.querySelector('#toggle-theme');
const themeIcon = themeButton.querySelector("i");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
});

const popupButtons = document.querySelectorAll("[data-popup]:not(.popup-menu)");
const popupCloseButtons = document.querySelectorAll(".popup-close");

popupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popupName = button.dataset.popup;
        const popup = document.querySelector(`.popup-menu[data-popup="${popupName}"]`);

        if (!popup) return;
        document.querySelectorAll(".popup-menu.active").forEach(popup => popup.classList.remove("active"));
        popup.classList.add("active");
    });
});

popupCloseButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".popup-menu").classList.remove("active");
    });
});