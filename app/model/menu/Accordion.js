Ext.define('Xe.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: [
        'Xe.model.menu.TreeNode'
    ],
    fields: [
        { name: 'id', type: 'int' },
        { name: 'text' },
        { name: 'iconCls' }
    ],
    hasMany: {
        model: 'Xe.model.menu.TreeNode',
        foreignKey: 'parent_id',
        name: 'items'
    }
});