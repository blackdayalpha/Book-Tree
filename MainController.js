
Ext.define('Books.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    views: [
        'treePanel',
        'buttonsPanel',
        'Popup'
    ],
    pvtAddBookClick: function () {
        Ext.create('Books.view.main.Popup').show();
    },
    // Function to handle refreshing the page
    pvtRefreshClick: function () {
        window.location.reload();
    },

    // Function to handle deleting items
    pvtDeleteClick: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
            if (btn === 'yes') {
                var selected = Ext.getCmp('testGrid').getSelectionModel().getSelection();
                for (n of selected) {
                    par = n.parentNode;
                    console.log(par);
                    par.removeChild(n);
                }
            } else {
                console.log('User canceled deletion');
            }
        });
    },

    pvtValidateTextField: function (field) {
        if (!field.isValid()) {
            field.markInvalid('Please enter a valid book name (3-50 characters).');
        }
    },

    pvtValidatePriceField: function (field) {
        if (!field.isValid()) {
            field.markInvalid('Please enter a valid price (0-10000).');
        }
    },

    // Function to handle button click event
    pvtButtonClick: function (button, e, options) {
        if (button.id === 'add-btn') {
            console.log('adding');
            this.pvtAddBookClick();
        } else if (button.id === 'refresh-btn') {
            console.log('refreshing');
            this.pvtRefreshClick();
        } else if (button.id === 'delete-btn') {
            console.log('deleting');
            this.pvtDeleteClick();
        } 
    }
});

// pvtAddBookToList: function () {
//     var form = this.up('form').getForm();
//     if (form.isValid()) { // Check if the form is valid
//         var selectedNode = Ext.getCmp('testGrid').getSelectionModel().getSelection()[0];
//         var bookName = form.getFieldValues().bookName;
//         var authName = form.getFieldValues().authName;
//         var priceLbl = form.getFieldValues().priceLbl;

//         let newNode = Ext.create('Ext.data.TreeModel', {
//             subject: bookName,
//             author: authName,
//             price: priceLbl,
//             leaf: true
//         });
//         selectedNode.appendChild(newNode);
//         this.up('window').close();
//     }
// },
