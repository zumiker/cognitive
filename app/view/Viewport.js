
Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    alias: 'widget.viewport',
    defaults: {
        border: false
    },
    initComponent: function () {
        this.items = [
        {
        	xtype:'panel',
        	width: 200,
            height: 200,
            autoScroll : true,
            itemId: 'panid',
            layout: 'hbox',
        	items:[{
        		xtype:'checkboxgroup',
                layout: 'vbox',
                width: 300,
                //height: 300,
        		itemId:'mcheckid'
        	},
            {
                xtype:'checkboxgroup',
                layout: 'vbox',
                width: 300,
                //height: 100,
                itemId:'echeckid'
            },
            {
                xtype:'checkboxgroup',
                layout: 'vbox',
                //width: 300,
                //height: 100,
                itemId:'scheckid'
            }
            ]
        },
        {
            xtype:'grid',
            itemId:'gridid',
            title:'Пользователи',
            width: '100%',
            autoScroll : true,
            height: 300,
            store: 'ListGridSt',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            ],
            columns: [
                { text: 'Пользователь',  dataIndex: 'MANNAME', flex:1},
                { text: 'Образование', dataIndex: 'EDUNAME', flex:1, editor:'textfield'},
                { text: 'Город', dataIndex: 'STANAME', flex:1}
            ],
        }
        ];
        this.callParent(arguments);
    }
});