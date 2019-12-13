$('.user-bucket-items').hover(function () {
    $(this).css('cursor', 'pointer');
});
$('.user-bucket-items').click(function (e) {
    $('.added-products-list .products').html('');
    e.stopPropagation();
    for (let f in product) {
        if (localStorage[`card-${f}`] != undefined && localStorage[`card-${f}`] != null) {
            let element = JSON.parse(localStorage[`card-${f}`])
            $('.added-products-list .products').append(`<div class="row justify-content-between product-list${f}">
            <div class="col-4 product  product-${f}">
                <img src="${element['img']}" alt="">
                <div class="content-img">

                <div class='cover' style="width:70%;"> <i class="mdi mdi-close"> </i></div>
                </div>
            </div>
            <div class="col-7">
               <a class="product-link">${element['name']}</a>
                <p>1x$${element['new price']}</p>
            </div>
        </div>`);
        }
        $(`.product-${f}`).hover(function(){
            $(this).children('.content-img').fadeToggle();
        });
    
        $(`.product-${f} .cover`).click(function(e){
            e.stopPropagation();
        let localKey= $(this).parent().parent().parent().attr('class').substring(40);
            console.log($(this).parent().parent().parent().attr('class').substring(40));
            $(this).parent().parent().parent().remove();
            localStorage.removeItem(localKey);
        })
    }

    $('.added-products-list').css('display', 'block');
    $('.added-products-list').addClass('zoomInRight');
    $('.added-products-list').removeClass('zoomOutRight');
    
});
$(window).click(() => {
    if ($('.added-products-list').css('display') == 'block') {

        $('.added-products-list').removeClass('zoomInRight');
        $('.added-products-list').addClass('zoomOutRight');
        setTimeout(() => {
            $('.added-products-list').css('display', 'none');
        }, 1000);
    }
})