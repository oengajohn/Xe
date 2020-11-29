/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Xe.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Xe',
        footer: 'footer',
        appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',
        appName: 'Fund Master',
        footer: 'Fund Master Driving Pension Administration- Systech limited',
    }

    //TODO - add data, formulas and/or methods to support your view
});