Ext.define('Books.view.main.Buttons', {
    extend: 'Ext.grid.Panel',
    xtype: 'buttonsPanel',
    buttonAlign: 'left',
    buttons: [{
        text: 'Add Book',
        id: 'add-btn',
        handler: 'pvtButtonClick',
    }, {
        text: 'Refresh',
        id: 'refresh-btn',
        handler: 'pvtButtonClick'
    }, {
        text: 'Delete',
        id: 'delete-btn',
        handler: 'pvtButtonClick'
    }]
})
