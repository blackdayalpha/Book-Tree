/**
 * This view is an example list of people.
 */
Ext.define('Books.view.main.List', {
    extend: 'Ext.container.Container',
    xtype: 'mainlist',
    layout: 'anchor',
    autoscroll: true,
    items: [{
        xtype: 'treePanel'
    },
    {
        xtype: 'buttonsPanel'
    }],

});
