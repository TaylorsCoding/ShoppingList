$(document).ready(function () {

    let form = $("#js-shopping-list-form");
    form.on("submit", function (event) {
        event.preventDefault()
        let item = $('#shopping-list-entry').val();
        let html = `\
            <li>\
              <span class="shopping-item">${item}</span>\
              <div class="shopping-item-controls">\
                <button class="shopping-item-toggle">\
                  <span class="button-label">check</span>\
                </button>\
                <button class="shopping-item-delete">\
                  <span class="button-label">delete</span>\
                </button>\
              </div>\
           </li >`;
        let list = $(".shopping-list").first();

        list.append(html);


    });


    let checkButtons = $(".shopping-item-toggle")

    $.each(checkButtons, function (i, btn) {
        $(btn).on("click", function () {
            let parentLi = $(this).parent().parent();

            let textSpan = $('.shopping-item', parentLi).first();
            // toggle things in code. 
            if (textSpan.hasClass('shopping-item__checked')) {
                textSpan.removeClass('shopping-item__checked');
            }
            else {
                textSpan.addClass('shopping-item__checked');
            }

        });
    });
    let deleteButtons = $("shopping-item-delete")

    $.each(deleteButtons, function (i, btn) {
        $(btn).on("click", function () {
            let ParentLi = $(this).parent().parent();

            let removeItem = $('shopping-item', ParentLi).first();

            if (removeItem.hasClass('shopping-item__checked')) {
                removeItem.removeClass('shopping-item__checked');
            }
            debugger
        })
    })

});