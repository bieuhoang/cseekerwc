<?php

namespace UI;

class Form {

    protected $span_label = 6;
    protected $span = 24;
    protected $fields = array ();
    protected $labels = array ();
    protected $rows = array ();

    public function __construct($config = array ()) {
        foreach ( $configs as $field => $val ) {
            if ( isset($this->{$field}) ) {
                $this->{$field} = $val;
            }
        }
    }

    public function add_row($data = array ()) {
        
    }

}