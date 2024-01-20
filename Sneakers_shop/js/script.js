$(".catalog__item-img").on("click", function () {
    $(this).click(function () {
        $(".modal_bigitem").css("display", "flex");
        $(".modal__bigitem-img").attr("src", $(this).attr("src"));
        $(".modal__bigitem-title").text($(this).next().text());
        $(".modal__bigitem-sale").text($(this).next().next().text())
    });
    $(".modal_cross").click(function () {
        $(".modal_bigitem").css("display", "none");
    });
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $(".modal_bigitem").css("display", "none");
        }
    });
    $(document).click(function (e) {
        if ($(e.target).is('.modal_bigitem')) {
            $(".modal_bigitem").css("display", "none");
        }
    });
})
$(".cart-container").on("click", function (event) {
    event.preventDefault();
    $(this).click(function () {
        $(".modal_smallcart").css("display", "flex");
    });
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $(".modal_smallcart").css("display", "none");
        }
    });
    $(document).click(function (e) {
        if ($(e.target).is('.modal_smallcart')) {
            $(".modal_smallcart").css("display", "none");
        }
    });
})
$(".smallcart__footer-button").on("click", function (event) {
    event.preventDefault();
    $(this).click(function () {
        $(".modal_smallcart").css("display", "none");
        $(".modal_cart").css("display", "flex");
    });
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $(".modal_cart").css("display", "none");
        }
    });
    $(document).click(function (e) {
        if ($(e.target).is('.modal_cart')) {
            $(".modal_cart").css("display", "none");
        }
    });
})
function dell_bigcart() {
    $(".modal__cart-dell").on("click", function () {
        let amount = Number($(".cart__info-number").text().split(" ")[0]) - 1;
        $(".cart__info-number").text(amount + " шт");
        let price = Number($(".cart__info-price").text().replace(/[^0-9]/g, "")) - Number($(this).prev().children(".modal__caert-price").text().replace(/[^0-9]/g, ""))
        $(".cart__info-price").text(price + " ₽");
        $(this).parent().remove();
    })
}
dell_bigcart()
function create_small_cart_element(obj) {
    let newCartElem = $('<div>').addClass('modal__smallcart-item');
    newCartElem.append(`<img src="${obj.src}" alt="" class="modal__smallcart-img">`);
    newCartElem.append(`<div class="modal__smallcart-titels">
    <h1 class="modal__smallcart-name">${obj.name}
    </h1>
    <p class="modal__smallcaert-price">${obj.price}</p>
</div>`);
    newCartElem.append(` <svg class="modal__smallcart-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_65_683)">
    <path
        d="M18.5715 2.85715H13.5715V2.14285C13.5715 0.959387 12.6121 0 11.4287 0H8.57152C7.38805 0 6.42867 0.959387 6.42867 2.14285V2.85715H1.42865C1.03415 2.85715 0.714355 3.17695 0.714355 3.57145C0.714355 3.96595 1.03419 4.28571 1.42865 4.28571H2.20506L3.57151 19.3507C3.6052 19.7196 3.91537 20.0015 4.28581 20H15.7144C16.0848 20.0015 16.395 19.7196 16.4287 19.3507L17.7951 4.28571H18.5715C18.966 4.28571 19.2858 3.96591 19.2858 3.57141C19.2858 3.17691 18.966 2.85715 18.5715 2.85715ZM7.85722 2.14285C7.85722 1.74835 8.17702 1.42856 8.57152 1.42856H11.4287C11.8232 1.42856 12.143 1.74835 12.143 2.14285V2.85715H7.85726V2.14285H7.85722ZM15.0622 18.5714H4.93796L3.64295 4.28571H7.14296H16.3608L15.0622 18.5714Z"
        fill="#4D4D4D" fill-opacity="0.3" />
    <path
        d="M7.8573 16.381C7.85722 16.38 7.85717 16.379 7.85709 16.378L7.14279 6.37805C7.11479 5.98355 6.77227 5.68647 6.3778 5.71447C5.9833 5.74247 5.68623 6.085 5.71423 6.47946L6.42853 16.4794C6.45519 16.854 6.76733 17.144 7.14283 17.143H7.19427C7.58781 17.1157 7.88467 16.7745 7.8573 16.381Z"
        fill="#4D4D4D" fill-opacity="0.3" />
    <path
        d="M9.99994 5.71436C9.60544 5.71436 9.28564 6.03415 9.28564 6.42865V16.4286C9.28564 16.8231 9.60544 17.1429 9.99994 17.1429C10.3944 17.1429 10.7142 16.8231 10.7142 16.4286V6.42865C10.7142 6.03415 10.3944 5.71436 9.99994 5.71436Z"
        fill="#4D4D4D" fill-opacity="0.3" />
    <path
        d="M13.6219 5.71423C13.2274 5.68623 12.8849 5.9833 12.8569 6.3778L12.1426 16.3778C12.1137 16.7712 12.4091 17.1136 12.8026 17.1425C12.8038 17.1426 12.8049 17.1427 12.8062 17.1428H12.8569C13.2324 17.1437 13.5445 16.8537 13.5712 16.4792L14.2855 6.47921C14.3135 6.08475 14.0164 5.74227 13.6219 5.71423Z"
        fill="#4D4D4D" fill-opacity="0.3" />
</g>
<defs>
    <clipPath id="clip0_65_683">
        <rect width="20" height="20" fill="white" />
    </clipPath>
</defs>
</svg>`);
    return newCartElem;

}
$(".modal__bigitem-button").on("click", function () {
    let item = {
        "name": "",
        "price": "",
        "src": ""
    }
    item.name = $(this).parent().children(".modal__bigitem-title").text();
    item.price = $(this).prev().children(".modal__bigitem-sale").text();
    item.src = $(this).parent().prev().children(".modal__bigitem-img").attr("src");
    let new_cart_element = create_small_cart_element(item);
    $(".modal__smallcart-items").append(new_cart_element);
    $(".modal_bigitem").css("display", "none");

})

