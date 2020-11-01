(function($){
            setTimeout(function(){
                  $('#loading_wrap').css({
                        'opacity':0,
                        'transition':'all 1s ease-in-out',
                        'position':'none'
                  });
                  $('#cursor-bg').css({
                        'opacity':1,
                        'transition':'opacity 1s ease-in-out'
                  });
                  $('#cursor-dot').css({
                        'opacity':1,
                        'transition':'opacity 1s ease-in-out'
                  });
            },1000);
            setTimeout(function(){
                  $('#loading_wrap').css({
                        'z-index': -999
                  }); 
            },2500);
      
})(jQuery);
