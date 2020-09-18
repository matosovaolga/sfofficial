<?php

const FILE_SIZE = 50000;

class Validator
{
    public static function validationHome ($data)
    {
        $data = self::getCleanData($data);

        $errors = [];

        if (empty($data['name'])) {
            $errors['error']['name'] = 'Field Name required!';
        }

        if (empty($data['email'])) {
            $errors['error']['email'] = 'Field Email required!';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['error']['email'] = 'Email incorrect!';
        }

        if (!empty($data['phone']) && !preg_match("/^[0-9\-\(\)\/\+\s]*$/", $data['phone'])) {
            $errors['error']['phone'] = 'Phone incorrect!';
        }

        if (empty($data['company'])) {
            $errors['error']['subject'] = 'Field Subject required!';
        }

        if (empty($data['message'])) {
            $errors['error']['message'] = 'Field Message required!';
        }  elseif (strlen($data['message']) < 40) {
            $errors['error']['message'] = 'Not less then 40 letters!';
        }

        if (!$errors){
            return $data;
        }

        return $errors;
    }

    public static function validationContact ($data, $files)
    {
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
                if (!empty($file['size']) && $file['size'] > FILE_SIZE){
                    $errors['error']['file'] = 'File ' . $file['name'] . ' size is too large!';
                }
            }
        }


        if (!$errors){
            return $data;
        }

        return $errors;
    }

    private static function getCleanData ($data)
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
}