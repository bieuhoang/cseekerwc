<?php

class Controller_User extends Controller_Site {

    public function before() {
        parent::before();
        // load config account types
        Config::load('account_types', true);
    }

    public function action_index() {
        if ( !Session::get('user_id') ) {
            Response::redirect('login');
        }
    }

    public function action_register_stage_2($type = 'basic') {
        // types
        $types = array_keys(Config::get('account_types'));
        // submit data
        if ( Input::is_ajax() && Input::method() == 'POST' ) {
            // check if not type or not exists data submited from stage 1
            if ( !in_array($type, $types) ) {
                Lib\Response::json(array (
                    'alert' => Lib\Message::error('Account type does not exists')
                ));
            }

            if ( !Session::get('register_fields') ) {
                Lib\Response::json(array (
                    'alert' => Lib\Message::error('Time process is too long. Your register is canceled.')
                ));
            }

            // validate
            $val = Lib\Validate::forge(static::fields($type . '_register'));
            if ( !$val->run() ) {
                Lib\Response::json(array ('alert' => $val->show_errors()), true);
            }

            // get fields data from stage 1
            $fields = Session::get('register_fields');

            // save account
            if ( DB::insert('users')->set($fields)->execute() ) {
                $user_new_id = Model_User::find(array (
                            'select' => 'ID',
                            'limit' => 1,
                            'order_by' => 'id DESC'
                ));
                // save user meta
                $meta_fields = $val->validated();
                foreach ( $meta_fields as $name => $value ) {
                    DB::insert('usermetas')->set(array (
                        'name' => $name,
                        'value' => $value,
                        'user_id' => $user_new_id
                    ))->execute();
                }

                // insert to cron emails to run cron job
                DB::insert('cron_emails')->set(array (
                    'subject' => 'Thank for your registration',
                    'body' => View::forge('user/email_template/success', $fields)->render(),
                    'from_email' => Config::get('setting.email_from'),
                    'from_name' => Config::get('setting.email_name'),
                    'to_email' => $fields['email'],
                    'to_name' => ($fields['first_name'] . ' ' . $fields['last_name']),
                    'created_at' => DB::expr('NOW()')
                ))->execute();
            }
        }

        $type = strtoupper($type);

        // check if not type or not exists data submited from stage 1
        if ( !in_array($type, $types) || !Session::get('register_fields') ) {
            Response::redirect('login');
        }

        // set title
        $this->title('Register Stage 2');
        // set content
        $this->content('user/register/' . $type);
    }

    public function action_register() {
        // submit data
        if ( Input::is_ajax() && Input::method() == 'POST' ) {
            // validate
            $val = Lib\Validate::forge(static::fields('register'));
            if ( !$val->run() ) {
                Lib\Response::json(array ('alert' => $val->show_errors()), true);
            }

            // check if not agree terms and conditions
            if ( Input::post('accept') == '' ) {
                Lib\Response::json(array (
                    'error' => Lib\Message::error('You must agree our terms and conditions')
                        ), true);
            }

            $fields = array_merge(array (
                'created_at' => DB::expr('NOW()'),
                'updated_at' => DB::expr('NOW()'),
                'status' => 'WAITING'
                    ), $val->validated());

            unset($fields['confirm_password']);

            // make password
            $fields['password'] = Helper\Security::hash($fields['password']);

            // save session to go to stage 2
            Session::set('register_fields', $fields);
            // redirect to stage 2
            $type = strtolower($fields['type']);
            Lib\Response::json(array ('redirect' => Uri::create('user/register_stage_2/' . $type)), true);
        }

        // set title
        $this->title('Register Account');
        // set content
        $this->content('user/register/' . $type, array (
            'genders' => Model_Item::find_by_type('GENDER')
        ));
    }

