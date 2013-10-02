<div class="main-menu">
    <div class="box-logo"></div>
    <ul class="fl nav nav-pills">
        <li><a href="<?php echo Uri::base('admin/dashboard') ?>"><span class="ico-dashboard"></span> Dashboard</a></li>
        <li><a href="<?php echo Uri::base('admin/order') ?>"><span class="ico-cart-2"></span> Orders</a></li>
        <li><a href="<?php echo Uri::base('admin/config') ?>"><span class="ico-cog"></span> Configs</a></li>
        <li><a href="<?php echo Uri::base('admin/item') ?>"><span class="ico-dice"></span> Items</a></li>
        <li><a href="<?php echo Uri::base('admin/user') ?>"><span class="ico-user-5"></span> Users</a></li>
    </ul>
    <div class="fr user-cp">
        <span class="username"><?php echo $username ?></span>
        <ul class="sub-user-cp">
            <li><a onclick="alert('Updating...'); return false;" href="<?php echo Uri::base('admin/user/profile') ?>"><span class="ico-user-5"></span> Profile</a></li>
            <li><a onclick="alert('Updating...'); return false;" href="<?php echo Uri::base('admin/user/change_password') ?>"><span class="ico-key-3"></span> Change password</a></li>
            <li><a href="<?php echo Uri::base('admin/logout') ?>"><span class="ico-switch-2"></span> Logout</a></li>
        </ul>
    </div>
</div>
<div class="menu-line"></div>