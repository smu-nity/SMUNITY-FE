//pie-chart
$(window).ready(function(){
    draw(80, '.pie-chart1', '#6188E8');
    draw(50, '.pie-chart2', '#8b22ff');
    draw(30, '.pie-chart3','#ff0');
    typing();
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },40);
 }

 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #dfe0e5 "+i+"% 100%)"
    });
 }

 //숫자 카운트 애니메이션
 $('.result_content_number').each(function() { // .count-num에 각각 적용
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
  duration: 3000, // 애니메이션이 완료될때까지 걸리는 시간
  easing:'linear', // 애니메이션 효과 방식
  step: function() { // 움직임 각 스텝별로 실행될 함수
  $this.text(Math.floor(this.countNum));
  // Math.floor -> this.countNum의 값을 정수로 만들어준다
  },
  complete: function() { // 움직임이 멈춘 후 실행될 함수
  $this.text(this.countNum);
  // this.countNum이 $this의 text값이 된다
  //alert('finished');
  }
  });  
});

 //typing animation
 $('.result_content_info').each(function() { //각각 적용
  let $this = $(this)
  const content = $this.attr('contain');
  let i = 0;
  $(this).html("a")
  let txts =''
  function typing(){
    if (i < content.length) {
    var txt = content.charAt(i);
    txts += txt
    $this.html(txts);
    i++;
    }
  }
  setInterval(typing, 200)
});