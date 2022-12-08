function total(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price')
    let totalPrice = 0

    cartItems.forEach(function (item){
        const amount = item.querySelector('[data-counter]');
        const price = item.querySelector('.price__currency');
        const currentPrice = parseInt(amount.innerText) * parseInt(price.innerText);
        totalPrice += currentPrice
    })
    totalPriceEl.innerText = totalPrice

}
