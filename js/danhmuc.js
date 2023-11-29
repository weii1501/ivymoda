$(document).ready(function () {
  // Hide sub-menu-box initially
  $(".sub-menu-box").hide();

  // Add click event handler to list__menu-items
  $(".list__side-items").click(function () {
    console.log("submenu");
    // Find the corresponding sub-menu-box and toggle its visibility
    $(this).find(".sub-menu-box").slideToggle();
  });

  $(".list-menu").hide();
  $(".filter-product").click(function () {
    console.log("Add Product");
    $(".list-menu").slideToggle();
  });

  $(".size-menu").hide();
  // $(".add-cart-product").click(function () {
  //   console.log("Product");
  //   $(".size-menu").slideToggle();
  // });
});
$(document).ready(function () {
  const addCartProducts = $(".add-cart-product");
  const sizeMenus = $(".size-menu");

  addCartProducts.click(function () {
    const index = addCartProducts.index(this);
    console.log(index);
    sizeMenus.eq(index).slideToggle();
  });
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = ` ${this.value}`;
};

/*
  Used the index method to get the index of the clicked .add-cart-product.
  Used eq(index) to select the corresponding .size-menu element.
    Removed the unnecessary $.each loop, as the click function is already applied to all elements matched by addCartProducts.
*/
