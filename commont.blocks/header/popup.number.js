let popup = document.querySelector('.top-menu__popup');
let hover__item = document.querySelector('.hover__item');
let shadow = document.querySelector('.shadow')

function viewPopup() {
    popup.id = "active-popup-number";
    hover__item.id = "active-popup-elem";
    shadow.id = "active-shadow-number";
}
function handleClose() {
    popup.removeAttribute('id')
    hover__item.removeAttribute('id')
    shadow.removeAttribute('id');
}