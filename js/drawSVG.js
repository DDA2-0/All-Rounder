(function($) {
      $(document).ready(function(){

                              // var $svg = $('svg').drawsvg();

      // $svg.drawsvg('animate');

      var svg1 = document.getElementById('layer_1');

      $svg1 = $(svg1).drawsvg({
            duration: 1500,
            easing: 'linear'
      });
      function animate1() {
            $svg1.drawsvg('animate'); 
      };
      animate1();
      setInterval(animate1,2300);

      var svg4 = document.getElementById('layer_4');
      $svg2 = $(svg4).drawsvg({
            duration: 2800,
            easing: 'linear'
      });
      // var count = 0;
      // function animate2() {
      //       if(count == 5){
      //             count = 0;
      //             $(svg4).css({"display":"none", "transition":"all 100ms ease-in"})
      //       } else if(count < 5){
      //             $svg2.drawsvg('animate');                  
      //             for(var i=0; i < 5; i++){
      //                   count++;
      //                   console.log(count);
      //             };
      //       };
      // };
      function animate2() {
            $svg2.drawsvg('animate'); 
      };
      animate2();

      setInterval(animate2,6000);

      var svg6 = document.getElementById('layer_6');
      $svg3 = $(svg6).drawsvg({
            duration: 2800,
            easing: 'linear'
      });
      function animate3() {
            $svg3.drawsvg('animate');
      };
      var toggle1 = false;
      if (toggle1 === false){
            setTimeout(animate3,1600);
            toggle1 = true
      }
      setInterval(animate3,7000);

      var svg5 = document.getElementById('layer_5');
      $svg4 = $(svg5).drawsvg({
            duration: 1300,
            easing: 'linear'
      });
      function animate4() {
            $svg4.drawsvg('animate');
      };
      animate4();

      setInterval(animate4,2000);

      var svg_star = document.getElementById('layer_2');
      $svg5 = $(svg_star).drawsvg({
            duration: 1200,
            easing: 'linear',
      });
      function animate5(){
            $svg5.drawsvg('animate');
      }
      animate5();
      setInterval(animate5,2000);

      var ministar = document.getElementById('layer_2_1');
      $svg5_ = $(ministar).drawsvg({
            duration: 900,
            easing: 'linear',
      });
      function animate5_(){
            $svg5_.drawsvg('animate');
      }
      var toggle2 = false;
      if (toggle2 === false){
            setTimeout(animate5_,800);
            toggle2 = true
      }
      setInterval(animate5_,1700);
      
      var svg_heart = document.getElementById('layer_3');
      $svg6 = $(svg_heart).drawsvg({
            duration: 1000,
            easing: 'linear'
      });
      function animate6(){
            $svg6.drawsvg('animate');
      }
      setInterval(animate6,2000);

      var svg7 = document.getElementById('layer_7');
      $svg7 = $(svg7).drawsvg({
            duration: 1800,
            easing: 'linear'
      });
      function animate7(){
            $svg7.drawsvg('animate');
      }
      animate7();
      setInterval(animate7,5000);

      var svg8 = document.getElementById('layer_8');
      var svg9 = document.getElementById('layer_9');
      $svg8 = $(svg8).drawsvg({
            duration: 2500,
            easing: 'linear'
      });
      $svg9 = $(svg9).drawsvg({
            duration: 1800,
            easing: 'linear'
      });
      function animate8(){
            $svg8.drawsvg('animate');
            setTimeout(function(){$svg9.drawsvg('animate');},2500);
      }
      animate8();

      var svg10 = document.getElementById('layer_10');
      $svg10 = $(svg10).drawsvg({
            duration: 2200,
            easing: 'linear'
      });
      function animate10(){
            $svg10.drawsvg('animate');
      }
      animate10();
      setInterval(animate10,8000);

      var svg11 = document.getElementById('layer_11');
      $svg11 = $(svg11).drawsvg({
            duration: 2500,
            easing: 'linear'
      });
      function animate11(){
            $svg11.drawsvg('animate');
      }
      animate11();
      setInterval(animate11,5000);

      var svg12 = document.getElementById('layer_12');
      $svg12 = $(svg12).drawsvg({
            duration: 1200,
            easing: 'linear'
      });
      function animate12(){
            $svg12.drawsvg('animate');
      }
      animate12();
      setInterval(animate12,2700);


});
      
})(jQuery);
