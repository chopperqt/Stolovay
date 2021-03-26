const btn = document.querySelector('.drop-down__btn');
const shadowDropDown  = document.querySelector('.shadow');
const dropDown = document.querySelector('.drop-down__menu');

function viewDropDownMenu() {
    let cliendWidth = document.body.clientWidth;
    if (dropDown.id === "close") {
        dropDown.style.transition = ".4s";
        dropDown.style.width = cliendWidth > 1590 ? "1356px" : "1103px";
        dropDown.id = "open";
        shadowDropDown.id = "active-drop-down-shadow";
    }else {
        dropDown.style.transition = ".4s";
        dropDown.style.width = "0";
        dropDown.id = "close"
    }
    console.log(dropDown.id)
}
function closeMenu(event) {
    dropDown.style.transition = ".4s";
    dropDown.style.width = "0";
    dropDown.id = "close"
    shadowDropDown.removeAttribute('id')
}
