define(["View",getViewTemplatePath("loading"),"UILoading"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{"click .demo1":"demo1","click .demo2":"demo2","click .demo3":"demo3","click .demo4":"demo4"},demo1:function(){this.loading1||(this.loading1=new c),this.loading1.show()},demo2:function(){this.loading2||(this.loading2=new c({})),this.loading2.show()},demo3:function(){this.loading3||(this.loading3=new c({needMask:!1})),this.loading3.show()},demo4:function(){this.loading4||(this.loading4=new c({maskToHide:!0})),this.loading4.show()},onPreShow:function(){this.turning()},onShow:function(){},onHide:function(){this.loading1&&"show"==this.loading1.status&&this.loading1.hide(),this.loading2&&"show"==this.loading2.status&&this.loading2.hide(),this.loading3&&"show"==this.loading3.status&&this.loading3.hide(),this.loading4&&"show"==this.loading4.status&&this.loading4.hide()}})});