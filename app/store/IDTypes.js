Ext.define('Xe.store.IDTypes', {
    extend: 'Ext.data.Store',
    alias: 'store.idTypes',
    fields: ['id', 'type'],
    data: {
        items: [
            { "id": 'VOTER', "type": 'Voter ID' },
            { "id": 'PASSPORT', "type": 'Passport No' },
            { "id": 'PENNO', "type": 'National Pension No' },
            { "id": 'NATIONAL', "type": 'National ID' },
            { "id": 'DRIVER', "type": 'Drivers License' }
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