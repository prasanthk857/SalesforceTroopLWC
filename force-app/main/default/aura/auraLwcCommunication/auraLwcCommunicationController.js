({
    myAction : function(component, event, helper) {

    },

    handlechange : function(component,event){
        var msg = event.getParam('msg')
        component.set('v.message',msg)
    }
   
        

   
})
