<?php

namespace Helper;

class Security {

    public static function hash($str, $type = 'sha1') {
        if ( $type == 'sha1' ) {
            return sha1($str);
        } else {
            return md5($str);
        }
    }

    public static function strip_image_tags($str) {
        $str = preg_replace("#<img\s+.*?src\s*=\s*[\"'](.+?)[\"'].*?\>#", "\\1", $str);
        $str = preg_replace("#<img\s+.*?src\s*=\s*(.+?).*?\>#", "\\1", $str);

        return $str;
    }

    public static function encode_php_tags($str) {
        return str_replace(array ('<?php', '<?PHP', '<?', '?>'), array ('&lt;?php', '&lt;?PHP', '&lt;?', '?&gt;'), $str);
    }

}