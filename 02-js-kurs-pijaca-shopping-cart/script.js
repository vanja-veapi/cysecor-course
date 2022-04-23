const btnCart = document.querySelectorAll(".add-to-cart");
const total = document.querySelector(".total");
const cartItems = document.querySelector(".cart-items");
const msg = document.querySelector("#msg");

let allTotal = 0;
window.addEventListener("load", function () {
    btnCart.forEach(item => item.addEventListener("click", addToCart));
})

function addToCart(e) {
    const mainEl = e.target.closest(".single-item");
    const price = Number(mainEl.querySelector(".price").innerText.substr(1));
    const quantity = Number(mainEl.querySelector("input").value);
    const name = mainEl.querySelector("h3").innerText;
    const button = mainEl.querySelector("button");
    const result = totalPriceArticle(price, quantity);

    if (quantity === 0) {
        return alert("Unesi kolicinu povrca")
    }

    // button.setAttribute("disabled", true);
    button.disabled = true;
    button.innerText = "Dodato";

    cartItems.innerHTML += `<div class="cart-single-item">
        <h3>${name}</h3>
        <p>${price} x ${quantity} = <span>${result}</span></p>
        <button class="btn-remove">Ukloni</button>
    </div>`

    allTotal += result;
    total.innerText = `$${allTotal}`

    initRemoveButtons();
    cartItems.childElementCount === 0 ? msg.innerHTML = "<p>The cart is empty<p>" : msg.innerHTML = null;
}

function totalPriceArticle(price, quantity) {
    return price * quantity;
}
function initRemoveButtons() {
    const btnRemoves = document.querySelectorAll(".btn-remove");
    btnRemoves.forEach(btnRemove => btnRemove.addEventListener("click", removeArticle));
}
function removeArticle(e) {
    const mainEl = e.target.closest(".cart-single-item");
    const totalProductPrice = Number(mainEl.querySelector("span").innerText);
    const name = mainEl.querySelector("h3").innerText;
    const vegetables = document.querySelectorAll(".single-item");

    allTotal -= totalProductPrice;
    total.innerText = `$${allTotal}`;

    vegetables.forEach(vegetable => {
        if (vegetable.querySelector("h3").innerText === name) {
            const btn = vegetable.querySelector("button");
            btn.removeAttribute("disabled");
            btn.innerText = "Dodaj";
        }
    })

    mainEl.remove();

    cartItems.childElementCount === 0 ? msg.innerHTML = "<p>The cart is empty<p>" : null;
}