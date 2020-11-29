Ext.define('Xe.store.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menutreestore',
    fields: [{
            name: 'text',
            type: 'string'
        },
        {
            name: 'className',
            type: 'string'
        }, {
            name: 'iconCls',
            type: 'string'
        }, {
            name: 'leaf',
            type: 'boolean'
        }
    ],
    root: {
        expanded: true,
        children: [
            { text: 'Member Register', leaf: false, iconCls: 'fa fa-list' },
            {
                text: 'Member Listing',
                expanded: true,
                iconCls: 'fa fa-list',
                children: [
                    { text: 'members', leaf: true, className: 'member-view', iconCls: 'fa fa-users' },
                    { text: 'algebra', leaf: true }
                ]
            },
            { text: 'buy lottery tickets', leaf: true }
        ]
    }

});