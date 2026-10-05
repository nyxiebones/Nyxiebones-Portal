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


const popupButtons = document.querySelectorAll('.popup-button');
const popupMenus = document.querySelectorAll('.popup-menu');
const popupClose = document.querySelectorAll('.popup-close');

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popupName = button.dataset.popup;
        const popup = document.querySelector(`.popup-menu[data-popup="${popupName}"]`);

        popupMenus.forEach(menu => {
            menu.classList.remove('active');
        });
        popup.classList.add('active');
    });
});

popupClose.forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.popup-menu').classList.remove('active');
    });
});