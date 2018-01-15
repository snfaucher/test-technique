(function($){
    var ns = window.ns;
    
    ns.InstructionPage = ns.Backbone.View.extend({
      
      render : function(){
        var template  =_.template($('#instruction').html());
        this.$el.html(template({caption : 'Instruction'}));
      }
        
    });
  
})(jQuery)