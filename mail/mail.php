<?php


//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: POST");
//header("HTTP_ACCEPT: application/x-www-form-urlencoded");


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"');
header("HTTP_ACCEPT: multipart/form-data");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'Validator.php';

$mail = new PHPMailer();


try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

        $config = require 'config/config.php';

        if ($config['isSmtp'] === true){
            //        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            $mail->isSMTP();
            $mail->Host       = $config['host'];
            $mail->SMTPAuth   = $config['auth'];
            $mail->Username   = $config['name'];
            $mail->Password   = $config['pass'];
            //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = $config['port'];
        } else {
            $mail->isSendmail();
        }


        $parse_url = parse_url($_SERVER['HTTP_REFERER']);

        if (trim($parse_url['path'],  '/') === 'contacts'){


            $data = Validator::validationContact($_POST, $_FILES);


            if (!isset($data['error'])){

                $mail->setFrom($data['email'], $data['name']);
                $mail->addAddress($config['email']);

                foreach ($_FILES as $FILE) {
                    move_uploaded_file($FILE['tmp_name'], 'uploads/' . $FILE['name']);
                    $mail->addAttachment('uploads/' . $FILE['name']);
                }

                // Content
                ob_start();
                include 'views/send_mail_pages.php';
                $str = ob_get_clean();

                $mail->isHTML(true);
                $mail->Subject = $data['company'];
                $mail->Body    = $str;

                $mail->send();

                foreach ($_FILES as $FILE) {
                    if (file_exists('uploads/' . $FILE['name']))
                    unlink('uploads/' . $FILE['name']);
                }
                echo json_encode(['success' => "Message has be sent"]);exit;

            }

            echo json_encode($data);exit;

        } elseif (preg_match('#/vacancies/*#', $parse_url['path'])){

            $data = Validator::validationVacancy($_POST, $_FILES);


            if (!isset($data['error'])){

                $mail->setFrom($data['email'], $data['name']);
                $mail->addAddress($config['email']);

                move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);
                $mail->addAttachment('uploads/' . $_FILES['file']['name']);

                // Content
                ob_start();
                include 'views/send_mail_pages.php';
                $str = ob_get_clean();

                $mail->isHTML(true);
                $mail->Subject = $data['name'];
                $mail->Body    = $str;

                $mail->send();

                unlink('uploads/' . $_FILES['file']['name']);

                echo json_encode(['success' => "Message has be sent"]);exit;

            }

            echo json_encode($data);exit;

        } else {

            $data = Validator::validationHome($_POST);

            if (!isset($data['error'])){

                $mail->setFrom($data['email'], $data['name']);
                $mail->addAddress($config['email']);

                ob_start();
                include 'views/send_mail.php';
                $str = ob_get_clean();

                $mail->isHTML(true);
                $mail->Subject = $data['company'];
                $mail->Body    = $str;

                $mail->send();

                echo json_encode(['success' => "Message has be sent"]);exit;
            }
            echo json_encode($data);exit;
        }


    }
} catch (Exception $e) {
//    echo json_encode(['error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);exit;
    echo json_encode(['error' => "Message could not be sent. Something wrong!"]);exit;
}