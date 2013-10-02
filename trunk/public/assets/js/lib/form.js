/*
 * -------------------------------------
 * Validate form library
 * -------------------------------------
 * @author Long Nguyen
 * @link lnguyen.info
 * @version 1.0
 * @package Advert Central
 */
$(document).ready(function() {
    App.load('plugins/jquery.form.js', function() {
        $('form').on('submit', function() {
            var form = this, fn = $(this).attr('js-callback') || function() {};
            $(form).ajaxSubmit({
                url: $(form).attr('action') || '',
                clearForm: $(form).attr('js-form-clearform') || false,
                dataType: 'json',
                beforeSubmit: function() {
                    if ($(form).data('submiting')) {
                        return false;
                    }

                    $(form).data('submiting', true);
                    App.loading();
                },
                error: function() {
                    App.alertError('Có lỗi khi tải dữ liệu. Hãy thử lại.');
                    // remove submiting
                    $.removeData(form, 'submiting');
                },
                success: function(data) {
                    // remove loading
                    App.removeLoading();
                    // remove submiting
                    $.removeData(form, 'submiting');
                    // callback
                    fn.call(this, data);
                    // process response
                    App.processResponse(data);
                }
            });
            
            return false;
        });
    });
});