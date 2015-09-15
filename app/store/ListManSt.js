Ext.define('AM.store.ListManSt', {
    extend: 'Ext.data.Store',
    model: 'AM.model.ListManM',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/get_man.php',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
});