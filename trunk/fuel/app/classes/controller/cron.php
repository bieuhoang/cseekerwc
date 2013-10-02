<?php

class Controller_Cron extends Controller {

    public function action_email() {
        $emails = DB::select()->from('cron_emails')->execute();
        foreach ( $emails as $email ) {
            
        }
    }

}