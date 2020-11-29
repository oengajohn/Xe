/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Xe.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    requires: [
        'Xe.util.Util'
    ],
    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },
    onLogout: function(button, e, options) {
        var me = this;
        Ext.Ajax.request({
            url: 'php/security/logout.php',
            scope: me,
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },
    onLogoutFailure: function(conn, response, options, eOpts) {
        Xe.util.Util.showErrorMsg(conn.responseText);
    },
    onLogoutSuccess: function(conn, response, options, eOpts) {
        var result = Xe.util.Util.decodeJSON(conn.responseText);
        if (result.success) {
            this.getView().destroy();
            localStorage.removeItem("userLoggedIn");
            window.location.reload();
        } else {
            Xe.util.Util.showErrorMsg(result.msg);
        }
    }
});