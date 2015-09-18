Ext.define('AM.store.ListGridSt', {
    extend: 'Ext.data.Store',
    model: 'AM.model.ListGridM',
    proxy: {
        type: 'ajax',
        api: {
             read: 'php/get_grid.php',
            update: 'php/save_grid.php'

        },

        reader: {
            type: 'json',
            root: 'rows'
        },
        writer: {
            type: 'json',
            allowSingle:false
        },
        appendId: false,
        actionMethods: {
            read   : 'POST',
            update : 'POST'
        }
    },
     
});