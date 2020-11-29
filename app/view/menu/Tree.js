Ext.define('Xe.view.menu.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'menutree',
    border: 0,
    requires: [
        'Xe.store.MenuTreeStore'
    ],
    autoScroll: true,
    rootVisible: false,
    store: {
        type: 'menutreestore'
    },
    listeners: {

        itemclick: {
            fn: function(view, record, item, index, event) {
                //the record is the data node that was clicked
                //the item is the html dom element in the tree that was clicked
                //index is the index of the node relative to its parent
                nodeId = record.data.id;
                htmlId = item.id;
                console.log("NodeId ", nodeId, " htmlId ", htmlId);
            }
        }

    }
});