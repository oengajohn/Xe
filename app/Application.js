/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
function loadLocale() {
    var lang = localStorage ? (localStorage.getItem('user-lang') ||
            'en') : 'en',
        file = Ext.util.Format.format("resources/locale/{0}.js",
            lang);
    Ext.Loader.loadScript({
        url: file
    });

}
loadLocale();

localStorage.setItem("userLoggedIn", true);


Ext.define('Xe.Application', {
    extend: 'Ext.app.Application',

    name: 'Xe',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    // glyphFontFamily: 'FontAwesome',
    controllers: [

        'Menu'
    ],
    init: function() {
        var me = this;
        me.splashscreen = Ext.getBody().mask('Loading application',
            'splashscreen');
        me.splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },
    launch: function() {
        Ext.tip.QuickTipManager.init();
        var me = this;
        var task = new Ext.util.DelayedTask(function() {
            //Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        // It's important to note that this type of application could use
                        // any type of storage, i.e., Cookies, LocalStorage, etc.
                        var loggedIn;

                        // Check to see the current value of the localStorage key
                        loggedIn = localStorage.getItem("userLoggedIn");

                        // This ternary operator determines the value of the TutorialLoggedIn key.
                        // If TutorialLoggedIn isn't true, we display the login window,
                        // otherwise, we display the main view
                        Ext.create({
                            xtype: loggedIn ? 'app-main' : 'auth-login'
                        });
                    }
                }
            });
            // //Fade out the icon and message
            // me.splashscreen.next().fadeOut({
            //     duration: 1000,
            //     remove: true,

            // });
        });
        task.delay(2000);

    },
    splashscreen: {},

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});