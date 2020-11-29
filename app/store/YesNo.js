Ext.define('Xe.store.YesNo', {
    extend: 'Ext.data.Store',
    alias: 'store.yesno',
    fields: ['id', 'name'],
    data: {
        items: [
            { "id": 'YES', "title": 'Yes' },
            { "id": 'NO', "title": 'No' },
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});