(function($){
      $('body').css({
            'opacity':'0',
            'transition':'opacity .4s ease-in-out'
      });   
      $('.cd-slider').css({
            'opacity':'0',
            'transition':'opacity .4s ease-in-out'
      });
      $(document).ready(function(){
            setTimeout(function(){
                  $('body').css({
                        'opacity':'1'
                  });
            },300);
            setTimeout(function(){
                  $('.cd-slider').css({
                        'opacity':'1'
                  });
            },1000);
      });
      
})(jQuery);
