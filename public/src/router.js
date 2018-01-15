(function($){
    var ns = window.ns;
    
    ns.Router = ns.Backbone.Router.extend({
      
      routes : {
        'instruction' : 'instruction'
      },
      
      instruction: function(){
        var instructionPage = new ns.InstructionPage({
          el : $('#root')
        });
        instructionPage.render();
      
      }
        
    });
  
  // fireup router now
  new ns.Router()
  
})(jQuery)