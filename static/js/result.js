$(window).ready(function(){
    draw(80, '.pie-chart1', '#6188E8');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
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
     },10);
 }

 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #dfe0e5 "+i+"% 100%)"
    });
 }