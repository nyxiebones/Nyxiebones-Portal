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