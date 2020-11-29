Ext.define('Xe.store.Salutation', {
    extend: 'Ext.data.SimpleStore',
    alias: 'store.salutations',
    fields: ['id', 'title'],
    data: {
        items: [
            { "id": 'MR', "title": 'Mr.' },
            { "id": 'MRS', "title": 'Mrs.' },
            { "id": 'MISS', "title": 'Ms.' },
            { "id": 'DR', "title": 'Dr.' },
            { "id": 'PROF', "title": 'Prof.' },
            { "id": 'REV', "title": 'Rev.' },
            { "id": 'ENG', "title": 'Eng.' },
            { "id": 'HON', "title": 'Hon.' }
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