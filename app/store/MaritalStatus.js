Ext.define('Xe.store.MaritalStatus', {
    extend: 'Ext.data.Store',
    alias: 'store.maritalstatuses',
    fields: ['id', 'status'],
    data: {
        items: [

            { "id": 'SINGLE', "status": 'Single' },
            { "id": 'MARRIED', "status": 'Married' },
            { "id": 'SEPARATED', "status": 'Separated' },
            { "id": 'DIVORCED', "status": 'Divorced' },
            { "id": 'WIDOWED', "status": 'Drivers License' },
            { "id": 'NOT_SPECIFIED', "status": 'Not Specified' }
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