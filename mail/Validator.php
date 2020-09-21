<?php

const FILE_SIZE = 5242880;

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
        }

        if (!$errors){
            return $data;
        }

        return $errors;
    }

    public static function validationContact ($data, $files)
    {
        $errors = [];

        if (empty($data['name'])) {
            $errors['error']['name'] = 'Field FullName required!';
        }

        if (empty($data['email'])) {
            $errors['error']['email'] = 'Field E-mail required!';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['error']['email'] = 'E-mail incorrect!';
        }

        if (empty($data['phone']) || !preg_match("/^[0-9\-\(\)\/\+\s]*$/", $data['phone'])) {
            $errors['error']['phone'] = 'Phone incorrect!';
        }


        if (empty($files)){
            $errors['error']['file'] = 'Files not upload!';
        } else {
            $size = 0;
            foreach ($files as $file){
                $size += $file['size'];
            }
            if ($size > FILE_SIZE){
                $errors['error']['file'] = 'Files size is too large!';
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

    public static function validationVacancy ($data, $files)
    {
        $errors = [];

        if (empty($data['name'])) {
            $errors['error']['name'] = 'Field FullName required!';
        }

        if (empty($data['email'])) {
            $errors['error']['email'] = 'Field E-mail required!';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['error']['email'] = 'E-mail incorrect!';
        }

        if (empty($data['phone']) || !preg_match("/^[0-9\-\(\)\/\+\s]*$/", $data['phone'])) {
            $errors['error']['phone'] = 'Phone incorrect!';
        }


        if (empty($files)){
            $errors['error']['file'] = 'Files not upload!';
        } else {
            if ($files['file']['size'] > FILE_SIZE){
                $errors['error']['file'] = 'Files size is too large!';
            }
        }


        if (!$errors){
            return $data;
        }

        return $errors;
    }
}