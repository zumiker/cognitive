Ext.define('AM.store.ListEduSt', {
    extend: 'Ext.data.Store',
    model: 'AM.model.ListEduM',
    //autoLoad: true,
    storeId:'ListEduSt',
    proxy: {
        type: 'ajax',
        url: 'php/get_edu.php',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
});