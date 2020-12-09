// button에 마우스 hover했을 때, 애니메이션이 나타나도록 하기 위한 코드.

var body = document.body;
var btn = document.querySelectorAll('.button')[0];

//.button 영역에 마우스가 들어오면 show 클래스 추가
btn.addEventListener('mouseenter', function(){
    body.classList.add('show');
});
//.button 영역에서 마우스가 나가면 show 클래스 제거
btn.addEventListener('mouseleave', function(){
    body.classList.remove('show');
});

