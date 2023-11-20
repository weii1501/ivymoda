function convertToCurrencyFormat(amount) {
    // Sử dụng hàm toLocaleString() để chuyển đổi số thành định dạng tiền tệ
    // Ví dụ: 1862000 -> "1.862.000"
    const currencyFormat = amount.toLocaleString("vi-VN");
  
    // Thêm ký tự đồng (₫) vào cuối chuỗi
    const formattedAmount = currencyFormat + "₫";
  
    return formattedAmount;
}

var cart = [];

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

function convertToCurrencyFormat(amount) {
    // Sử dụng hàm toLocaleString() để chuyển đổi số thành định dạng tiền tệ
    // Ví dụ: 1862000 -> "1.862.000"
    const currencyFormat = amount.toLocaleString("vi-VN");
  
    // Thêm ký tự đồng (₫) vào cuối chuỗi
    const formattedAmount = currencyFormat + "₫";
  
    return formattedAmount;
  }

const openAddtoCartSizeArr = document.querySelectorAll('.add-to-cart button');
openAddtoCartSizeArr.forEach((openAddtoCartSize, index) => {
    openAddtoCartSize.addEventListener('click', () => {
        const listSize = document.querySelectorAll('.list-size');
        listSize[index].classList.toggle('open');

        const listItemNewProd = document.querySelectorAll('.item-new-prod');
        const listBtnSize = document.querySelectorAll('.list-size.open button');
        listBtnSize.forEach((btnSize, indexBtnSize) => {
            btnSize.addEventListener('click', () => {
                const data = {
                    name: listItemNewProd[index].dataset.name,
                    price: listItemNewProd[index].dataset.price,
                    image: listItemNewProd[index].dataset.image,
                    size: btnSize.textContent,
                    quantity: 1,
                }

                cart.push(data);
                console.log(cart);
                
                const dataHTML = `
                    <div class="item-product-cart d-flex">
                        <div class="thumb-product-cart">
                            <img src="../assets/img/products/94c460cb7921bac2e87f9d0751b3206d.jpeg" alt="" class="lazy">
                        </div>

                        <div class="info-product-cart">
                            <h3>
                                <a href="#">
                                    ${data.name}
                                </a>
                            </h3>
                            <div class="info-properties d-flex">
                                <p class="properties-color">Màu sắc: <span style="color: #000;">Đen</span></p>
                                <p>Size: <span style="text-transform: uppercase">${data.size}</span></p>
                            </div>
                            <div class="info-price-mini d-flex">
                                <div class="info-price-quantity d-flex">
                                    <div class="price-quantity-minus price-quantity">
                                        <i class="fa-solid fa-minus"></i>
                                    </div>
                                    <input type="number" value="1" data-product-sub-id="186719" data-product-index="0">
                                    <div class="price-quantity-plus price-quantity">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div class="price-cart-mini">
                                    <ins>
                                        <span>
                                            ${convertToCurrencyFormat(data.price)}                           
                                        </span>
                                    </ins>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                const cartHTML = document.querySelector('.sub-action.sub-action-cart .main-action');
                cartHTML.innerHTML += dataHTML;

                const numberCart = document.querySelector('.item-cart .icon .number-cart');
                numberCart.textContent = document.querySelectorAll(".item-product-cart").length;
                
                listSize[index].classList.remove('open');
                
                const total = cart.reduce((total, item) => {
                    return total + item.price * item.quantity;
                }, 0);
                console.log(document.querySelector('.total-price'));
                document.querySelector('.total-price strong').innerHTML = convertToCurrencyFormat(total);
            })
        }) 
    });
})
