
const cartTotalDisplay = document.getElementById("cart-total");
const allShoes = document.querySelectorAll(".gallery");
let totalCost = 0;


allShoes.forEach((shoe) => {
    const decrementButton = shoe.querySelector(".decrement");
    const incrementButton = shoe.querySelector(".increment");
    const quantityDisplay = shoe.querySelector(".quantity-display");
    const descText = shoe.querySelector(".desc").textContent;
    const price = parseFloat(descText.split('→')[1].replace(',', '.'));

    let quantity = 0;

    let shoeName = descText.split(" ")[0];
    decrementButton.addEventListener("click", function () {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = `Quantity: ${quantity}`;
            updateCartTotal(price, -1);
            alert(`Removed from cart: ₺${price} | Total: ₺${totalCost.toFixed(2)}`);
        } else {
            alert('You cannot remove while quantity is 0 ');
        }
    }
    );


    incrementButton.addEventListener("click", function () {
        quantity++;
        quantityDisplay.textContent = `Quantity: ${quantity}`;
        updateCartTotal(price, 1);
        alert(`Added to cart: ₺${price} | Total: ₺${totalCost.toFixed(2)} |${shoeName}`);
    });


    function updateCartTotal(price, change) {
        totalCost += price * change;
        cartTotalDisplay.textContent = `₺${totalCost.toFixed(2)}`;
    }
});





