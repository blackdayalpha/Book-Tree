Ext.define('Books.view.main.TreePanel', {
    extend: 'Ext.tree.Panel',
    xtype: 'treePanel',
    title: 'Book Store',
    width: 'auto',
    height: 500,
    padding: 10,
    rootVisible: false,
    plugins: {
        gridfilterbar: true
    },
    columns: [{
        xtype: 'treecolumn', 
        text: 'Subjects',
        dataIndex: 'subject',
        // sortable: true,
        flex: 1,
        editor: 'textfield',
        filter: {
            // required configs
            type: 'string', 
        }
    }, {
        header: 'Author',
        dataIndex: 'author',
        flex: 1,
        sortable: true,
        editor: 'textfield',
        renderer: function (value, metaData, record) {
            return record.isLeaf() ? value : '';
        }
    }, {
        header: 'Price',
        dataIndex: 'price',
        flex: 1,
        sortable: true,
        editor: 'textfield',
        renderer: function (value, metaData, record) {
            return record.isLeaf() ? value : '';
        }
    }],

    id: 'testGrid',
    selModel: {
        injectCheckBox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel',

    },
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        }),
    ],
    plugins: {
        gridfilters: true
    }, 
    store: {
        type: 'personnel'
    },
});

// Ext.define('Books.view.main.TreeList', {
//     extend: 'Ext.tree.Panel',
//     xtype: 'view.treelist',
//     title: 'Book Store',
//     width: 'auto',
//     autoscroll: true,
//     height: 700,
//     padding: 10,
//     singleSelect: true,


//     store: {
//         type: 'personnel'
//     },
//     columns: [{
//         xtype: 'treecolumn',
//         header: 'Subjects',
//         dataIndex: 'subject',
//         sortable: true,
//         flex: 1,
//         editor: 'textfield'
//     }, {
//         header: 'Author',
//         dataIndex: 'author',
//         flex: 1,
//         sortable: true,
//         editor: 'textfield',
//         renderer: function (value, metaData, record) {
//             return record.isLeaf() ? value : '';
//         }
//     }, {
//         header: 'Price',
//         dataIndex: 'price',
//         flex: 1,
//         sortable: true,
//         editor: 'textfield',
//         renderer: function (value, metaData, record) {
//             return record.isLeaf() ? value : '';
//         }
//     }],

//     id: 'testGrid',
//     selModel: {
//         injectCheckBox: 'first',
//         checkOnly: true,
//         model: 'SIMPLE',
//         type: 'checkboxmodel',

//     },
//     plugins: [
//         Ext.create('Ext.grid.plugin.RowEditing', {
//             clicksToEdit: 2
//         })
//     ],
// });

