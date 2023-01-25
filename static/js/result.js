//pie-chart
function draw(max, classname, colorname){
  var i=1;
   var func1 = setInterval(function(){
     if(i<max){
         color1(i,classname,colorname);
         i++;
     } else{
       clearInterval(func1);
     }
   },20);
}

function color1(i, classname,colorname){
  $(classname).css({
    "background":"conic-gradient(rgba(0, 102, 255, 0.1) 0%, rgba(0, 102, 255, 1) "+i+"%, rgb(232, 235, 242) "+i+"%, rgb(232, 235, 242) 100%)"
  });
}

//숫자 카운트 애니메이션
$('.count').each(function() { // .count-num에 각각 적용
var $this = $(this),
countTo = $this.attr('data-count');
// $this = 첫번째~세번째 .count-num
// countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(777,555,333)

$({ countNum: $this.text()}).animate({
    countNum: countTo 
    // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
    // 0에서 countNum이 된다
},
{
duration: 1500, // 애니메이션이 완료될때까지 걸리는 시간
easing:'linear', // 애니메이션 효과 방식
step: function() { // 움직임 각 스텝별로 실행될 함수
$this.text(Math.floor(this.countNum));
// Math.floor -> this.countNum의 값을 정수로 만들어준다
},
complete: function() { // 움직임이 멈춘 후 실행될 함수
$this.text(this.countNum);
// this.countNum이 $this의 text값이 된다
}
});  
});


//퍼센트 애니메이션
$('.percent').each(function() {
var $this = $(this),
countTo = $this.attr('percent');

$({ countNum: $this.text()}).animate({
    countNum: countTo 
},
{
duration: 1500,
easing:'linear',
step: function() {
$this.text(Math.floor(this.countNum)+"%");
},
complete: function() {
$this.text(this.countNum+"%");
}
});  
});

//정보창 표시
function info_in(e){
  var target = document.getElementById(e.getAttribute('open')).getAttribute('id');
  document.getElementById(target).style.display = "block";
}
//정보창 없애기
function info_out(e){
  var target = document.getElementById(e.getAttribute('open')).getAttribute('id');
  document.getElementById(target).style.display = "none";
}

//모달 끄기
function modal_close(e){
  var target = document.getElementById(e.getAttribute('close')).getAttribute('id');
  document.getElementById(target).style.display = "none";
}