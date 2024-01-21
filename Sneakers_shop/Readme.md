<h1 align="center">Sneaker shop</h1>
<p>Реализован одностраничный сайт, на котором можно произвести произвести покупку кросовок</p>
<p>В макете изначально было предусмотрено 2 корзины, одна маленькая для быстрого пользования, а вторая для оформления доставки. Для их синхронизации мной было написана следующие фукнции</p>

```javascript
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
```

```javascript
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
```
<p>Так же были реализовано добавление позиций в корзину и их удаление, возможность отображения полной информации о товаре. Все эти дополнительные окна были сделаны при помощи модальных окон</p>
