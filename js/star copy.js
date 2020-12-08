(function($){
      $(document).ready(function(){
            // 백그라운드에 깔릴 캔버스 (별 이펙트)
            var starCanvas;
            window.onload = function()
            {
            starCanvas = new starCanvas();
            starCanvas.redraw(window.innerWidth, window.innerHeight);
            };

            function starCanvas() 
            {
                  this.bouncyStarList = [];
                  this.canvas = document.getElementById("star_background");
                  this.ctx = this.canvas.getContext("2d");
                  requestAnimFrame(this.animate.bind(this));
            }

            starCanvas.prototype.density = function(){
            return Math.floor(Math.sqrt((this.canvas.height, this.canvas.width) * 3));
            }

            starCanvas.prototype.redraw = function(width, height)
            {
            this.bouncyStarList = [];
            this.canvas.width = width;
            this.canvas.height = height;
            spawnStar();
            }

            starCanvas.prototype.animate = function()
            {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            starCanvas.bouncyStarList.forEach(function(ball) {
                  ball.update();
            });
            requestAnimFrame(this.animate.bind(this));
            }

            star_background.prototype.seekLines = function(){
            for (var i = 0; i < starCanvas.bouncyStarList.length; i++)
            {
                  var dx = starCanvas.bouncyStarList[i].spawnX - this.spawnX;
                  var dy = starCanvas.bouncyStarList[i].spawnY - this.spawnY;
                  var distance = Math.sqrt(dx * dx + dy * dy);
                  if (starCanvas.bouncyStarList[i] != this && starCanvas.bouncyStarList[i].linkedbouncyBalls != null && distance < starCanvas.density() && !this.linkedbouncyBalls.includes(starCanvas.bouncyStarList[i])) 
                  {
                        starCanvas.drawLine(this.spawnX, this.spawnY, starCanvas.bouncyStarList[i].spawnX, starCanvas.bouncyStarList[i].spawnY, distance);
                        this.linkedbouncyBalls.push(starCanvas.bouncyStarList[i]);
                  }
            }
            }

            starCanvas.prototype.drawLine = function(startX, startY, endX, endY, distance) 
            {
            distance = ((1.0 / distance) * 10).toFixed(2);
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.ctx.strokeStyle = "rgba(215, 215, 215," + distance + ")";
            this.ctx.lineWidth = 0.3;
            this.ctx.stroke();
            }

            starCanvas.prototype.drawStar = function(ball){
            this.ctx.beginPath();
            this.ctx.arc(ball.spawnX, ball.spawnY, ball.size, 0, 2 * Math.PI);
            this.ctx.fillStyle = "rgba(215, 215, 215, 0.7)";
            this.ctx.fill();
            this.ctx.strokeStyle = "rgba(215, 215, 215, 0.7)";
            this.ctx.stroke();
            }

            function star_background(spawnX, spawnY) 
            {
            if (spawnX && spawnY) {
                  this.spawnX = spawnX;
                  this.spawnY = spawnY;
                  this.wasSpawnedByClick = true;
            } else {
                  this.spawnX = Math.floor(Math.random() * (starCanvas.canvas.width));
                  this.spawnY = Math.floor(Math.random() * (starCanvas.canvas.height));
            }

            this.speedX = Math.random() * generateDecimalBetween(-1.0, 1.0);
            this.speedY = Math.random() * generateDecimalBetween(-1.0, 1.0);
            this.size = generateDecimalBetween(0.3, 1.3);
            starCanvas.bouncyStarList.push(this);
            }

            star_background.prototype.doesStarIntersectCanvasBoundary = function(){
            return this.spawnX < 0 + this.size || this.spawnX > starCanvas.canvas.width - this.size 
            || this.spawnY < 0 + this.size || this.spawnY > starCanvas.canvas.height - this.size;
            }

            star_background.prototype.update = function(){
            this.spawnX = this.spawnX - this.speedX;
            this.spawnY = this.spawnY - this.speedY;
            
            if (this.doesStarIntersectCanvasBoundary() && this.wasSpawnedByClick) {
                  starCanvas.bouncyStarList.splice(starCanvas.bouncyStarList.indexOf(this), 1);
                  return;
            }
            if (this.spawnX < 0 + this.size || this.spawnX > starCanvas.canvas.width - this.size) {
                  this.speedX = this.speedX * -1;
            } else if (this.spawnY < 0 + this.size || this.spawnY > starCanvas.canvas.height - this.size) {
                  this.speedY = this.speedY * -1;
            }

            this.linkedbouncyBalls = [];
            this.seekLines();
            starCanvas.drawStar(this);
            }

            function spawnStar()
            {
            for (var i = 0; i < starCanvas.density(); i++) {
                  new star_background();
            }
            }

            function generateDecimalBetween(minimum, maximum) {
            return (Math.random() * (minimum - maximum) + maximum).toFixed(2);
            };

            document.addEventListener('click', function(evt) {
            spawnStarsFromClick(evt.x, evt.y);
            }, false);

            document.addEventListener("touchstart", function(evt) {
            spawnStarsFromClick(evt.touches[0].pageX, evt.touches[0].pageY);
            }, false);


            function spawnStarsFromClick(x, y)
            {
            for (var i = 0; i < 3; i++) {
                  new star_background(x,  y);
            }
            }

            window.requestAnimFrame = (function() {
            return  window.requestAnimationFrame || 
                        window.webkitRequestAnimationFrame || 
                        window.mozRequestAnimationFrame || 
                        window.oRequestAnimationFrame || 
                        window.msRequestAnimationFrame || 

            function(callback) {
                  window.setTimeout(callback, 1000 / 60);
            };
            })();
      });
})(jQuery);