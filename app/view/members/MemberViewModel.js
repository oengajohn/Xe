Ext.define('Xe.view.members.MemberViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.memberviewmodel',
    stores: {
        members: {
            model: 'Xe.model.members.Member',
            autoLoad: true
        }
    }
});