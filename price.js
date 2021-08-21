function updatePrice(cost, costValue) {
    // PRICE UPDATE SECTION...
    let price = document.getElementById(cost + "-cost");
    price.innerText = costValue;

    // TOTAL PRICE SECTION...
    let bestPrice = document.getElementById("best-cost").innerText;
    let memoryPrice = document.getElementById("memory-cost").innerText;
    let storagePrice = document.getElementById("ssd-cost").innerText;
    let deliveryPrice = document.getElementById("delivery-cost").innerText;
    let totalPrice = document.getElementById("total-cost");
    let grandTotal = document.getElementById("grand-total");
    let promoCode = document.getElementById("promo-code").value;

    if (parseInt(memoryPrice) > 0 || parseInt(storagePrice) > 0 || parseInt(deliveryPrice) > 0) {
        totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt
            (storagePrice) + parseInt(deliveryPrice);
    }
    else {
        totalPrice.innerText = parseInt(bestPrice);
    }
    grandTotal.innerText = totalPrice.innerText;
}

// ALL EVENT HANDLER START HERE...
document.getElementById("memory8").addEventListener('click', function () {
    updatePrice("memory", 0);
})

document.getElementById("memory16").addEventListener('click', function () {
    updatePrice("memory", 180);
})


document.getElementById("ssd256").addEventListener('click', function () {
    updatePrice("ssd", 0);
})

document.getElementById("ssd512").addEventListener('click', function () {
    updatePrice("ssd", 100);
})

document.getElementById("ssd1tb").addEventListener('click', function () {
    updatePrice("ssd", 180);
})

document.getElementById("aug25").addEventListener('click', function () {
    updatePrice("delivery", 0);
})

document.getElementById("aug21").addEventListener('click', function () {
    updatePrice("delivery", 20);
})

// PROMO-CODE SECTION...
document.getElementById("code-btn").addEventListener('click', function () {
    let grandTotal = document.getElementById("grand-total");
    let codeTag = document.getElementById("promo-code");
    let promoCode = codeTag.value.toLowerCase();
    let discount = '.2';
    let discountPrice = 0;
    let getDiscount = document.getElementById("discount");
    if (promoCode == 'stevekaku' && getDiscount.innerText == '1') {
        discountPrice = grandTotal.innerText * discount;
        grandTotal.innerText = parseFloat(grandTotal.innerText) - parseFloat(discountPrice);
        getDiscount.innerText = 2;
        codeTag.value = '';
    }
})