$('body').attr('id', "1");
$('body').append(
    `<div class="upper-button" id="1">
    <div class="content-img">
        <div class="cover">
            <a href="#1"><i  class="mdi mdi-chevron-double-up"></i></a>
        </div>
    </div>
</div>`
)
$('.upper-button').hide();
$(window).scroll(function () {
    let cursor = parseInt($(window).scrollTop());
    if (cursor > 175) {
        $('.upper-button').show();
    } else {
        $('.upper-button').hide();
    }
})