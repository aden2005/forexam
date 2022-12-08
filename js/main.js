window.addEventListener('click', function (event){
    if (event.target.dataset.action === 'plus') {
        console.log('Plus');

        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper)

        const counter = counterWrapper.querySelector('[data-counter]')
        console.log(counter)

        counter.innerText = ++counter.innerText;
    }

    
    if (event.target.dataset.action === 'minus') {
        console.log('Minus');

        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper)

        const counter = counterWrapper.querySelector('[data-counter]')
        console.log(counter)

        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
    }
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) == 1 ) {
            event.target.closest('.cart-item').remove();
            console.log(toggleCartStatus())
            total()
    }
    
        }

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        total()
    }
    
});



// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

// btnMinus.addEventListener('click', function () {

//     if (parseInt(counter.innerText) >= 1 ){
        
//     counter.innerText = --counter.innerText;

//     }
// });


// btnPlus.addEventListener('click', function () {
//     counter.innerText = ++counter.innerText;
// });






