

Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['ListManSt','ListEduSt','ListStaSt','ListGridSt'],
    models: ['ListManM','ListEduM','ListStaM','ListGridM'],
    views: ['Viewport'],
    init: function () {
        this.control({
			'viewport #panid':{
				afterrender:function(element){
					var viewport = element.up('viewport');
					var checkPanM = viewport.query('#mcheckid')[0];
					var checkPanE = viewport.query('#echeckid')[0];
					var checkPanS = viewport.query('#scheckid')[0];
					var grid = viewport.query('#gridid')[0];
			        var ListEduSt = this.getStore('ListEduSt');
			        var ListManSt = this.getStore('ListManSt');
			        var ListStaSt = this.getStore('ListStaSt');
			        Ext.getBody().mask('Загрузка данных...');
			        ListManSt.load({
			            callback: function(record, option, success){
			                if(success){
			                    for(var i=0; i < ListManSt.getCount();i++)
			                    	checkPanM.insert(i,{xtype:'checkbox',name:'man',inputValue: ListManSt.getAt(i).get('MANNAME'),boxLabel:ListManSt.getAt(i).get('MANNAME')});
			                    ListEduSt.load({
			                        callback: function(record, option, success){
			                            if(success){
			                                for(var i=0; i < ListEduSt.getCount();i++)
			                    				checkPanE.insert(i,{xtype:'checkbox',name:'edu',inputValue: ListEduSt.getAt(i).get('EDUNAME'),boxLabel:ListEduSt.getAt(i).get('EDUNAME')});

			                                ListStaSt.load({
			                                    callback: function(record, option, success){
			                                        if(success){
			                                        	for(var i=0; i < ListStaSt.getCount();i++)
			                    							checkPanS.insert(i,{xtype:'checkbox',name:'sta',inputValue: ListStaSt.getAt(i).get('STANAME'),boxLabel:ListStaSt.getAt(i).get('STANAME')});
			                                            grid.store.load({
			                                            	callback: function(record, option, success){
			                                        			if(success){
			                                        				Ext.getBody().unmask();
			                                        			}
			                                        		}
			                                            })   
			                                        }
			                                    }
			                                });    
			                            }
			                        }
			                    });
			                }
			            }
			        });
				}
			},
			'viewport #mcheckid':{
				change: function(element, newValue, oldValue){
					var viewport = element.up('viewport');
					var grid = viewport.query('#gridid')[0];
					var echeck = viewport.query('#echeckid')[0];
					var scheck = viewport.query('#scheckid')[0];
					var manarr = [];
					var eduarr = [];
					var staarr = [];
					if(element.isValid()){
						Ext.each(element.getChecked(), function(obj, index){
					    	manarr [index]= obj.getSubmitValue();
						});
					}
					if(echeck.isValid()){
						Ext.each(echeck.getChecked(), function(obj, index){
					    	eduarr [index]= obj.getSubmitValue();
						});
					}
					if(scheck.isValid()){
						Ext.each(scheck.getChecked(), function(obj, index){
					    	staarr [index]= obj.getSubmitValue();
						});
					}
					if((manarr.length != 0)||(staarr.length != 0)||(eduarr.length != 0)){
						grid.store.clearFilter();
						grid.store.filterBy(function(rec, id) {
						    for (var i = 0; i < manarr.length; i++)
							    if(rec.get('MANNAME') == manarr[i]) {
							        return true;
							    }
							for (var i = 0; i < eduarr.length; i++)
							    if(rec.get('EDUNAME') == eduarr[i]) {
							        return true;
							    }
							for (var i = 0; i < staarr.length; i++)
							    if(rec.get('STANAME') == staarr[i]) {
							        return true;
							    }
						});
					}
					else 
					{
						grid.store.clearFilter();
						grid.store.filterBy(function(rec, id) {return true;});
					}
				}
			},
			'viewport #echeckid':{
				change: function(element, newValue, oldValue){
					
					var viewport = element.up('viewport');
					var grid = viewport.query('#gridid')[0];
					var mcheck = viewport.query('#mcheckid')[0];
					var scheck = viewport.query('#scheckid')[0];
					var manarr = [];
					var eduarr = [];
					var staarr = [];
					if(element.isValid()){
						Ext.each(element.getChecked(), function(obj, index){
					    	eduarr [index]= obj.getSubmitValue();
						});
					}
					if(mcheck.isValid()){
						Ext.each(mcheck.getChecked(), function(obj, index){
					    	manarr [index]= obj.getSubmitValue();
						});
					}
					if(scheck.isValid()){
						Ext.each(scheck.getChecked(), function(obj, index){
					    	staarr [index]= obj.getSubmitValue();
						});
					}
					if((manarr.length != 0)||(staarr.length != 0)||(eduarr.length != 0)){
						grid.store.clearFilter();
						grid.store.filterBy(function(rec, id) {
						    for (var i = 0; i < manarr.length; i++)
							    if(rec.get('MANNAME') == manarr[i]) {
							        return true;
							    }
							for (var i = 0; i < eduarr.length; i++)
							    if(rec.get('EDUNAME') == eduarr[i]) {
							        return true;
							    }
							for (var i = 0; i < staarr.length; i++)
							    if(rec.get('STANAME') == staarr[i]) {
							        return true;
							    }
						});
					}
					else 
					{
						grid.store.clearFilter();
						grid.store.filterBy(function(rec, id) {return true;});
					}
					
				}
			},
			'viewport #gridid':{
				edit: function(editor, element){
					var viewport = element.grid.up('viewport');
					if (element.value != element.originalValue ) {
						if (element.value != "")
							element.store.sync();
						var checkPanM = viewport.query('#mcheckid')[0];
						var checkPanE = viewport.query('#echeckid')[0];
						var checkPanS = viewport.query('#scheckid')[0];
						checkPanM.removeAll();
						checkPanE.removeAll();
						checkPanS.removeAll();
				        var ListEduSt = this.getStore('ListEduSt');
				        var ListManSt = this.getStore('ListManSt');
				        var ListStaSt = this.getStore('ListStaSt');
				        Ext.getBody().mask('Загрузка данных...');
				        ListManSt.load({
				            callback: function(record, option, success){
				                if(success){
				                    for(var i=0; i < ListManSt.getCount();i++)
				                    	checkPanM.insert(i,{xtype:'checkbox',name:'man',inputValue: ListManSt.getAt(i).get('MANNAME'),boxLabel:ListManSt.getAt(i).get('MANNAME')});
				                    ListEduSt.load({
				                        callback: function(record, option, success){
				                            if(success){
				                                for(var i=0; i < ListEduSt.getCount();i++)
				                    				checkPanE.insert(i,{xtype:'checkbox',name:'edu',inputValue: ListEduSt.getAt(i).get('EDUNAME'),boxLabel:ListEduSt.getAt(i).get('EDUNAME')});

				                                ListStaSt.load({
				                                    callback: function(record, option, success){
				                                        if(success){
				                                        	for(var i=0; i < ListStaSt.getCount();i++)
				                    							checkPanS.insert(i,{xtype:'checkbox',name:'sta',inputValue: ListStaSt.getAt(i).get('STANAME'),boxLabel:ListStaSt.getAt(i).get('STANAME')});
				                                            element.store.load({
				                                            	callback: function(record, option, success){
				                                        			if(success){
				                                        				Ext.getBody().unmask();
				                                        			}
				                                        		}
				                                            })   
				                                        }
				                                    }
				                                });    
				                            }
				                        }
				                    });
				                }
				            }
				        });
	                   
                        
}
                    }
				},
			'viewport #scheckid':{
				change: function(element, newValue, oldValue){
					var viewport = element.up('viewport');
					var grid = viewport.query('#gridid')[0];
					var mcheck = viewport.query('#mcheckid')[0];
					var echeck = viewport.query('#echeckid')[0];
					var manarr = [];
					var eduarr = [];
					var staarr = [];
					if(element.isValid()){
						Ext.each(element.getChecked(), function(obj, index){
					    	staarr[index]= obj.getSubmitValue();
						});
					}
					if(mcheck.isValid()){
						Ext.each(mcheck.getChecked(), function(obj, index){
					    	manarr[index]= obj.getSubmitValue();
						});
					}
					if(echeck.isValid()){
						Ext.each(echeck.getChecked(), function(obj, index){
					    	eduarr[index]= obj.getSubmitValue();
						});
					}
					if((manarr.length != 0)||(staarr.length != 0)||(eduarr.length != 0)){
						grid.store.clearFilter();
						grid.store.filterBy(function(rec, id) {
						    for (var i = 0; i < manarr.length; i++)
							    if(rec.get('MANNAME') == manarr[i]) {
							        return true;
							    }
							for (var i = 0; i < eduarr.length; i++)
							    if(rec.get('EDUNAME') == eduarr[i]) {
							        return true;
							    }
							for (var i = 0; i < staarr.length; i++)
							    if(rec.get('STANAME') == staarr[i]) {
							        return true;
							    }
						});
					}
					else 
					{
						grid.store.clearFilter();
						grid.store.filterBy(function(rec, id) {return true;});
					}
				}
			}


        });
    }
});
