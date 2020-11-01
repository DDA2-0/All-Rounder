(function($){
      $(document).ready(function(){
            setTimeout(function(){
                  $('.loading').css({
                        'opacity':'0',
                        'transition':'all .5s ease-in-out'
                  });
            },1300);
            
            setTimeout(function(){
                  location.assign("../html/main.html");
            },2000);
      });
      
})(jQuery);
