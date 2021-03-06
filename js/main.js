

$(document).ready(function() {
    if ($(window).width() < 769) {
        $('.page3').remove();
    }
    $(window).resize(function () {
        location.reload();
    });
    // настройка плагина
    $('.main').onepage_scroll({
        sectionContainer: 'section',
        responsiveFallback: 320,
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
        if ($(this).hasClass('active')) {
            return;
        }
        
        $(this).parent().children().each((i, el) => {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
       
        if($(this).hasClass('materials1')) {
            showNextMaterial(this, materials1, '.page2');
        } else {
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

    $('.page2, .page5').swipe( {
        swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
            if (phase=="end") {
                //сработает через 20 пикселей то число которое выбрали в threshold
                if (direction == 'left') {
                    //сработает при движении влево
                    var next = '';
                    if ($(this).hasClass('page2')) {
                        var num = $('.materials1.active').data('num');
                        next = num !== 7 ? $('.materials1.active').next() : $('.materials1:first-child');
                        $('.materials1.active').removeClass('active');
                        showNextMaterial(next, materials1, '.page2');
                    } else {
                        var num = $('.materials2.active').data('num');
                        next = num !== 7 ? $('.materials2.active').next() : $('.materials2:first-child');
                        $('.materials2.active').removeClass('active');
                        showNextMaterial(next, materials2, '.page5');
                    }
                    $(next).addClass('active');
                }
                if (direction == 'right') {
                    //сработает при движении вправо
                    var prev = '';
                    if ($(this).hasClass('page2')) {
                        var num = $('.materials1.active').data('num');
                        prev = num !== 0 ? $('.materials1.active').prev() : $('.materials1:last-child');
                        $('.materials1.active').removeClass('active');
                        showNextMaterial(prev, materials1, '.page2');
                    } else {
                        var num = $('.materials2.active').data('num');
                        prev = num !== 0 ? $('.materials2.active').prev() : $('.materials2:last-child');
                        $('.materials2.active').removeClass('active');
                        showNextMaterial(prev, materials2, '.page5');
                    }
                    $(prev).addClass('active');
                }
            }
        },
        triggerOnTouchEnd: false,
        threshold: 20 // сработает через 20 пикселей
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