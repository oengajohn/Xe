Ext.define('Xe.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-login',
    requires: [
        'Xe.view.auth.CapsLockTooltip',
        'Xe.util.Util'
    ],

    onTextFieldSpecialKey: function(field, e, options) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    onTextFieldKeyPress: function(field, e, options) {
        var charCode = e.getCharCode(),
            me = this;
        if ((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) {
            if (me.capslockTooltip === undefined) {
                me.capslockTooltip = Ext.widget('capslocktooltip');
            }
            me.capslockTooltip.show();
        } else {
            if (me.capslockTooltip !== undefined) {
                me.capslockTooltip.hide();

            }
        }
    },
    onButtonClickCancel: function(button, e, options) {
        this.lookupReference('form').reset();
    },
    onButtonClickSubmit: function(button, e, options) {
        var me = this;
        if (me.lookupReference('form').isValid()) {
            me.doLogin();
        }
    },
    doLogin: function() {
        var me = this,
            form = me.lookupReference('form');
        me.getView().mask('Authenticating... Please wait...');
        form.submit({
            clientValidation: true,
            url: 'http://168.235.82.130:8081/Xe/users',
            method: 'POST',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        })
    },
    onLoginFailure: function(form, action) {
        this.getView().unmask();
        Xe.util.Util.handleFormFailure(action);
    },
    onLoginSuccess: function(form, action) {
        var view = this.getView();
        view.unmask();
        view.close();
        Ext.create({
            xtype: 'app-main'
        });
        localStorage.setItem("userLoggedIn", true);
        Xe.util.SessionMonitor.start();
    }

});