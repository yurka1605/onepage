$(document).ready(function(){
    // настройка плагина
    $('.main').onepage_scroll({
        sectionContainer: 'section',
        responsiveFallback: 600,
        pagination: true,
        loop: true,
        keyboard: true,
        updateURL:  true,
        afterMove:  function () {
            console.log('all');
        },
    });

    $('.page__variant, .page2__variant').on('click', function () {
        $(this).parent().children().each((i, el) => {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
    })
});