<?php


//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: POST");
//header("HTTP_ACCEPT: application/x-www-form-urlencoded");


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"');
header("HTTP_ACCEPT: multipart/form-data");

//$json = file_get_contents('php://input');
////
////// Converts it into a PHP object
//$data_decode = json_decode($json);
////



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

        //        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();
        $mail->Host       = 'smtp.1and1.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contact@stableflow.com';
        $mail->Password   = 'SFpass123.';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;



        $json = file_get_contents('php://input');
        $data_decode = json_decode($json);

        $parse_url = parse_url($_SERVER['HTTP_REFERER']);

        if (trim($parse_url['path'],  '/') === 'contacts'){


            $data = validateContact($data_decode, $_FILES);

            if (!isset($data['error'])){

                $mail->setFrom($data['contactFormEmail'], $data['contactFormName']);
                $mail->addAddress('info@stableflow.com');     // add address to

                foreach ($_FILES['files'] as $FILE) {
                    move_uploaded_file($FILE['tmp_name'], 'uploads/' . $FILE['name']);
                    $mail->addAttachment('uploads/' . $FILE['name']);
                }

                // Content
                ob_start();
                include 'views/send_mail_contacts.php';
                $str = ob_get_clean();

                $mail->isHTML(true);
                $mail->Subject = $data['contactFormName'];
                $mail->Body    = $str;

                $mail->send();

                echo json_encode(['success' => "Message has be sent"]);exit;

            }

            echo json_encode($data);exit;

        } else {

            $data = validate($data_decode);


            if (!isset($data['error'])){

                // Content
                ob_start();
                include 'views/send_mail.php';
                $str = ob_get_clean();

                $mail->isHTML(true);
                $mail->Subject = $data['contactFormSubject'];
                $mail->Body    = $str;

                $mail->send();

                echo json_encode(['success' => "Message has be sent"]);exit;
            }
            echo json_encode($data);exit;
        }


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

function validateContact($data, $files){

    $data = getCleanData($data);

    $errors = [];

    if (empty($data['contactFormName'])) {
        $errors['error']['name'] = 'Field FullName required!';
    }

    if (empty($data['contactFormEmail'])) {
        $errors['error']['email'] = 'Field E-mail required!';
    } elseif (!filter_var($data['contactFormEmail'], FILTER_VALIDATE_EMAIL)) {
        $errors['error']['email'] = 'E-mail incorrect!';
    }

    if (empty($data['contactFormMessage'])) {
        $errors['error']['project'] = 'Field Project required!';
    }

    if (!empty($data['contactFormPhone']) && !preg_match("/^[0-9\-\(\)\/\+\s]*$/", $data['contactFormPhone'])) {
        $errors['error']['phone'] = 'Phone incorrect!';
    }


    if (empty($files)){
        $errors['error']['file'] = 'Files not upload!';
    } else {
        foreach ($files as $file){
            if (!empty($file['size']) && $file['size'] > 50000){
                $errors['error']['file'] = 'File ' . $file['name'] . ' size is too large!';
            }
        }
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
            if (is_string($value)){
                $arr[$key] = trim(strip_tags($value));
            }
        }
    }
    return $arr;
}