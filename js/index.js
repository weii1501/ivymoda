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

let zoom = document.querySelector('.item-zoom');
let imgZoom = document.getElementById('imgZoom');

zoom.addEventListener('mousemove', (e) => {
    imgZoom.style.opacity = 1;
    console.log(e.x, e.y);
    let positionPx = e.x - zoom.getBoundingClientRect().left;
    let positionX = (positionPx / zoom.offsetWidth) * 100;

    let positionPy = e.y - zoom.getBoundingClientRect().top;
    let positionY = (positionPy / zoom.offsetHeight) * 100;

    imgZoom.style.setProperty('--zoom-x', positionX + '%');
    imgZoom.style.setProperty('--zoom-y', positionY + '%');
});

zoom.addEventListener('mouseout', function (e) {
    imgZoom.style.opacity = 0;
});
