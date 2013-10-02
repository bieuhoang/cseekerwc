<?php

namespace Lib;

class Response {

    public static function json($data = array (), $exit = false) {
        $json = \Fuel\Core\Response::forge(json_encode($data), 200, array (
                    'Content-Type' => 'application/json'
        ));
        
        if($exit) {
            echo $json; exit;
        }
        
        return $json;
    }

}