

$(document).ready(function() {
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
       
        if($(this).hasClass('page2__variant')) {
            showNextMaterial(this, materials, '.page2');
        }
    });
});

function showNextMaterial(selector, variants, wrapSelector) {
    var num = $(selector).data('num');
    var currentData = variants[num];
    var templateText = `<h3>${ currentData.title }</h3>`;
    currentData.text.forEach(p => templateText += `<p>${p}</p>`);
    $(wrapSelector).css('background-image', `url(./images/${ currentData.img })`);
    $(`${ wrapSelector }__text`).addClass('hide');
    setTimeout(() => {
        $(`${ wrapSelector }__text`).removeClass('hide');
        $(`${ wrapSelector }__text`).html(templateText);
    }, 300);
}