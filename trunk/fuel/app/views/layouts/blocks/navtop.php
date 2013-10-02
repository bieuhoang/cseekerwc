<div class="nav-search fr">
    <?php echo Form::open('search') ?>
    <input type="text" name="s" placeholder="search" value="<?php echo Input::get('s') ?>" class="s-text search-query" />
    <button class="search-button ico-search"></button>
    <?php echo Form::close() ?>
</div>
<div class="user-funcs fr">
    <ul class="nav nav-pills">
        <li>
            <span class="ico-screen"></span> <a href="<?php echo Uri::create('user/manage_booking') ?>" title="Manage a Booking">Manage a Booking</a>
        </li>
        <li>
            <span class="ico-key"></span> <a href="<?php echo Uri::create('login') ?>" title="Login">Login</a>
        </li>
    </ul>
</div>
<div class="text-zooms fr">
    <ul class="nav nav-pills">
        <li><a class="small" onclick="App.textSize('small');">A</a></li>
        <li><a class="normal" onclick="App.textSize('normal');">A</a></li>
        <li><a class="large" onclick="App.textSize('large');">A</a></li>
    </ul>
</div>
<div class="text-colors fr">
    <ul class="nav nav-pills">
        <li><a class="color-1" onclick="App.textColor('1');">A</a></li>
        <li><a class="color-2" onclick="App.textColor('2');">A</a></li>
        <li><a class="color-3" onclick="App.textColor('3');">A</a></li>
    </ul>
</div>