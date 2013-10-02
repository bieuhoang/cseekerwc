<?php

namespace Helper;

class Email {

    /**
     * Validate email address
     *
     * @access	public
     * @return	bool
     */
    public static function valid_email($address) {
        return preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $address);
    }

}