/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Xe.Application',

    name: 'Xe',

    requires: [
        // This will automatically load all classes in the Xe namespace
        // so that application classes do not need to require each other.
        'Xe.*'
    ],

    // The name of the initial view to create.
    // mainView: 'Xe.view.auth.Login'
});