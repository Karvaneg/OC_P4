<?php	
	if(empty($_POST['nom']) && strlen($_POST['nom']) == 0 || empty($_POST['email']) && strlen($_POST['email']) == 0 || empty($_POST['info']) && strlen($_POST['info']) == 0 || empty($_POST['message']) && strlen($_POST['message']) == 0)
	{
		return false;
	}
	
	$name = $_POST['nom'];
	$email = $_POST['email'];
	$info = $_POST['info'];
	$message = $_POST['message'];
	
	$to = 'receiver@lapanthere.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message depuis le formulaire de contact de votre site La Panthère";
	$email_body = "Vous avez reçu un nouveau message. \n\n".
				  "Nom: $name \nEmail: $email \nInfo: $info \nMessage: $message \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@lapanthere.com\n";
	$headers .= "Reply-To: $info";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>