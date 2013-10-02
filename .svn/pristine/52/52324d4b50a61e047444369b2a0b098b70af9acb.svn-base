<?php

return array (
    'db_connection' => null,
    'table_name' => 'users',
    'table_columns' => array ('*'),
    'guest_login' => true,
    'multiple_logins' => false,
    'remember_me' => array (
        'enabled' => true,
        'cookie_name' => 'rmcookie',
        'expiration' => 86400 * 31,
    ),
    'groups' => array (
        -1 => array ('name' => 'Banned', 'roles' => array ('banned')),
        0 => array ('name' => 'Guests', 'roles' => array ()),
        1 => array ('name' => 'Users', 'roles' => array ('user')),
        50 => array ('name' => 'Moderators', 'roles' => array ('user', 'moderator')),
        100 => array ('name' => 'Administrators', 'roles' => array ('user', 'moderator', 'admin'))
    ),
    'roles' => array (
        'user' => array ('comments' => array ('create', 'read')),
        'moderator' => array ('comments' => array ('update', 'delete')),
        '#' => array ('website' => array ('read')),
        'banned' => false,
        'super' => true
    ),
    'login_hash_salt' => 'sa@lt_h3R3_rIght_N0W',
    'username_post_key' => 'username',
    'password_post_key' => 'password',
);
