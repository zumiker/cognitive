Ext.define('AM.store.ListStaSt', {
    extend: 'Ext.data.Store',
    model: 'AM.model.ListStaM',
    //autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/get_sta.php',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
});