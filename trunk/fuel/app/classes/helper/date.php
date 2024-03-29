<?php

namespace Helper;

class Date {

    public static function timespan($seconds = 1, $time = '') {
        $CI = & get_instance();
        $CI->lang->load('date');

        if ( !is_numeric($seconds) ) {
            $seconds = 1;
        }

        if ( !is_numeric($time) ) {
            $time = time();
        }

        if ( $time <= $seconds ) {
            $seconds = 1;
        } else {
            $seconds = $time - $seconds;
        }

        $str = '';
        $years = floor($seconds / 31536000);

        if ( $years > 0 ) {
            $str .= $years . ' ' . (($years > 1) ? 'date_years' : 'date_year') . ', ';
        }

        $seconds -= $years * 31536000;
        $months = floor($seconds / 2628000);

        if ( $years > 0 OR $months > 0 ) {
            if ( $months > 0 ) {
                $str .= $months . ' ' . (($months > 1) ? 'date_months' : 'date_month') . ', ';
            }

            $seconds -= $months * 2628000;
        }

        $weeks = floor($seconds / 604800);

        if ( $years > 0 OR $months > 0 OR $weeks > 0 ) {
            if ( $weeks > 0 ) {
                $str .= $weeks . ' ' . (($weeks > 1) ? 'date_weeks' : 'date_week') . ', ';
            }

            $seconds -= $weeks * 604800;
        }

        $days = floor($seconds / 86400);

        if ( $months > 0 OR $weeks > 0 OR $days > 0 ) {
            if ( $days > 0 ) {
                $str .= $days . ' ' . (($days > 1) ? 'date_days' : 'date_day') . ', ';
            }

            $seconds -= $days * 86400;
        }

        $hours = floor($seconds / 3600);

        if ( $days > 0 OR $hours > 0 ) {
            if ( $hours > 0 ) {
                $str .= $hours . ' ' . (($hours > 1) ? 'date_hours' : 'date_hour') . ', ';
            }

            $seconds -= $hours * 3600;
        }

        $minutes = floor($seconds / 60);

        if ( $days > 0 OR $hours > 0 OR $minutes > 0 ) {
            if ( $minutes > 0 ) {
                $str .= $minutes . ' ' . (($minutes > 1) ? 'date_minutes' : 'date_minute') . ', ';
            }

            $seconds -= $minutes * 60;
        }

        if ( $str == '' ) {
            $str .= $seconds . ' ' . (($seconds > 1) ? 'date_seconds' : 'date_second') . ', ';
        }

        return substr(trim($str), 0, -1);
    }

    public static function format($time, $format = 'd/m/Y') {
        return date($format, $time);
    }

}