
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
let view = document.querySelectorAll('.product-gallery__slide .product-gallery__slide--small img');
let sizeElement = document.querySelectorAll('.product-detail__size label span');
let sizeElementActive = document.querySelector('.product-detail__size label span.active');
let qualityInput = document.querySelector('.product-detail__quantity .product-detail__quantity-input input');
let btnDecrease = document.querySelector('.product-detail__quantity .product-detail__quantity-input .product-detail__quantity--decrease');
let btnIncrease = document.querySelector('.product-detail__quantity .product-detail__quantity-input .product-detail__quantity--increase');
let tabItem = document.querySelectorAll('div.tab-item');
let tabContent = document.querySelectorAll('div.tab-content');

zoom.addEventListener('mousemove', (e) => {
    imgZoom.style.opacity = 1;
    // console.log(e.x, e.y);
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

function handleShow() {
    let show = document.querySelector('.tab-content.active.showContent');
    let hidden  = document.querySelector('.tab-content.active.hideContent');
    let imgUp = document.querySelector('.show-more .img-up.hidden');
    // let imgDown = document.querySelector('.show-more .img-down');
    console.log('show');

    // console.log(imgUp, imgDown);
    if (show) {
        show.classList.remove('showContent');
        show.classList.add('hideContent');
        // imgUp.classList.remove('hidden');
        // imgDown.classList.add('hidden');
    } else {
        hidden.classList.remove('hideContent');
        hidden.classList.add('showContent');
        // imgUp.classList.add('hidden');
        // imgDown.classList.remove('hidden');
    }

    if (imgUp) {
        document.querySelector('.show-more .img-up.hidden').classList.remove('hidden');
        document.querySelector('.show-more .img-down').classList.add('hidden');
    } else {
        document.querySelector('.show-more .img-up').classList.add('hidden');
        document.querySelector('.show-more .img-down.hidden').classList.remove('hidden');
    }
}

view.forEach((item) => {
    item.addEventListener('click', function (e) {
        console.log(e.target.currentSrc);
        let img = document.querySelector('.item-zoom img');
        let imgZoom = document.getElementById('imgZoom');
        img.setAttribute('src', e.target.currentSrc);
        imgZoom.setAttribute('src', e.target.currentSrc);
        console.log(img);
    });
});

sizeElement.forEach((item) => {
    item.addEventListener('click', function (e) {
        sizeElementActive.classList.remove('active');
        e.target.classList.add('active');
        sizeElementActive = e.target;
    });
});

btnDecrease.addEventListener('click', function (e) {
    if (qualityInput.value > 1) {
        qualityInput.value--;
    }
});

btnIncrease.addEventListener('click', function (e) {
    qualityInput.value++;
});

tabItem.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        document.querySelector('.tab-item.active').classList.remove('active');
        if (e.target.classList.contains('tab-item')) {
            e.target.classList.add('active');
        }
        document.querySelector('.tab-content.active').classList.remove('active');
        tabContent[index].classList.add('active');

        let imgUp = document.querySelector('.show-more .img-up');
        if (imgUp) {
            document.querySelector('.show-more .img-up').classList.add('hidden');
            document.querySelector('.show-more .img-down.hidden').classList.remove('hidden');
        } 
    });
});
