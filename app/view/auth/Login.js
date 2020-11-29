Ext.define('Xe.view.auth.Login', {
    extend: 'Ext.window.Window',
    xtype: 'auth-login',
    requires: [
        'Xe.view.locale.Translation',
        'Xe.view.auth.LoginController',
        'Xe.view.auth.LoginModel',
        'Xe.util.Util',


    ],
    store: {
        type: 'personnel'
    },

    controller: 'auth-login',
    viewModel: {
        type: 'auth-login'
    },
    autoShow: true,
    title: "Login",
    frame: true,
    closable: false,
    closeAction: 'hide',
    draggable: false,
    resizable: false,
    iconCls: 'fa fa-key fa-lg',
    bodyPadding: 10,
    layout: {
        type: 'fit'
    },
    width: 360,
    height: 200,
    items: [{
        xtype: 'form',
        reference: 'form',
        autoEl: 'form',
        defaults: {
            afterLabelTextTpl: Xe.util.Util.required,
            anchor: '100%',
            xtype: 'textfield',
            allowBlank: false,
            labelWidth: 80,
            vtype: 'alphanum',
            minLength: 3,
            msgTarget: 'side',
            listeners: {
                specialKey: 'onTextFieldSpecialKey'
            }
        },
        items: [{

            name: 'user.username',
            // fieldLabel: translations.user,
            fielLabel: 'User',
            maxLength: 25

        }, {
            name: 'user.password',
            inputType: 'password',
            // fieldLabel: translations.password,
            fieldlabel: 'Password',
            id: 'password',
            reference: 'password',
            vtype: 'customPass',
            maxlength: 15,
            enableKeyEvents: true,
            listeners: {
                keypress: 'onTextFieldKeyPress'
            }

        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                    xtype: 'translation'
                }, , {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    iconCls: 'fa fa-times fa-lg red',
                    // text: translations.cancel,
                    text: 'Cancel',
                    listeners: {
                        click: 'onButtonClickCancel'
                    }
                },
                {
                    xtype: 'button',
                    formBind: true,
                    iconCls: 'fa fa-sign-in-alt',
                    // text: translations.submit,
                    text: 'Submit',
                    listeners: {
                        click: 'onButtonClickSubmit'
                    }
                }
            ]
        }]
    }],

});