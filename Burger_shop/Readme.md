<h1 align="center">Burger shop</h1>
<p align="center">Была реализована верстка магазина доставки еды, с возможностью добавления позиций в корзину</p>
```
$(".catalog__card-button").on("click", function () {
    let item_obj = {
        "price": "",
        "name": "",
        "weight": "",
        "img": "",
        "amount": "1"
    }
    item_obj.price = $(this).prev().children(".catalog__card-price").text();
    item_obj.name = $(this).prev().children(".catalog__card-name").text();
    item_obj.weight = $(this).prev().children(".catalog__card-weight").text();
    item_obj.img = $(this).prev().prev().attr("src");
    let new_cartelem = createCartElem(item_obj);
    let curr_cart = [];
    $(".cart__cards").children().each(function () {
        let curr_position_name = $(this).children(".cart__card-info").children(".cart__card-text").text();
        curr_cart.push(curr_position_name);
    })
    if ($(".cart__cards").children()) {
        if (curr_cart.includes(item_obj.name)) {
            $(\`.cart__card .cart__card-info>p:contains(${item_obj.name})\`).parent().next().children(".cart__card-counter")
            .text(Number($(\`.cart__card .cart__card-info>p:contains(${item_obj.name})\`).parent()
            .next().children(".cart__card-counter").text()) + 1
            )
        }
        else {
            $(".cart__cards").append(new_cartelem);
        }
    }
    updateChart()
    update_Chart_toolbar()
});
```
<p align="center">Так же добавлена возмодность открытия товара в модальном окне с дополнительной информациией о нем</p>
```
$(".modal__bigitem-button").on("click", function () {
    let amount = Number($(this).next().children(".modal__bigitem-counter").text());
    let item_obj = {
        "price": "",
        "name": "",
        "weight": "",
        "img": "",
        "amount": ""
    }
    item_obj.price = $(".modal__bigitem-prize").text();
    item_obj.name = $(".modal__bigitem-title").text();
    item_obj.weight = $(".modal__sostav-info").text().split(",")[0];
    item_obj.amount = $(".modal__bigitem-counter").text();
    item_obj.img = $(".modal__bigitem-img").attr("src");
    let new_cartelem = createCartElem(item_obj);
    let curr_cart = [];
    $(".cart__cards").children().each(function () {
        let curr_position_name = $(this).children(".cart__card-info").children(".cart__card-text").text();
        curr_cart.push(curr_position_name);
    })
    if ($(".cart__cards").children()) {
        if (curr_cart.includes(item_obj.name)) {
            $(\`.cart__card .cart__card-info>p:contains(${item_obj.name})\`).parent().next()
            .children(".cart__card-counter").text(Number($(\`.cart__card .cart__card-info>p:contains(${item_obj.name})\`)
            .parent().next().children(".cart__card-counter").text()) + amount
            )
        }
        else {
            $(".cart__cards").append(new_cartelem);
        }
    }
    updateChart()
    update_Chart_toolbar()
    $(".modal__bigitem-counter").text("1");
    $(".modal_bigitem").hide();
})
```
