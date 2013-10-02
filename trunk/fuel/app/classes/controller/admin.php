<?php

class Controller_Admin extends Controller_Base {

    public $template = 'layouts/admin';

    public function before() {

        parent::before();

        if ( Lib\Auth::check() ) {
            // if user logged in
            // but not super admin, admin and moderator
            // and page is not login or logout page
            if ( !Lib\Auth::member('ADMIN') ) {
                if ( Input::is_ajax() ) {
                    return Lib\Response::json(array ('content' => View::forge('admin/access_denied')));
                } else {
                    // redirect to access denied page
                    $this->template->content = View::forge('admin/access_denied');
                }
            }
        } else {
            // if user not login and not login, logout page
            // redirect to login page
            if ( !in_array(Request::active()->action, array ('login', 'logout', 'forgot_password')) ) {
                if ( Input::is_ajax() ) {
                    return Lib\Response::json(array ('redirect' => 'admin/login'));
                } else {
                    Response::redirect('admin/login');
                }
            }
        }

        // set assets for admin template
        Asset::css(array ('admin/style.css'), array (), 'css', false);
        Asset::js(array ('app.js', 'lib/form.js', 'admin.js'), array (), 'js', false);
    }

    /*
     * ------------------------------------------------
     * Dashboard page
     * ------------------------------------------------
     * This is the main admin page.
     * Statistics of users, promotions, orders, etc.
     *
     */

    public function action_index() {
        $this->title('Dashboard')
            ->content('admin/dashboard');
    }

    public function action_login() {
        Session::destroy();
        if ( Input::is_ajax() && Input::method() == 'POST' ) {
            $username = Input::post('username');
            $password = Input::post('password');
            if ( Lib\Auth::login($username, $password) ) {
                if ( Lib\Auth::member('ADMIN') ) {
                    Lib\Response::json(array (
                        'redirect' => 'admin'
                            ), true);
                } else {
                    Lib\Auth::logout();
                    Lib\Response::json(array (
                        'alert' => Lib\Message::error('You do not permission to access')
                            ), true);
                }
            } else {
                Lib\Response::json(array (
                    'alert' => Lib\Message::error('Wrong username or password'),
                    'callback' => "(function($) {
                            $('input[type=text], input[type=password]').val('');
                            $('input[type=text]').focus();
                        })(jQuery);"
                ), true);
            }
        }

        $this->set_layout('login');
    }

    public function action_logout() {
        Lib\Auth::logout();
        Response::redirect('admin/login');
    }

}