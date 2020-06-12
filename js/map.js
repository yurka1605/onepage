$(document).ready(function() {

ymaps.ready(init);

function init () {
	var myMap = new ymaps.Map('map', {
		center: [55.782926568957116,37.715910999999956],
		zoom: 14
	});

	myMap.controls.add('smallZoomControl');


	

	// Добавляем все метки на карту.
	

		var placemark = new ymaps.Placemark([55.776426, 49.140748], {
			// Свойства.
			hintContent: 'Кухни',
			balloonContent: '<div class="balloon"><a href="tel:+7 800 700-84-67">+7 800 700-84-67</a> <br />г. Казань, ул. Островского, 107<br />График работы: 09:00 - 21:00</div>'
		}, {
			// Опции.
			// Своё изображение иконки метки.
			iconImageHref: 'https://visa-prosto.com/wp-content/themes/pvc/images/ico-marker.svg',
			// Размеры метки.
			iconImageSize: [39, 46],
			// // Смещение левого верхнего угла иконки относительно
			// // её "ножки" (точки привязки).
			iconImageOffset: [-17, -49]
		});

		myMap.geoObjects.add(placemark);
	


	myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange:true});

	ymaps.util.bounds.getCenterAndZoom(
		myMap.getBounds(),
		myMap.container.getSize(),
		myMap.options.get('projection')
	);
}

});