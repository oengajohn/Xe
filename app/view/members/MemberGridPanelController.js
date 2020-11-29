Ext.define('Xe.view.members.MemberGridPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.membergridpanelcontroller',
    requires: [
        'Xe.model.members.Member',
    ],
    config: {
        /*
            Uncomment to add references to view components
            refs: [{
                ref: 'list',
                selector: 'grid'
            }],
        */
        /*
            Uncomment to listen for events from view components
            control: {
                    'useredit button[action=save]': {
                    click: 'updateUser'
                }
            }
        */
    },
    /**
     * Called when the view is created
     */
    init: function() {
        this.control({
            "#memberGrid": {
                itemdblclick: this.griditemdbdclick
            }
        });

    },
    onItemSelected: function(model, record) {


    },
    onSelectAll: function() {
        this.getView()
            .getSelectionModel()
            .selectAll();
    },
    onDeselectAll: function() {
        this.getView()
            .getSelectionModel()
            .deselectAll();
    },
    onSelectionSelected: function(view, record, item, e, eOpts) {
        var grid = this.getView(),
            record = grid.getSelectionModel().getSelection();

        if (record[0]) {
            var editWindow = Ext.create('Xe.view.security.Profile');
            editWindow.lookupReference('profile-form').loadRecord(record[0]);
            editWindow.setTitle(record[0].get('name'));
            editWindow.show();
        } else {
            Xe.util.Util.showErrorMsg('Please select one record to proceed to editing');
        }
    },
    seachHandler: function(btn) {
        var searchText = this.lookupReference('searchText');
        alert(searchText.getValue());
    },
    onSearchTextHandler: function(obj, e, oPts) {
        if (e.getKey() === e.ENTER) {
            var searchButton = this.getView()
                .lookupReference('searchButton');
            searchButton.click();
        }
    },
    resetHandler: function(btn) {
        var searchInput = this.getView()
            .lookupReference('searchText');
        searchInput.setValue('');
    },
    griditemdbdclick: function(dv, record, item, index, e) {
        console.log(record);

    },
    onDeleteHandler: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        Ext.Msg.alert('Delete', rec.get('name'));
    },
    onEditHandler: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        Ext.Msg.alert('Edit', rec.get('name'));
    }
});