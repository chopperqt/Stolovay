const emailElem = document.querySelector('.email-elem');
const text = document.getElementsByClassName('email-elem');
const block = document.querySelector('.top-menu__email-copy');
const copyBtn = document.querySelector('.copy-btn')

function handleClickCopy(event) {
    block.id = "active-email-copy";
    copyBtn.id = "active-copy-btn";
}

function onClickCopyBtn() {
    navigator.clipboard.writeText('info@stolovay.ru')
    document.execCommand('copy')
    block.removeAttribute('id')
    copyBtn.removeAttribute('id')
}
