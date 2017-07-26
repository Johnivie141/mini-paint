$(document).ready(function() {
  // all code goes in here
var colors = 'white green red blue yellow';

var color='white';
var mousedown=false;
var action="add";
$('body').on('mousedown',function(event)
{
  console.log("setting mousedown")
  mousedown=true;
  
});

$('body').on('mouseup',function(){
  mousedown=false;});


$('.box').on('mouseenter',function(event){

  if (mousedown && action!==""){
    if (action==="add")
    {
      $(this).removeClass(colors);
      $(this).addClass(color);
    }
    if (action==="remove"){
      $(this).removeClass(colors);
    }
    redraw();


  }
})

$('.box').on('dblclick', function() {
    if (action ==="remove") action="add";
    else action="remove";
   $(this).removeClass(colors);
  })

/*

   $('.box').on('click', function() {
     action="add";
       $(this).removeClass(colors);
    $(this).addClass(color);
  })

  $('.box').on('dblclick', function() {
    action="remove";
    $(this).removeClass(colors);
  })

*/
$('#reset').on('click', function() {
  
    $('.box').removeClass(colors)
  })


$('#red').on('click', function() {
  action="add";
    color = 'red';
  })

  $('#blue').on('click', function() {
    action="add";
    color = 'blue';
  })

  $('#green').on('click', function() {
    action="add";
    color = 'green';
  })

  $('#yellow').on('click', function() 
  {
    action="add";
    color = 'yellow';
  })

  $('#white').on('click', function() {
   
    action="add";
    color = 'white';
  })

// Algorithm for picture
  // each row is 100 items long
  //each column is 54 items long
/* - Loop through each element matching the selector index gives us the number of elements so far +1
$( "li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});
*/
 // x = pos%100;
 // y = int(pos/100);

var canvasHeight=54;
var canvasWidth=100;
var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");




// * Main Function for Canvas Draw

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
 $("div div").each(function(pos){

   
   var x = pos%100;
   var y  = Math.floor(pos/100);
   context.moveTo(x,y);
   var pixelColor="#000000";
   var classNames=$(this).attr("class");
   if (classNames.indexOf("white")!==-1) pixelColor="#FFFFFF";
   if (classNames.indexOf("red")!==-1) pixelColor="#FF0000";
   if (classNames.indexOf("yellow")!==-1) pixelColor="#FFFF00";
   if (classNames.indexOf("green")!==-1) pixelColor="#008000";
  if (classNames.indexOf("blue")!==-1) pixelColor="#0000FF";

   context.fillStyle=pixelColor;
   
   context.fillRect(x,y,1,1);
   

 }); // end .each loop


}


})