    public function action_login() {
        // submit login
        if ( Input::is_ajax() && Input::method() == 'POST' ) {
            if ( Lib\Auth::login(Input::post('username'), Input::post('password')) ) {
                Lib\Response::json(array ('redirect' => Uri::create('dashboard')), true);
            } else {
                Lib\Response::json(array (
                    'alert' => Lib\Message::error('Wrong username or password'),
                    'callback' => "(function($){
                            $('input[name=username], input[name=password]').val('');
                        })(jQuery);"
                        ), true);
            }
        }

        // set vars
        $this->set('genders', Model_Item::find_by_type('GENDER'));
        $this->set('security_questions', Model_Item::find_by_type('SECURITY_QUESTION'));
    }

    public function action_forgot_password() {
        // submit data
        if ( Input::is_ajax() && Input::method() == 'POST' ) {
            $email = Input::post('email');
            if ( count(Model_User::find_by_email($email)) ) {
                // data
                $data = array (
                    'code' => Helper\String::random_string('alnum', 10)
                );
                // send mail
                DB::insert('cron_emails')->set(array (
                    'subject' => 'Reset my password',
                    'body' => View::forge('user/email_template/forgot_password', $data)->render(),
                    'from_email' => Config::get('setting.email_from'),
                    'from_name' => Config::get('setting.email_name'),
                    'to_email' => $email,
                    'to_name' => $email,
                    'created_at' => DB::expr('NOW()')
                ))->execute();

                //redirect to homepage
                Lib\Response::json(array ('redirect' => Uri::base(true)), true);
            } else {
                Lib\Response::json(array (
                    'alert' => Lib\Message::error('Email is does not exists in system. Please try again.')
                        ), true);
            }
        }
    }

    public function action_register_success() {
        $this->title('Register successully');
    }

    public function action_activate() {
        $code = Input::get('code');
        $email = Input::get('email');

        $user = Model_User::find(array (
                    'where' => array (
                        'code_activate' => $code,
                        'email' => $email
        )));

        if ( !$user ) {
            $this->set('message', Lib\Message::error('Code activate does not exists. Please check again.'));
        }

        if ( strtotime($user->code_activate_expired) < time() ) {
            $this->set('message', Lib\Message::error('Code activate has expired.'));
        }

        $user->status = 'ACTIVED';
        if ( $user->save() ) {
            $this->set('message', Lib\Message::success('Your account is actived.'));
        }
    }

    private static function fields($type = '') {
        switch ( $type ) {
            case 'register':
                $fields = array (
                    array (
                        'name' => 'gender',
                        'label' => 'Title',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'first_name',
                        'label' => 'First name',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'last_name',
                        'label' => 'Last name',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'email',
                        'label' => 'Email',
                        'validate' => 'required|valid_email'
                    ),
                    array (
                        'name' => 'password',
                        'label' => 'Password',
                        'validate' => 'required|min_length[6]'
                    ),
                    array (
                        'name' => 'confirm_password',
                        'label' => 'Confirm password',
                        'validate' => 'match_field[password]'
                    ),
                    array (
                        'name' => 'type',
                        'label' => 'Account type',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'security_question',
                        'label' => 'Security Question',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'security_answer',
                        'label' => 'Security Answer',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'has_newsletter',
                        'label' => 'Has newsletter',
                        'validate' => 'required'
                    )
                );
                break;
            case 'business_register':
                $fields = array (
                    array (
                        'name' => 'position',
                        'label' => 'Position',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'company_name',
                        'label' => 'Company name',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'company_registration_no',
                        'label' => 'Company registration No',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'company_mobile_no',
                        'label' => 'Company mobile No',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'company_address',
                        'label' => 'Company address',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'country',
                        'label' => 'Country',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'post_code',
                        'label' => 'Post code',
                        'validate' => 'required'
                    ),
                    array (
                        'name' => 'type_of_business',
                        'label' => 'Type of business'
                    ),
                    array (
                        'name' => 'services',
                        'label' => 'Company registration No'
                    ),
                    array (
                        'name' => 'num_of_employees',
                        'label' => 'Number of employees'
                    ),
                    array (
                        'name' => 'region_works',
                        'label' => 'Regions work'
                    )
                );
                break;
            case 'lsp_register':
                $fields = array (
                    array (
                        'name' => ''
                    )
                );
                break;
            case 'basic_register':
                $fields = array (
                    array (
                        'name' => ''
                    )
                );
                break;
            default:
                $fields = array ();
                break;
        }

        return $fields;
    }

}