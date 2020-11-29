Ext.define('Xe.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',
    requires: [
        'Xe.util.Util'
    ],
    model: 'Xe.model.menu.Accordion',
    proxy: {
        type: 'ajax',
        url: 'resources/menu.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation) {
                Xe.util.Util.showErrorMsg(response.responseText);
            }
        }
    },

});