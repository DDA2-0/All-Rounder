(function() {

	function init(item) {
		var items = item.querySelectorAll('li'),
		current = 0,
		autoUpdate = true,
		timeTrans = 4000;
        
		//좌우 버튼
		var nav = document.createElement('nav');
		nav.className = 'nav_arrows';

		//<-
		var prevbtn = document.createElement('button');
		prevbtn.className = 'prev';
		prevbtn.setAttribute('aria-label', 'Prev');

		//->
		var nextbtn = document.createElement('button');
		nextbtn.className = 'next';
		nextbtn.setAttribute('aria-label', 'Next');

		//counter (어울리지 않아서 공백처리함)
		var counter = document.createElement('div');
		counter.className = 'counter';

		// 버튼 생성
		if (items.length > 1) {
			nav.appendChild(prevbtn);
			nav.appendChild(counter);
			nav.appendChild(nextbtn);
			item.appendChild(nav);
		}

		items[current].className = "current";

		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var slidemove = function(e) {
			items[current].className = "";

			if (e === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else if(e === 'left') {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";
		}
    
		// <- 클릭시 왼쪽으로 이동
		prevbtn.addEventListener('click', function() {
			slidemove('left');
		});
		// <- 클릭시 오른쪽으로 이동
		nextbtn.addEventListener('click', function() {
			slidemove('right');
		});

	}

	[].slice.call(document.querySelectorAll('.cd-slider')).forEach(function(item) {
		init(item);
	});

})();