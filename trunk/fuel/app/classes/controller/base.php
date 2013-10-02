<?php

class Controller_Base extends Controller_Template {

    public $data = array ();
    public $content = '';

    public function before() {
        parent::before();

        // Assign current_user to the instance so controllers can use it
        $this->user = Lib\Auth::check() ? Model_User::find_one_by_id(Lib\Auth::get_user_id()) : null;

        // get configs
        $configs = DB::select()->from('configs')->execute();
        foreach ( $configs as $config ) {
            Config::set('setting.' . $config->name, $config->value);
        }

        if ( !is_null($this->user) ) {
            // Set a global variable so views can use it
            View::set_global('user', $this->user);
            View::set_global('username', $this->user->username);
        }

        // add style and js
        Asset::css(array ('bootstrap.min.css', 'font-icon.css', 'jquery-ui/jquery-ui.min.css'), array (), 'css', false);
        Asset::js(array ('jquery.js', 'jqueryui.js', 'bootstrap.min.js'), array (), 'jquery', false);
    }

    public function after($response) {
        // set title
        $this->title(ucwords(str_replace('_', ' ', Request::active()->action)));

        // set template content
        if ( empty($this->template->content) ) {
            $controller = strtolower(str_replace(Config::get('controller_prefix'), '', Request::active()->controller));
            $this->template->content = View::forge($controller . '/' . Request::active()->action, $this->data);
        }

        return parent::after($response);
    }

    public function set_layout($name) {
        $this->template = View::forge('layouts/' . $name);
    }

    public function title($title = '') {
        return $this->set('title', trim(implode(' | ', array ($title, Config::get('site_title'))), ' | '));
    }

    public function content() {
        $args = func_get_args();
        if ( count($args) == 0 ) {
            return $this->template->content;
        }
        if ( count($args) == 1 ) {
            $this->set('content', View::forge($args[0], $this->data));
        }
        if ( count($args) == 2 ) {
            if ( is_array($args[1]) ) {
                $this->data = array_merge($this->data, $args[1]);
            }
            $this->set('content', View::forge($args[0], $this->data));
        }
    }

    public function set() {
        $args = func_get_args();
        if ( count($args) == 1 ) {
            if ( is_array($args) ) {
                foreach ( $args as $name => $value ) {
                    $this->template->{$name} = $this->data[$name] = $value;
                }
            }
        } else if ( count($args) == 2 ) {
            $this->template->{$args[0]} = $this->data[$args[0]] = $args[1];
        }

        return $this;
    }

}