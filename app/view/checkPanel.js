Ext.define('AM.view.checkPanel', {
    extend: 'Ext.form.CheckboxGroup',
    alias: 'widget.checkPanel',
    vertical: true,
	st:	{
			xtype:'store'
		}
	initComponent: function() {
			for(var i=0;i<this.st.getCount();i++){
					this.items.push({boxLabel: i});
			}
    this.callParent(arguments);
}
})
;

