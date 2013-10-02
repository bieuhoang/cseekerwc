<div class="row-fluid">
    <div class="span8">
        <div class="row-fluid">
            <div class="span6">
                <div class="box-rounded">
                    <div class="box-rounded-header">
                        <div class="icon"><span class="ico-key"></span></div>
                        <h2 class="box-rounded-header-title">Login</h2>
                        <div class="box-rounded-header-desc">If you already have a cSeeker account, please login:</div>
                    </div>
                    <div class="box-rounded-content">
                        <?php echo Form::open('login') ?>
                        <div class="row-fluid">
                            <label>Enter your username and password below then press the 'Log In' button</label>
                            <label>You must complete all fields marked as *</label>
                            <div class="row-fluid mt10">
                                <div class="span5"><label>Username</label></div>
                                <div class="span7"><input type="text" name="username" class="required" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"><label>Password</label></div>
                                <div class="span7"><input type="password" class="required" name="password" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12"><a href="<?php echo Uri::create('forgot_password') ?>">Forgotten password?</a></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"></div>
                                <div class="span7"><button class="submit-login fr">Log in</button></div>
                            </div>
                        </div>
                        <?php echo Form::close() ?>
                    </div>
                </div>
            </div>
            <div class="span6">
                <div class="box-rounded">
                    <div class="box-rounded-header">
                        <div class="icon"><span class="ico-vcard"></span></div>
                        <h2 class="box-rounded-header-title">Register</h2>
                        <div class="box-rounded-header-desc">If this is your first time on this website, please register:</div>
                    </div>
                    <div class="box-rounded-content">
                        <?php echo Form::open('register') ?>
                        <div class="row-fluid">
                            <label>Leave us your details and enjoy all the benefits that come with being a subscriber</label>
                            <label>You must complete all fields marked as *</label>
                            <div class="row-fluid mt10">
                                <div class="span5"><label>Title</label></div>
                                <div class="span7">
                                    <select name="gender">
                                        <?php foreach ( $genders as $gender ): ?>
                                            <option value="<?php echo $gender['id'] ?>"><?php echo $gender['name'] ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"><label>First name</label></div>
                                <div class="span7"><input type="text" name="first_name" class="required" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"><label>Last name</label></div>
                                <div class="span7"><input type="text" name="last_name" class="required" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"><label>Email</label></div>
                                <div class="span7"><input type="email" class="required email" name="email" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"><label>Password</label></div>
                                <div class="span7"><input type="password" name="password" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"><label>Confirm Password</label></div>
                                <div class="span7"><input type="password" name="confirm_password" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span5"><label>Account Type</label></div>
                                <div class="span7">
                                    <select name="type">
                                        <?php foreach ( Config::get('account_types') as $type => $title ): ?>
                                            <option name="<?php echo $type ?>"><?php echo $title ?></option>
                                        <?php endforeach; ?>
                                    </select> 
                                    <label class="inline">*</label>
                                </div>
                            </div>
                            <label class="clearfix">Explanation about this account type. Explanation about this account type. Explanation about this account type.</label>
                            <div class="row-fluid">
                                <div class="span12"><label>Security Question</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12">
                                    <select name="security_question" style="width: 100%">
                                        <?php foreach ( $security_questions as $question ): ?>
                                            <option name="<?php echo $question['id'] ?>"><?php echo $question['name'] ?></option>
                                        <?php endforeach; ?>
                                    </select> 
                                    <label class="inline">*</label>
                                </div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12"><label>Security Answer</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12"><input type="text" name="security_answer" value="" /> <label class="inline">*</label></div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12">
                                    <label>Newsletter:</label>
                                </div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12">
                                    <label>Do you wish to be kept up to date with news and useful tips? Please note that your privace is important to us and your detail will not be passed to a  third party companies.</label>
                                </div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12">
                                    <label class="inline mr10">Yes <input type="radio" name="has_newsletter" value="1"></label>
                                    <label class="inline">No <input type="radio"  name="has_newsletter" value="0" checked></label>
                                </div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12">
                                    <label>Accept Terms And Conditions</label>
                                </div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12">
                                    <label class="inline"><input type="checkbox" name="accept" value="1" /> Clicking "Make this booking" means you agree to the cSeeker's <a href="<?php echo Uri::create('cancellation_policy') ?>" title="cancellation policy">cancellation policy</a> and our <a href="<?php echo Uri::create('terms_and_conditions') ?>" title="Terms and Conditions">Terms and Conditions</a>/</label>
                                </div>
                            </div>
                            <div class="row-fluid">
                                <div class="span12">
                                    <button class="submit-register fr">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php echo Form::close() ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="span4"></div>
</div>