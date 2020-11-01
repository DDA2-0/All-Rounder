(function($) {
      $(document).ready(function(){

      $('.text').html(function(i, html) {
            var chars = $.trim(html).split("");
          
            return '<span>' + chars.join('</span><span>') + '</span>';
          });
      });
})(jQuery);
