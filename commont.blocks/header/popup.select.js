//Click on "All"
let btnAll = document.querySelector('.header-search__select'); //btn all
let select_popup = document.querySelector('.select-popup'); //popup block

function viewSelectPopup() {
    if (select_popup.id === "active-select") {
        select_popup.removeAttribute("id")
    }else {
        select_popup.id = "active-select";
    }
}

function selectItem(event,name) {
    let oldActiveItem = document.querySelector('#active-select-item') || false;
    btnAll.innerHTML = name+' <img src="./commont.blocks/header/_img/arrow__down.png" alt="arrow-down">'
    select_popup.removeAttribute("id")

    if (oldActiveItem !== false) {
        oldActiveItem.removeAttribute('id');
    }

    event.target.id = "active-select-item";
}