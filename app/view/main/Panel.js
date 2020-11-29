Ext.define('Xe.view.main.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    activeTab: 0,
    // title: 'Panel',
    items: [{
        xtype: 'panel',
        closable: false,
        iconCls: 'fa fa-home fa-lg tabIcon',
        title: 'Home'
    }]
});