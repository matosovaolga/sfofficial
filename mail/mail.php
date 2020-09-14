<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("HTTP_ACCEPT: application/x-www-form-urlencoded");


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

        $json = file_get_contents('php://input');

            // Converts it into a PHP object
        $data_decode = json_decode($json);

        $data = validate($data_decode);

        if (!isset($data['error'])){
            //        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            $mail->isSMTP();
            $mail->Host       = 'smtp.1and1.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'contact@stableflow.com';
            $mail->Password   = 'SFpass123.';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            //Recipients
            $mail->setFrom($data['contactFormEmail'], $data['contactFormName']);
            $mail->addAddress('info@stableflow.com');     // add address to


            // Content
            $str = "<h1>You received a letter!</h1>";
            $str .= "<p><b>Name: </b> {$data['contactFormName']}</p>";
            $str .= "<p><b>Email: </b> {$data['contactFormEmail']}</p>";
            $str .= "<p><b>Phone: </b> {$data['contactFormPhone']}</p>";
            $str .= "<p><b>Subject: </b> {$data['contactFormSubject']}</p>";
            $str .= "<p><b>Message: </b> <br> {$data['contactFormMessage']}</p>";

            $mail->isHTML(true);
            $mail->Subject = $data['contactFormSubject'];
            $mail->Body    = $str;

            $mail->send();

            echo json_encode(['success' => "Message has be sent"]);exit;
        }
        echo json_encode($data);exit;
    }
} catch (Exception $e) {
    echo json_encode(['error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);exit;
}

function validate($data)
{

    $data = getCleanData($data);

    $errors = [];

    if (empty($data['contactFormName'])) {
        $errors['error']['name'] = 'Field Name required!';
    }

    if (empty($data['contactFormEmail'])) {
        $errors['error']['email'] = 'Field Email required!';
    } elseif (!filter_var($data['contactFormEmail'], FILTER_VALIDATE_EMAIL)) {
        $errors['error']['email'] = 'Email incorrect!';
    }

    if (!empty($data['contactFormPhone']) && !preg_match("/^[0-9\-\(\)\/\+\s]*$/", $data['contactFormPhone'])) {
        $errors['error']['phone'] = 'Phone incorrect!';
    }

    if (empty($data['contactFormSubject'])) {
        $errors['error']['subject'] = 'Field Subject required!';
    }

    if (empty($data['contactFormMessage'])) {
        $errors['error']['message'] = 'Field Message required!';
    }

    if (!$errors){
        return $data;
    }

    return $errors;
}

function getCleanData ($data)
{
    $arr = [];

    if ($data){
        foreach ($data as $key => $value) {
            $arr[$key] = trim(strip_tags($value));
        }
    }
    return $arr;
}