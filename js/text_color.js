(function($) {
      $(document).ready(function(){
      $('.text').html(function(i, html) {
            // 글자마다 <span></span> 생성
            var chars = $.trim(html).split("");
          
            return '<span>' + chars.join('</span><span>') + '</span>';
          });
      });
})(jQuery);
