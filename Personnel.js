Ext.define('Books.store.Personnel', {
    extend: 'Ext.data.TreeStore',
    model: 'Books.model.Personnel',
    alias: 'store.personnel',
    root: {
        subject: 'Books',
        expanded: true,
        children: [{
            subject: 'Philosophy',
            children: [{
                subject: 'Tao Te Ching',
                author: 'Lao Tzu ',
                price: '1250',
                leaf: true
            }, {
                subject: 'Man\'s Search for Meaning',
                author: 'Viktor E. Frankl',
                price: '920',
                leaf: true
            }, {
                subject: 'The Republic',
                author: 'Plato',
                price: '225',
                leaf: true
            }, {
                subject: 'Beyond Good and Evil',
                author: 'Friedrich Nietzsche',
                price: '1400',
                leaf: true
            }]
        }, {
            subject: 'Mathematics',
            children: [{
                subject: 'Algerbric Maths',
                author: 'R. D. Sharma',
                price: '450',
                leaf: true
            }, {
                subject: 'Mathematical Analysis',
                author: 'David S. Dummit',
                price: '750',
                leaf: true
            }, {
                subject: 'Business Calculus',
                author: 'Mike May',
                price: '1950',
                leaf: true
            }, {
                subject: 'Linear algebra',
                author: 'Serge Lang',
                price: '1400',
                leaf: true
            }]
        }]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'root'
        }
    }, 
});


// Ext.define('Books.store.Personnel', {
//     extend: 'Ext.data.Store',

//     alias: 'store.personnel',

//     model: 'Books.model.Personnel',

//     data: {
//         items: [
//             { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
//             { name: 'Worf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222" },
//             { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333" },
//             { name: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444" }
//         ]
//     },

//     proxy: {
//         type: 'memory',
//         reader: {
//             type: 'json',
//             rootProperty: 'items'
//         }
//     }
// });

