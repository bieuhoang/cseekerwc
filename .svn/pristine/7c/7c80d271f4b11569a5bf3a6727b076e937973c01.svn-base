<?php

namespace UI;

class Table {

    protected $id;
    protected $class;
    protected $row_index = 0;
    protected $_data = array ();

    public function __construct($configs = array ()) {
        if ( !isset($configs['id']) ) {
            $this->id = uniqid();
        }
    }

    public function add_header($title = null, $atts = array ()) {
        if ( is_null($title) ) {
            return $this;
        }

        $this->_data['header'][] = $this->_get_col_header($title, $atts);

        return $this;
    }

    public function add_row() {
        $this->row_index++;
        return $this;
    }

    public function add_col($content, $atts = array ()) {

        return $this;
    }

    public function html($return = true) {
        $html = '<table id="' . $this->id . '" class="table-list ' . $this->class . '">';
        $html .= '<thead>';
        $html .= '<tr class="row-header">';
        foreach ( $this->_data['headers'] as $head ) {
            $html .= $head;
        }
        $html .= '</tr>';
        $html .= '</thead>';
        $html .= '</table>';
    }

    private function _get_col_body($content, $atts) {
        $_atts = array ();
        foreach ( (array) $atts as $name => $value ) {
            $_atts[] = $name . '="' . $value . '"';
        }

        return '<td ' . implode(' ', $_atts) . '>' . $title . '</td>';
    }

    private function _get_col_header($title, $atts = array ()) {
        $_atts = array ();
        foreach ( (array) $atts as $name => $value ) {
            $_atts[] = $name . '="' . $value . '"';
        }

        return '<th ' . implode(' ', $_atts) . '>' . $title . '</th>';
    }

}