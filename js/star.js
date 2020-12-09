var sWidth; //화면 너비를 받아올 변수
var sHeight; //화면 높이를 받아올 변수
var canvas; //별이 보여질 캔버스
var context;
var numOfStars;
var starDensity = 1500; //별의 밀도
var starColors = ["#111", "#333", "#555", "#7872a8", "#483f26"]; //별의 색상

//창의 너비, 높이 값을 변수에 할당
sWidth = $(window).width();
sHeight = $(window).height();

//id가 starfield인 canvas를 변수에 할당
canvas = $('#starfield');

// width와 height에 sWidth, sHeight 값을 세팅한다
canvas.attr('width', sWidth);
canvas.attr('height', sHeight);
// canvas에 표시하기 위해 렌더링 Context 타입 지정 (2d)
context = canvas[0].getContext('2d');

//별 개수 계산
// Math.floor 소수점 이하를 버림
// 창의 넓이 / 별의 밀도 (별의 밀도가 낮을수록 별이 더 많이 표현됨)
numOfStars = Math.floor((sWidth * sHeight) / starDensity);

//별이 canvas에 그려지게 하는 함수
function stars() {
  // i가 별의 개수와 같아지기 전까지 반복
  for (i=0;i<numOfStars;i++) {
    //별의 색상을 랜덤하게 지정
    var starColor = starColors[Math.floor(Math.random()*starColors.length)];
    //별의 위치를 랜덤하게 지정
    var starX = Math.floor(Math.random()*sWidth);
    var starY = Math.floor(Math.random()*sHeight);
    // beginPath() canvas에 무언가를 그릴 때 적는 시작함수? 새로운 경로를 만드는 함수?
    context.beginPath();
    // context.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향)
    context.arc(starX, starY, 1, 0, 2 * Math.PI);
    // 그려진 경로에 색상을 채움
    context.fillStyle = starColor;
    context.fill();
  }
}

//별을 그리는 함수 호출
stars();