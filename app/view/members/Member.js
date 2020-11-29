Ext.define('Xe.view.members.Member', {
    extend: 'Ext.panel.Panel',
    xtype: 'member-view',
    requires: [
        'Xe.view.members.MemberGrid',
        'Xe.util.Glyphs',
        'Xe.model.members.Member',
        'Xe.view.members.MemberViewModel',
        'Xe.view.members.MemberController'
    ],
    controller: 'membercontroller',
    viewModel: {
        type: 'memberviewmodel'
    },
    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'membergrid',
        flex: 1
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
                text: 'Member Operations',
                menu: [{
                    text: 'New Member',
                    tooltip: 'Add a new Member',
                    iconCls: 'add2',
                    handler: 'loadNewMemberForm'
                }, '-', {
                    text: 'Details',
                    id: 'detailsId',
                    tooltip: 'View Details of Selected',
                    iconCls: 'modify',
                    bind: {
                        disabled: '{!memberGrid.selection}'
                    },
                    handler: function() {


                    }
                }, '-', {
                    text: 'Remove',
                    tooltip: 'Remove the selected',
                    iconCls: 'remove2',
                    bind: {
                        disabled: '{!memberGrid.selection}'
                    },
                    handler: function() {

                    }
                }, '-', {
                    text: 'Save All Status',
                    tooltip: 'Save All Members Status',
                    iconCls: 'x-icon-save',
                    bind: {
                        disabled: '{!memberGrid.selection}'
                    },
                    handler: function() {

                    }
                }]
            },
            {
                xtype: 'button',
                text: 'Add',
                // glyph: Xe.util.Glyphs.getGlyph('add'),
                listeners: {
                    click: 'onAdd'
                }
            },
            {
                xtype: 'button',
                text: 'Edit',
                //glyph: Xe.util.Glyphs.getGlyph('edit'),
                listeners: {
                    click: 'onEdit'
                },
                bind: {
                    disabled: '{!memberGrid.selection}'
                }
            },
            {
                xtype: 'button',
                text: 'Delete',
                // glyph: Xe.util.Glyphs.getGlyph('destroy'),
                listeners: {
                    click: 'onDelete'
                },
                bind: {
                    disabled: '{!memberGrid.selection}'
                }
            }
        ]
    }]
});