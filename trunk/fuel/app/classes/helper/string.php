<?php

namespace Helper;

class String {

    public static function random_string($type = 'alnum', $len = 8) {
        switch ( $type ) {
            case 'basic' : return mt_rand();
                break;
            case 'alnum' :
            case 'numeric' :
            case 'nozero' :
            case 'alpha' :
                switch ( $type ) {
                    case 'alpha' : $pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        break;
                    case 'alnum' : $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        break;
                    case 'numeric' : $pool = '0123456789';
                        break;
                    case 'nozero' : $pool = '123456789';
                        break;
                }

                $str = '';
                for ( $i = 0; $i < $len; $i++ ) {
                    $str .= substr($pool, mt_rand(0, strlen($pool) - 1), 1);
                }
                return $str;
                break;
            case 'unique' :
            case 'md5' :
                return md5(uniqid(mt_rand()));
                break;
            case 'encrypt' :
            case 'sha1' :
                \Helper\Security::do_hash(uniqid(mt_rand(), TRUE), 'sha1');
                break;
        }
    }

    public static function trim_slashes($str) {
        return trim($str, '/');
    }

    public static function strip_slashes($str) {
        if ( is_array($str) ) {
            foreach ( $str as $key => $val ) {
                $str[$key] = strip_slashes($val);
            }
        } else {
            $str = stripslashes($str);
        }

        return $str;
    }

    public static function strip_quotes($str) {
        return str_replace(array ('"', "'"), '', $str);
    }

    public static function quotes_to_entities($str) {
        return str_replace(array ("\'", "\"", "'", '"'), array ("&#39;", "&quot;", "&#39;", "&quot;"), $str);
    }

    /**
     * Reduce Multiples
     *
     * Reduces multiple instances of a particular character.  Example:
     *
     * Fred, Bill,, Joe, Jimmy
     *
     * becomes:
     *
     * Fred, Bill, Joe, Jimmy
     *
     * @access	public
     * @param	string
     * @param	string	the character you wish to reduce
     * @param	bool	TRUE/FALSE - whether to trim the character from the beginning/end
     * @return	string
     */
    public static function reduce_multiples($str, $character = ',', $trim = FALSE) {
        $str = preg_replace('#' . preg_quote($character, '#') . '{2,}#', $character, $str);

        if ( $trim === TRUE ) {
            $str = trim($str, $character);
        }

        return $str;
    }

}