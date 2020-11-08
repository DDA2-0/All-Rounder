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
            },2000);
            
            setTimeout(function(){
                  $('.profile-image').css({
				'opacity' : 1,
				'transform' : 'translateX(0%)'
                  });
            },1800);
            setTimeout(function(){
                  $('#hi-1').css({
                        'opacity' :1,
                        'transform' : 'translateY(0%)'
                  });
            },2000);
            setTimeout(function(){
                  $('#hashtag').css({
                        'opacity' :1,
                        'transform' : 'translateY(0%)'
                  });
            },2200);
            setTimeout(function(){
                  $('#hi-2').css({
                        'opacity' :1,
                        'transform' : 'translateY(0%)'
                  });
            },2400);
            setTimeout(function(){
                  $('.profile .button').css({
                        'opacity' :1,
                        'transform' : 'translateX(0%)'
                  });
            },2600);
            setTimeout(function(){
                  $('.profile p').css({
                        'opacity' :1,
                        'transform' : 'translateY(0%)'
                  });
            },2800);
})(jQuery);
