const shadow_block = document.querySelector('.shadow');
const popup_search = document.querySelector('.search-popup');

function handleValue(event) {
    if (event.target.value.length !== 0) {
        shadow_block.id = "active-shadow";
        popup_search.id = "active-search";
    }else {
        shadow_block.removeAttribute("id")
        popup_search.removeAttribute("id")
    }
}