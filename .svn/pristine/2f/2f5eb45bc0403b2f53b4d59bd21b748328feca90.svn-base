<?php

class Controller_Site extends Controller_Base {

    public $template = 'layouts/site';

    public function before() {
        parent::before();
        // Load style
        Asset::css(array ('style.css'), array (), 'css', false);
        Asset::js(array('app.js', 'lib/form.js'), array(), 'js', false);
    }

    public function action_index() {
    }

}