$(document).on('DOMNodeInserted', '.modal__smallcart-items', function (event) {
    let counter = 0;
    let final_price = 0;
    ($(".modal__smallcart-items").children()).each(function () {
        counter++;
        final_price = final_price + Number($(this).children(".modal__smallcart-titels").children(".modal__smallcaert-price").text().replace(/[^0-9]/g, ""));
    });
    let cartelem = {
        "name": "",
        "price": "",
        "src": ""
    };
    cartelem.name = $(event.target).children(".modal__smallcart-titels").children(".modal__smallcart-name").text();
    cartelem.price = $(event.target).children(".modal__smallcart-titels").children(".modal__smallcaert-price").text();
    cartelem.src = $(event.target).children(".modal__smallcart-img").attr("src");
    $(".modal__cart-items").append(create_cart_element(cartelem));
    dell_bigcart()
    $(".cart__info-number").text(counter + " шт");
    $(".cart__info-price").text(final_price + " ₽");
    $(".smallcart__footer-finalprice").text(final_price + " ₽");
    $(".header__item-cart-counter-text").text(counter);
    svg_onclick()
});
$(document).on('DOMNodeRemoved', '.modal__smallcart-items', function (event) {
    let counter = Number($(".header__item-cart-counter-text").text()) - 1;
    let final_price = Number($(".smallcart__footer-finalprice").text().replace(/[^0-9]/g, ""));
    let elem_price = Number($(event.target).children(".modal__smallcart-titels").children(".modal__smallcaert-price").text().replace(/[^0-9]/g, ""));
    final_price -= elem_price;
    let del_elem = $(event.target).children(".modal__smallcart-titels").children(".modal__smallcart-name").text();
    $(`.modal__cart-name:contains("${del_elem}")`).parent().parent()[0].remove();
    $(".cart__info-number").text(counter + " шт");
    $(".cart__info-price").text(final_price + " ₽");
    $(".smallcart__footer-finalprice").text(final_price + " ₽");
    $(".header__item-cart-counter-text").text(counter);
});
function create_cart_element(obj) {
    let newCartElem = $('<div>').addClass('modal__cart-item');
    newCartElem.append(`<img src="${obj.src}" alt="" class="modal__cart-img">`);
    newCartElem.append(`<div class="modal__cart-titels">
    <h1 class="modal__cart-name">${obj.name}
    </h1>
    <p class="modal__caert-price">${obj.price} </p>
</div>`);
    newCartElem.append(`<p class="modal__cart-dell">Удалить</p>`);
    return newCartElem;
}
function svg_onclick() {
    $(".modal__smallcart-svg").on("click", function () {
        $(this).parent().remove();
    })
}
svg_onclick()