let nav_menu = {
    "burger-nav": "catalog__burgers",
    "snack-nav": "catalog__snack",
    "hotdog-nav": "catalog__hotdogs"
};
update_Chart_toolbar();
function createCartElem(obj) {
    let newCartElem = $('<li>').addClass('cart__card');
    // Далее, можешь добавить нужные элементы внутрь этого нового элемента
    newCartElem.append(`<img src="${obj.img}" alt="burger" width="64px" height="52px" class="cart__card-img">`);
    newCartElem.append(`<div class="cart__card-info"><p class="cart__card-text">${obj.name}</p>
    <p class="cart__weight">${obj.weight}</p>
    <p class="cart__card-price">${obj.price}</p></div>`);
    newCartElem.append(`<div class="cart__card-counters"><button class="cart__card-minus">-</button>
    <p class="cart__card-counter">${obj.amount}</p>
    <button class="cart__card-plus" onclick="plus">+</button></div>`);
    return newCartElem;
}
function updateChart() {
    let curr = 0;
    let price = 0;
    if ($(".cart__cards").children().length == 0) {
        $(".cart__summ").addClass("disabled");
        $(".cart__footer").addClass("disabled");
        $(".cart__info-counter").text("0");
    } else {
        $(".empty_cart").addClass("disabled");
        $(".cart__summ").removeClass("disabled");
        $(".cart__footer").removeClass("disabled");
        $(".cart__card-price").each(function () {
            let counts = Number($(this).parent().next().children(".cart__card-counter").text());
            price += counts * Number($(this).text().replace(/[^0-9]/g, ""));
        });
        $(".cart__card-counter").each(function () {
            curr += Number($(this).text());
        });
        $(".cart__summ-prise").text(price + "₽");
        $(".cart__info-counter").text(curr);
    }
}
updateChart();
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

            $(`.cart__card .cart__card-info>p:contains(${item_obj.name})`).parent().next().children(".cart__card-counter").text(Number($(`.cart__card .cart__card-info>p:contains(${item_obj.name})`).parent().next().children(".cart__card-counter").text()) + 1
            )
        }
        else {
            $(".cart__cards").append(new_cartelem);
        }
    }

    updateChart()
    update_Chart_toolbar()
});
$(".nav__card").on("click", function () {
    let targrt_id = $(this).attr("id");
    let curr_active_nav = $(".orange");
    let index_curr = "." + nav_menu[curr_active_nav.attr("id")];
    let curr_active_catalog = $(index_curr);
    $(this).addClass("orange");
    curr_active_nav.removeClass("orange");
    curr_active_catalog.addClass("disabled");
    let new_active_catalog = "." + nav_menu[targrt_id];
    $(new_active_catalog).removeClass("disabled");
    $(".catalog__title").text($(this).children(".nav__card-text").text())

})
function update_Chart_toolbar() {
    $(".cart__card-minus").on("click", function () {
        let index = $(this).next().text();
        if (index == 1) {
            $(this).parent().parent().remove();
        } else {
            index = index - 1;
        };
        $(this).next().text(index);
        updateChart()
    })
    $(".cart__card-plus").on("click", function () {
        let index = Number($(this).prev().text());
        index = index + 1;
        $(this).prev().text(index);
        updateChart()
    })
}
$(document).ready(function () {
    $(".cart__footer-button").click(function () {
        $(".modal").css("display", "flex");
    });
    $(".modal_cross").click(function () {
        $(".modal").css("display", "none");
    });
});
$(".modal_checkbox").on("click", function () {
    let target = $(this).attr("id");
    switch (target) {
        case "dilvery":
            $(".modal__form-takeout-container").removeClass("invisible");
            $("#street").attr("required", "required");
            $("#floor").attr("required", "required");
            $("#intercom").attr("required", "required");
            break;
        case "takeout":
            $(".modal__form-takeout-container").addClass("invisible");
            $("#street").removeAttr("required");
            $("#floor").removeAttr("required");
            $("#intercom").removeAttr("required");
            break;
        default:
            break;
    }
})
jQuery(function ($) {
    $('#name').on('input', function () {
        var inputValue = $(this).val();
        var regex = /[^А-Яа-яЁё]/g; // Регулярное выражение, которое разрешает только русские символы

        if (regex.test(inputValue)) {
            $(this).val(inputValue.replace(regex, '')); // Удаляем символы, не являющиеся русскими
        }
    });
    $("#phone").mask("+7 (999) 999-99-99");
    $("#phone").attr('pattern', '\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}');
});
$(".catalog__card-img").on("click", function () {
    $(".modal__bigitem-img").attr("src", $(this).attr("src"));
    $(".modal__bigitem-title").text($(this).next().children(".catalog__card-name").text());
    $(".modal__sostav-info").text($(this).next().children(".catalog__card-weight").text() + ", ккал 440")
    $(".modal__bigitem-prize").text($(this).next().children(".catalog__card-price").text());
    $(this).click(function () {
        $(".modal_bigitem").css("display", "flex");
    });
    $(".modal_cross").click(function () {
        $(".modal_bigitem").css("display", "none");
        $(".modal__bigitem-counter").text("1");
    });
})
$(".modal__bigitem-minus").on("click", function () {

    let index = $(this).next().text();
    if (index == 1) {
    } else {
        index = index - 1;
    };
    $(this).next().text(index);
})
$(".modal__bigitem-plus").on("click", function () {
    let index = Number($(this).prev().text());
    index = index + 1;
    $(this).prev().text(index);
})
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
            $(`.cart__card .cart__card-info>p:contains(${item_obj.name})`).parent().next().children(".cart__card-counter").text(Number($(`.cart__card .cart__card-info>p:contains(${item_obj.name})`).parent().next().children(".cart__card-counter").text()) + amount
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