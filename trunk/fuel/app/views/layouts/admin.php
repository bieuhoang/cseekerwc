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
        <div class="wrapper">
            <div class="header"><?php echo View::forge('layouts/blocks/admin/header') ?></div>
            <div class="clearfix"></div>
            <div id="content">
                <?php echo isset($content) ? $content : '' ?>
            </div>
            <div class="footer"><?php echo View::forge('layouts/blocks/admin/footer') ?></div>
        </div>
        <!-- Page rendered in {exec_time}s using {mem_usage}mb of memory -->
        <?php echo Asset::render('js') ?>
    </body>
</html>
