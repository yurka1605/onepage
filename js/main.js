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
    $('.page2__variant').on('click', function () {
        $('.page2__variant').each((i, el) => {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
    })
});