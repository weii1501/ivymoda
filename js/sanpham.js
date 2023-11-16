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