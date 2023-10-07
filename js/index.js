function toggleHelp() {
    const subactionElement = document.querySelector('.header-actions .sub-action');
    console.log(subactionElement);
    subactionElement.classList.toggle('active');
}

function openCart() {
    console.log('open cart');
    const cartElement = document.querySelector('.sub-action.sub-action-cart');
    cartElement.classList.add('open');
}

function closeCart() {
    console.log('close cart');
    const cartElement = document.querySelector('.sub-action.sub-action-cart');
    cartElement.classList.remove('open');
}

