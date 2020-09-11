<?php



//switch($_SERVER['REQUEST_METHOD']) {
//    case("OPTIONS"): //Allow preflighting to take place.
////        header("Access-Control-Allow-Origin: *");
////        header("Access-Control-Allow-Methods: POST");
////        header("Access-Control-Allow-Headers: content-type");
////        exit;
//    case("POST"): //Send the email;
//        header("Access-Control-Allow-Origin: *");
//
//        $json = file_get_contents('php://input');
//
//        $params = json_decode($json);
//
//        $email = $params->email;
//        $name = $params->name;
//        $message = $params->message;
//
//        $recipient = 'targetInbox@exmaple.com';
//        $subject = 'new message';
//        $headers = "From: $name <$email>";
//
//        mail($recipient, $subject, $message, $headers);
//        break;
//    default: //Reject any non POST or OPTIONS requests.
//        header("Allow: POST", true, 405);
//        exit;
//}




use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

        $data = validate($_POST);

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
            $mail->setFrom($data['email'], $data['contactFormName']);
            $mail->addAddress('sepavlen@gmail.com');     // add address to


            // Content
            $str = "<h1>You received a letter!</h1>";
            $str .= "<p><b>Name: </b> {$data['contactFormName']}</p>";
            $str .= "<p><b>Email: </b> {$data['email']}</p>";
            $str .= "<p><b>Phone: </b> {$data['phone']}</p>";
            $str .= "<p><b>Subject: </b> {$data['subject']}</p>";
            $str .= "<p><b>Message: </b> <br> {$data['message']}</p>";

            $mail->isHTML(true);
            $mail->Subject = $data['subject'];
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
        $errors['error'] = 'Field "Name" required!';
    }

    if (empty($data['email'])) {
        $errors['error'] = ['email' => 'Field "Email" required!'];
    } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['error'] = ['email' => 'Email incorrect!'];
    }

    if (empty($data['phone'])) {
        $errors['error'] = ['phone' => 'Field "Phone" required!'];
    } elseif (!preg_match("/^[0-9\-\(\)\/\+\s]*$/", $data['phone'])) {
        $errors['error'] = ['phone' => 'Phone incorrect!'];
    }

    if (empty($data['subject'])) {
        $errors['error'] = ['subject' => 'Field "Subject" required!'];
    }

    if (empty($data['message'])) {
        $errors['error'] = ['message' => 'Field "Message" required!'];
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
            $arr[$key] = strip_tags($value);
        }
    }
    return $arr;
}