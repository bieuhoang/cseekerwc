var App = {
    contentId: '#content',
    regId: 1,
    staticFiles: [],
    fnBefore: {},
    fn: {},
    fnAfter: {},
    getId: function() {
        return 'app-auto-' + this.regId++;
    },
    register: function(name, fn) {
        this.fn[name] = fn;
    },
    registerBefore: function(name, fn) {
        this.fnBefore[name] = fn;
    },
    registerAfter: function(name, fn) {
        this.fnAfter[name] = fn;
    },
    render: function(ele) {
        for (var name in App.fnBefore) {
            App.fnBefore[name].call(this, ele);
        }

        for (var name in App.fn) {
            App.fn[name].call(this, ele);
        }

        for (var name in App.fnAfter) {
            App.fnAfter[name].call(this, ele);
        }
    },
    run: function(fn, timeout) {
        setTimeout(function() {
            fn.call(this);
        }, timeout || 50);
    },
    isArr: function(arr) {
        return (arr !== null && arr.constructor === Array);
    },
    isStr: function(str) {
        return (str && (/string/).test(typeof str));
    },
    isFn: function(fn) {
        return typeof fn === 'function';
    },
    isNum: function(num) {
        num = Number(num);
        return (num !== null && !isNaN(num));
    },
    isInt: function(x) {
        var y = parseInt(x);
        if (isNaN(y))
            return false;
        return x === y && x.toString() === y.toString();
    },
    isObj: function(obj) {
        return (obj !== null && obj instanceof Object);
    },
    isEle: function(ele) {
        return (ele && ele.tagName && ele.nodeType === 1);
    },
    isset: function(obj) {
        return (obj !== null && obj !== undefined && obj !== "undefined");
    },
    isJson: function() {

    },
    isBlank: function(str) {
        return (App.php.trim(str) === "");
    },
    isEmail: function(str) {
        return (/^[a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i).test(App.php.trim(str));
    },
    isUsername: function(value) {
        return (value.match(/^[0-9]/) === null) && (value.search(/^[0-9_a-zA-Z]*$/) > -1);
    },
    isUrl: function(str) {
        return (/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).test(App.php.trim(str));
    },
    isImage: function(imagePath) {
        var fileType = imagePath.substring(imagePath.lastIndexOf("."), imagePath.length).toLowerCase();
        return (fileType == ".gif") || (fileType == ".jpg") || (fileType == ".png") || (fileType == ".jpeg");
    },
    isFF: function() {
        return (/Firefox/).test(navigator.userAgent);
    },
    isIE: function() {
        return (/MSIE/).test(navigator.userAgent);
    },
    isIE6: function() {
        return (/MSIE 6/).test(navigator.userAgent);
    },
    isIE7: function() {
        return (/MSIE 7/).test(navigator.userAgent);
    },
    isIE8: function() {
        return (/MSIE 8/).test(navigator.userAgent);
    },
    isChrome: function() {
        return (/Chrome/).test(navigator.userAgent);
    },
    isOpera: function() {
        return (/Opera/).test(navigator.userAgent);
    },
    isSafari: function() {
        return (/Safari/).test(navigator.userAgent);
    }
};

App.loading = function(msg) {
    msg = msg || 'Đang tải dữ liệu';

    if ($('#ajax-loading').length == 0) {
        var img = BASE_URL + 'img/loading.gif';
        var loading = $('<div id="ajax-loading">' + msg + ' <img src="' + img + '" alt="loading..."/></div>');
        loading.appendTo('body');
    }

    $('#ajax-loading').show();
}
App.removeLoading = function() {
    $('#ajax-loading').hide();
};

(function($) {

    $.extend(App, {
        load: function() {
            if (arguments.length > 0) {
                for (var x in arguments) {
                    switch (typeof arguments[x]) {
                        case 'function':
                            App.run(arguments[x], 100);
                            break;
                        case 'string':
                            if (App.isLoaded(arguments[x])) {
                                break;
                            }

                            App.staticFiles.push(arguments[x]);

                            var ext = arguments[x].substring(arguments[x].lastIndexOf('.'), arguments[x].length);
                            switch (ext) {
                                case '.js':
                                    if (App.isFn(arguments[x] + 1)) {
                                        App.getScript(arguments[x], arguments[x + 1]);
                                    }
                                    else {
                                        App.getScript(arguments[x]);
                                    }
                                    break;
                                case '.css':
                                    if (App.isFn(arguments[x] + 1)) {
                                        App.getStyle(arguments[x], arguments[x + 1]);
                                    }
                                    else {
                                        App.getStyle(arguments[x]);
                                    }
                                    break;
                            }
                            break;
                    }
                }
            }
        },
        isLoaded: function(obj) {
            var loaded = false;
            for (var x = 0; x < this.staticFiles.length; x++) {
                if (this.staticFiles[x] == obj) {
                    loaded = true;
                }
            }

            return loaded;
        },
        processResponse: function(data) {
            for (x in data) {
                switch (x) {
                    case 'error':
                        App.alertError(data[x], data.frame_title || '');
                        break;
                    case 'info':
                        App.alertInfo(data[x], data.frame_title || '');
                        break;
                    case 'success':
                        App.alertSuccess(data[x], data.frame_title || '');
                        break;
                    case 'require_login':
                        App.alert('Bạn đã bị thoát!');
                        App.login();
                        break;
                    case 'redirect':
                        App.redirect(data[x]);
                        break;
                    case 'title':
                        App.title(data[x]);
                        break;
                    case 'alert':
                        App.alert(data[x], data.frame_title || '');
                        break;
                    case 'callback':
                        eval(data[x]);
                        break;
                    case 'reload':
                        window.location.reload();
                        break;
                    case 'message':
                        App.message(data[x]);
                        break;
                    case 'content':
                        document.getElementById('message').innerHTML(data[x]);
                        break;
                }
            }
        },
        getScript: function(url, fn) {
            fn = fn || function() {
            };
            url = BASE_URL + 'assets/js/' + url;
            $.getScript(url, App.run(fn));
        },
        getStyle: function(url, fn) {
            fn = fn || function() {
            };
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = BASE_URL + 'css/' + url;
            link.onreadystatechange = function() {
                if (this.readyState === 'loaded' || this.readyState === 'complete') {
                    fn.call(this);
                }
            };
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    });

    App.alert = function(msg, options) {
        options = options || {};
        if ($('#__message__').length == 0) {
            $('body').append('<div id="__message__"></div>');
        }

        options = $.extend({
            resizable: false,
            draggable: true,
            position: 'center',
            modal: true,
            closeOnEscape: true,
            title: 'Information!',
            autoOpen: false,
            minHeight: 30,
            open: function(event, ui) {
                $(event.target).dialog('widget')
                        .css({position: 'fixed'})
                        .position({my: 'center', at: 'center', of: window});
                $(event.target).parents('.ui-dialog').find('.ui-dialog-titlebar-close').html('<span class="ico-x"></span>');
                if ($(event.target).parents('.ui-dialog').find('span.ico-info').length == 0) {
                    $('<span class="ico-info"></span>').insertBefore($(event.target).parents('.ui-dialog').find('.ui-dialog-title'));
                }
            },
            buttons: {
                'OK': function() {
                    $(this).dialog("close");
                }
            }
        }, options);

        $('#__message__').html(msg).dialog(options);

        $("#__message__").dialog('open');
    };

    App.alertError = function(msg, title) {
        App.alert(msg, {
            title: title || 'Error!'
        });
    };

    App.alertInfo = function(msg, title) {
        App.alert(msg, {
            title: title || 'Information!'
        });
    };

    App.alertSuccess = function(msg, title) {
        App.alert(msg, {
            title: title || 'Successfully!'
        });
    };

    App.redirect = function(url) {
        window.location.href = url;
    };

    App.title = function(title) {
        window.title = title;
    }

    App.confirm = function(msg, options) {
        App.load('helpers/php.js', function() {
            var id = App.php.uniqid(),
                    title = options.title || 'Confirm?',
                    confirm = $('<div id="confirm' + id + '" class="__confirm__" title="' + title + '">' + msg + '</div>'),
                    fn = options.fn || function() {
            };

            confirm.appendTo('body');
            confirm.dialog({
                resize: options.resize || false,
                height: options.height || null,
                width: options.width || null,
                modal: options.modal || false,
                buttons: {
                    'OK': function() {
                        $(this).dialog('close');
                        fn.call(this);
                    },
                    'Cancel': function() {
                        $(this).dialog('close');
                    }
                }
            });
        });
    }

    App.join = function(str) {
        var store = [str];
        return function extend(other) {
            if (other !== null && 'string' === typeof other) {
                store.push(other);
                return extend;
            }
            return store.join('');
        };
    };

})(jQuery);

$('body').find('input[type=submit], button[type=submit]').attr('disabled', 'disabled');
$(document).ready(function() {
    $(this).find('input[type=submit], button[type=submit]').each(function() {
        $(this).removeAttr('disabled');
    });
});