Ext.define('Books.view.main.Popup', {
    title: 'Add Book',
    extend: 'Ext.window.Window',
    xtype: 'Popup',
    width: 300,
    height: 250,
    model: true,
    floating: true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        bodyPadding: 10,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Book Name',
            name: 'bookName',
            allowBlank: false,
            minLength: 3,
            maxLength: 50,
            enforceMaxLength: true,
            listeners: {
                blur: 'pvtValidateTextField'
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Author Name',
            name: 'authName',
            allowBlank: false,
            minLength: 3,
            maxLength: 50,
            enforceMaxLength: true,
            listeners: {
                blur: 'pvtValidateTextField'
            }
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Price',
            name: 'priceLbl',
            allowBlank: false,
            minValue: 0, // Set minimum value
            maxValue: 10000,
            enforceMaxLength: true,
            listeners: {
                blur: 'pvtValidatePriceField'
            }
        }],
        buttons: [{
            text: 'Add Book',
            id: 'addBookToListBtn',
            handler: function () {
                var form = this.up('form').getForm();
                if (form.isValid()) { // Check if the form is valid
                    var selectedNode = Ext.getCmp('testGrid').getSelectionModel().getSelection()[0];
                    var bookName = form.getFieldValues().bookName;
                    var authName = form.getFieldValues().authName;
                    var priceLbl = form.getFieldValues().priceLbl;

                    let newNode = Ext.create('Ext.data.TreeModel', {
                        subject: bookName,
                        author: authName,
                        price: priceLbl,
                        leaf: true
                    });
                    selectedNode.appendChild(newNode);
                    this.up('window').destroy();
                }
            }
        }]
    }]
});

