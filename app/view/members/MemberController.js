Ext.define('Xe.view.members.MemberController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.membercontroller',
    requires: [
        'Xe.util.Util'
    ],

    init: function() {},
    onAdd: function(button, e, options) {
        console.log("Clicked");
        var win = Ext.create('Xe.view.members.forms.MemberForm');
        win.setTitle('Add new Member');
        win.show();


    },
    onEdit: function(button, e, options) {},
    createDialog: function(record) {},
    getRecordsSelected: function() {},
    onDelete: function(button, e, options) {},
    onSave: function(button, e, options) {},
    onSaveSuccess: function(form, action) {},
    onSaveFailure: function(form, action) {},
    onCancel: function(button, e, options) {},
    refresh: function(button, e, options) {},
    loadNewMemberForm: function() {
        var win = Ext.create('Xe.view.members.forms.NewMemberForm');
        win.setTitle('Add new Member');
        win.show();
    },
    onFileFieldChange: function(fileField, value, options) {}
});