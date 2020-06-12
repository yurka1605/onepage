

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

    $('#phone').mask('+7 (999) 999 99 99');

    $('.page2__variant').on('click', function () {
        $(this).parent().children().each((i, el) => {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
       
        if($(this).hasClass('materials1')) {
            showNextMaterial(this, materials1, '.page2');
        }
       
        if($(this).hasClass('materials2')) {
            showNextMaterial(this, materials2, '.page5');
        }
    });

    $('.popup__control input').focus(function() {
        $(this).parent().addClass('focus');
    });

    $('.popup__control input').blur(function() {
        if (!$(this).val().trim()) {
            $(this).parent().removeClass('focus');
        }
    });
    
    $('.popup__close-btn, .popup-bg').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('popup-on');
        $('.popup__control input').each((i, el) => $(el).val(''));
    });

    $('button.callme-btn').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('popup-on');
    });
});

function showNextMaterial(selector, variants, wrapSelector) {
    var num = $(selector).data('num');
    var currentData = variants[num];
    var templateText = `<h3>${ currentData.title }</h3>`;
    currentData.text.forEach(p => templateText += `<p>${p}</p>`);
    templateText += `<button class="btn callme-btn">Заказать звонок</button>`;
    $(`${ wrapSelector }__bg:not(.active) img`).prop('src', `./images/${ currentData.img }`);
    $(`${ wrapSelector }__bg`).each((i, el) => {
        if ($(el).hasClass('active')) {
            $(el).addClass('noactive'); 
        }

        $(el).toggleClass('active');
    });
    $(`${ wrapSelector }__text`).addClass('hide');
    setTimeout(() => {
        $(`${ wrapSelector }__bg.noactive`).removeClass('noactive');
        $(`${ wrapSelector }__text`).removeClass('hide');
        $(`${ wrapSelector }__text`).html(templateText);
    }, 300);
}