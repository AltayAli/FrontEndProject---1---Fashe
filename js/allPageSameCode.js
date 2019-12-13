
let isClickChevronButton = false;
setInterval(() => {
    if (parseInt($(window).width()) > 768) {
        $(".page-main-navigation").addClass('sticky-top')
    } else {
        $(".page-main-navigation").removeClass('sticky-top')
    }
}, 1000)

$(".instagram-img").hover(function () {
    $(this).children('.content-img').children('.cover').fadeToggle();
})

$('.footer-right-side input').focus(function () {
    let prigressBarWidth = parseInt(getComputedStyle(document.querySelector('.progress')).width)
    let interval = setInterval(() => {
        let style = parseInt(getComputedStyle(document.querySelector('.progress-bar')).width);
        style += 500;
        $('.progress-bar').css('width', `${style}px`);
        if (style > prigressBarWidth) {
            clearInterval(interval);
        }
    }, 10);
})
$('.footer-right-side input').blur(function () {
    let prigressBarWidth = parseInt(getComputedStyle(document.querySelector('.progress')).width)
    let interval = setInterval(() => {
        let style = parseInt(getComputedStyle(document.querySelector('.progress-bar')).width);

        style -= 500;
        $('.progress-bar').css('width', `${style}px`);
        if (style < 0) {
            clearInterval(interval);
        }
    }, 10);
})
$('.sendiwich-menu').click(function () {
    $('.dropdown-menu').slideDown();
    $(this).hide();
    $('.close-icon').show();
})
$('.close-icon').click(function () {
    $('.dropdown-menu').slideUp();
    $(this).hide();
    $('.sendiwich-menu').show();
})

$('.dropdown-button').click(function (e) {
    $('.dropdown-button').slideToggle();
    $(this).css({ 'color': 'white' });
    if (!isClickChevronButton) {
        isClickChevronButton = true;
        $(this).css({ 'transform': 'rotate(90deg)' });
    } else {
        isClickChevronButton = false;
        $(this).css({ 'transform': 'rotate(0deg)' });
    }

})
for (let f in product) {
    showProducts(product[f], f, `.page-banner-${f}`);
    $(`.page-banner-${f} .content-img`).hover(function () {
        $(this).children('.cover').fadeToggle();
    })
}
setInterval(() => {
    let count = 0;
    for (let f in product) {
        if (isElementInLocalStorage(`card-${f}`)) {
            count++;

        }
    }
    $('.numberSpan p').text(count);
}, 1000);

$('.nav-item').hover(function () {
    $(this).children('.sub-menu').fadeToggle();
});

function pageProductContentImgSize(width, height) {
    let contentImg = $('.content-img');
    for (let f of contentImg) {
        $(f).css({ 'width': `${width}`, 'height': `${height}` })
    }
}

function AddSwalToElement(element, specificKeyName, IndexForLocalStorage, title, message,callback) {
    if (localStorage[`${specificKeyName}-${IndexForLocalStorage}`] == undefined || localStorage[`${specificKeyName}-${IndexForLocalStorage}`] == null) {
        let query = JSON.stringify(element[IndexForLocalStorage]);
        localStorage.setItem(`${specificKeyName}-${IndexForLocalStorage}`, query);
        swal({
            title: title,
            text: message,
            icon: "success",
            button: "OK",
        });
    } else {
        if(callback!=null){
            callback();
        }else{
            swal({
                title: "This item already  has been existed",
                icon: "warning",
                button: "OK",
            });
        }
    }


}

function checkLikedElement(checkColor,unchecedColor) {
    for (let f in product) {
        if (isElementInLocalStorage(product, `liked-${f}`)) {
            $(`.liked-icon-${f} i`).css('color', checkColor);

        }else{
            $(`.liked-icon-${f} i`).css('color', unchecedColor);
        }
    }
}
function isElementInLocalStorage(key) {
    let isHere = false;
    if (localStorage[key] != undefined) {
        isHere = true
    }

    return isHere;
}
function addFunctionalityPageBanner() {
    for (let f in product) {
        $(`.add-to-cart-${f}`).click((e) => {
            e.preventDefault();
            AddSwalToElement(product, 'card', f, product[f]['name'], "is added to cart !");
        });
        $(`.liked-icon-${f}`).click((e) => {
            e.preventDefault();
            AddSwalToElement(product, 'liked', f, product[f]['name'], "is added to wishlist !",()=>{
                localStorage.removeItem(`liked-${f}`);
                checkLikedElement('#e05f4b','#fefefe');
            });
            checkLikedElement('#e05f4b','#fefefe');
        })
    }
}
function addPageBannerToPage(count=0) {
    for (let f in product) {
        if (count == 12) {
            break;
        }
        $('.product-shower').append(`<div class='page-banner-${f} page-banner col-12 col-md-4 pl-0'></div>`)
        showProducts(product[f], f, `.page-banner-${f}`);
        $(`.page-banner-${f} .content-img`).hover(function () {
            $(this).children('.cover').fadeToggle();
        })
        count++;
    }

}

function installOwlCarousel(sm_count=1,md_count=3,lg_count=4){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:sm_count
            },
            600:{
                items:md_count
            },
            1000:{
                items:lg_count
            }
        }
    })
}