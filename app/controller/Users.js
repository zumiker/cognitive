

Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['ListManSt','ListEduSt','ListStaSt'],
    models: ['ListManM','ListEduM','ListStaM'],
    views: ['Viewport'],
    init: function () {
        this.control({

        });
    }
});
