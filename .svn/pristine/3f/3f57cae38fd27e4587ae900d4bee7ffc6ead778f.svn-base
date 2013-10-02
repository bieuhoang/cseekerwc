<?php

namespace Lib;

class Validate {

    public static $val = null;

    public static function forge($fields = array ()) {
        self::$val = \Fuel\Core\Validation::forge();
        foreach ( $fields as $field ) {
            $validate = isset($field['validate']) ? $field['validate'] : array();
            self::$val->add_field($field['name'], $field['label'], $validate);
        }
        
        return self::$val;
    }

}