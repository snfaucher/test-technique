(function($){
  
        $(document).ready(function(){
          window.Backbone.history.start();
          
          $.get('/check', function(data){
            $('header').prepend('<div class="app-status">Connexion au serveur réussie.</div>');
          });
    });
  
})(jQuery)