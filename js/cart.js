function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');


    if(cartWrapper.children.length > 0 ){
        console.log("Full")
        cartEmptyBadge.classList.add('none')
        orderForm.classList.remove('none')
    }
    else{
        console.log("Empty")
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }

}



const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {


    if (event.target.hasAttribute('data-cart')){


        const card = event.target.closest('.card');
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,

        }

        //Проверить есть ли схожий продукт
        
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        //Если есть то выполнять следующее действие
        if (itemInCart){
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        }
        else{

        


                const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <!-- cart-item__details -->
                        <div class="cart-item__details">
                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>
                        </div>
                        <!-- // cart-item__details -->
                    </div>
                </div>
            </div>`;

            

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)

        }
        toggleCartStatus()
        total()


    }
})



