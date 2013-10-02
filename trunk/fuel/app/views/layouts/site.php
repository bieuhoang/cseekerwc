<!DOCTYPE html>
<html>
    <head>
        <title><?php echo isset($title) ? $title : '' ?></title>
        <meta http-equiv="Content-Type" content="text/html; charset=<?php echo Config::get('encoding') ?>" />
        <link rel="shortcut icon" type="image/gif" href="<?php //echo Asset::img('favicon.gif')  ?>">
        <?php echo Asset::render('css') ?>
        <script>
            var BASE_URL = '<?php echo Uri::base(true) ?>';
            var SESSIONID = '<?php echo session_id() ?>';
        </script>
        <?php echo Asset::render('jquery') ?>
    </head>
    <body class="body">
        <div class="wrapper container">
            <div class="nav-top clearfix"><?php echo View::forge('layouts/blocks/navtop') ?></div>
            <div class="header clearfix"><?php echo View::forge('layouts/blocks/header') ?></div>
            <div class="main-menu clearfix"><?php echo View::forge('layouts/blocks/main_menu') ?></div>
            <div class="content clearfix">
                <?php echo isset($content) ? $content : ('Loading...') ?>
            </div>
            <div class="footer"><?php echo View::forge('layouts/blocks/footer') ?></div>
        </div>
        <!-- Page rendered in {exec_time}s using {mem_usage}mb of memory -->
        <?php echo Asset::render('js') ?>
    </body>
</html>
