<?php

namespace Lib;

class Auth {

    public static function check() {
        return \Session::get('USER_ID') !== NULL;
    }

    public static function get_user_id() {
        return \Session::get('USER_ID');
    }

    public static function login($username = '', $password = '', $remember = false) {
        if ( $username !== '' && $password !== '' ) {
            $user = \Model_User::find_one_by_username($username);

            if ( $user ) {
                if ( $user->password == \Helper\Security::hash($password) ) {
                    // save session
                    \Session::set('USER_ID', $user->id);
                    \Session::set('USER', $user->to_array());
                    return true;
                }
            }
        }

        return false;
    }

    public static function logout() {
        \Session::destroy();
    }

    public static function member($type = 'ADMIN') {
        $user = \Session::get('USER');
        return $user['type'] == $type;
    }

}