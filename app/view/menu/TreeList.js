Ext.define('Xe.view.menu.TreeList', {
    extend: 'Ext.panel.Panel',
    xtype: 'tree-list',
    width: 250,
    split: true,

    title: 'Menu',
    animate: true,
    collapsible: true,
    requires: [
        'Xe.view.menu.TreeListController',
        'Xe.view.menu.TreeListModel'
    ],
    controller: 'tree-list',


    iconCls: 'x-fa fa-cogs',
    layout: 'accordion',

    viewModel: {
        type: 'tree-list'
    },

    header: {
        items: [{
            xtype: 'button',
            text: 'Options',
            cls: 'dock-tab-btn',
            menu: [{
                text: 'Expander Only',
                checked: true,
                handler: 'onToggleConfig',
                config: 'expanderOnly'
            }, {
                text: 'Single Expand',
                checked: false,
                handler: 'onToggleConfig',
                config: 'singleExpand'
            }]
        }, {
            xtype: 'button',
            text: 'Nav',
            enableToggle: true,
            reference: 'navBtn',
            cls: 'dock-tab-btn',
            toggleHandler: 'onToggleNav'
        }, {
            xtype: 'button',
            text: 'Micro',
            enableToggle: true,
            cls: 'dock-tab-btn',
            toggleHandler: 'onToggleMicro'
        }]
    },

    items: [{
            region: 'west',
            width: 250,
            split: true,
            reference: 'treelistContainer',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            scrollable: 'y',
            items: [{
                xtype: 'treelist',
                reference: 'treelist',
                bind: '{navItems}'
            }]
        }
        /* , {
                region: 'center',
                bodyPadding: 10,
                bind: {
                    html: '{selectionText}'
                }
            } */
    ]
});