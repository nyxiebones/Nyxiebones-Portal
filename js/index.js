const themeButton = document.querySelector('#toggle-theme');
const themeIcon = themeButton.querySelector("i");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
});