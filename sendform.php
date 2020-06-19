<?
if ($_POST) { // eсли пeрeдaн мaссив POST
	$sendto = array('it.pvc@visa-prosto.com');
	
	$date = date("Y-m-d H:i:s");
	
	$name = nl2br($_POST['name']);
	$phone = nl2br($_POST['phone']);

	$content = "Заявка с сайта PENTA HOUSE";
	// Формирование заголовка письма
	$subject  = $content;
	$headers  = "From: info@penta-house.ru" . "\r\n";
	$headers .= "Reply-To: Без ответа". "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'5>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Письмо с сайта PENTA HOUSE</h2>\r\n";
	$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
	
	if(isset($_POST['date'])) $msg .= "<p><strong>Дата замера:</strong> ".nl2br($_POST['date'])."</p>\r\n";
	if(isset($_POST['adres'])) $msg .= "<p><strong>Адрес:</strong> ".nl2br($_POST['adres'])."</p>\r\n";
	

	$msg .= "</body></html>";
	
	// отправка сообщения
	foreach($sendto as $sendm){
		@mail($sendm, $subject, $msg, $headers);
	}
	
	header("Location: thanks.php");
}
?>