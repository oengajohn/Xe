Ext.define('Xe.store.Gender', {
    extend: 'Ext.data.Store',
    alias: 'store.genders',
    fields: ['id', 'value'],
    data: {
        items: [
            { "id": 'MALE', "value": 'Male' },
            { "id": 'FEMALE', "value": 'Female' }
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