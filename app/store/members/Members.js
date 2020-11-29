Ext.define('Xe.store.members.Members', {
    extend: 'Ext.data.Store',
    alias: 'store.members',
    model: 'Xe.model.members.Member',
    requires: ['Xe.util.Util'],
    // pageSize: 5,
    proxy: {
        type: 'ajax',
        url: 'resources/members.json',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'

        }
    },
    // autoLoad: true,
    listeners: { //#6
        exception: function(proxy, response, operation) {
            Xe.util.Util.showErrorMsg(response.responseText);
        }
    }

});