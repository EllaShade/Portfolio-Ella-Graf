<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $to = "elvira.a.graf@gmail.com"; 
    $subject = "Neue Nachricht von " . $_POST['name'];
    $message = "Name: " . $_POST['name'] . "\n\n";
    $message .= "Email: " . $_POST['email'] . "\n\n";
    $message .= "Nachricht:\n" . $_POST['message'];

    $mail = new PHPMailer(true);
    $mail->Debugoutput = 'html';
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'elvira.a.graf@gmail.com'; 
    $mail->Password = 'Michael08331*'; 
    $mail->SMTPSecure = 'tls'; 
    $mail->Port = 587; 

    try {
        $mail->setFrom('elvira.a.graf@gmail.com', 'Elvira Graf');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Error sending message. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Error: Incomplete data.";
}
?>
