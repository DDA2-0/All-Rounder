(function($) {

	$('.works_title').click(function(){
		$('.works_tit').css({
			'opacity':'0',
			'transition':'opacity .5s ease-in-out'
		});
		setTimeout(function () {
			$('.works_tit').css({
				'display':'none'
			});
			$('.thumbnail').css({
				'transform' : 'translateY(0%)'
			})
		}, 600);
		setTimeout(function(){
			$('.works_info h3').css({
				'transform' : 'translateY(0%)',
				'opacity' : 1
			})
		},800);
		setTimeout(function(){
			$('.works_info h4').css({
				'transform' : 'translateY(0%)',
				'opacity' : 1
			})
		},1000);
		setTimeout(function(){
			$('.works_info p').css({
				'opacity' : 1
			})
		},1200);
		setTimeout(function(){
			$('.back').css({
				'opacity' : 1,
				'transform' : 'translateX(0%)'
			})
		},1400);
		setTimeout(function(){
			$('.button').css({
				'opacity' : 1,
				'transform' : 'translateY(0%)'
			})
		},1300);
	});
	$('#works1').click(function(){
		$('#portfolio1').css({
			'display':'inline-block',
			'transition':'opacity .6s ease-in-out'
		});
		setTimeout(function () {
			$('#portfolio1').css({
				'opacity':'1'
			});
		}, 600);
	});
	$('#works2').click(function(){
		$('#portfolio2').css({
			'display':'inline-block',
			'transition':'opacity .6s ease-in-out'
		});
		setTimeout(function () {
			$('#portfolio2').css({
				'opacity':'1'
			});
		}, 600);
	});
	$('#works3').click(function(){
		$('#portfolio3').css({
			'display':'inline-block',
			'transition':'opacity .6s ease-in-out'
		});
		setTimeout(function () {
			$('#portfolio3').css({
				'opacity':'1'
			});
		}, 600);
	});
	$('#works4').click(function(){
		$('#portfolio4').css({
			'display':'inline-block',
			'transition':'opacity .6s ease-in-out'
		});
		setTimeout(function () {
			$('#portfolio4').css({
				'opacity':'1'
			});
		}, 600);
	});
	$('#works5').click(function(){
		$('#portfolio5').css({
			'display':'inline-block',
			'transition':'opacity .6s ease-in-out'
		});
		setTimeout(function () {
			$('#portfolio5').css({
				'opacity':'1'
			});
		}, 600);
	});
	$('#works6').click(function(){
		$('#portfolio6').css({
			'display':'inline-block',
			'transition':'opacity .6s ease-in-out'
		});
		setTimeout(function () {
			$('#portfolio6').css({
				'opacity':'1'
			});
		}, 600);
	});

	$('.back').click(function () { 
		$('.works').css({
			'opacity':'0',
			'display' : 'none'
		})
		$('.works_tit').css({
			'display':'inline-block'
		})
		setTimeout(function () {
			$('.works_tit').css({
			'opacity':'1',
			});
			$('.thumbnail').css({
				'transform' : 'translateY(20%)'
			})
			$('.works_info h3').css({
				'transform' : 'translateY(-30%)',
				'opacity' : 0
			})
			$('.works_info h4').css({
				'transform' : 'translateY(-50%)',
				'opacity' : 0
			})
			$('.works_info p').css({
				'opacity' : 0
			})
			$('.back').css({
				'opacity' : 0,
				'transform' : 'translateX(100%)'
			})
			$('.button').css({
				'transform' : 'translateY(30%)',
				'opacity' : 0
			})
		}, 400);
	});
})(jQuery);