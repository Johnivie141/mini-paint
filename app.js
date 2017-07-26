$(document).ready(function() {
 
 
 var pixelArray = localStorage.getItem("pixelArray");
if (!pixelArray) pixelArray= new Array(5400);
else  {
 pixelArray = JSON.parse(localStorage.getItem("pixelArray")); 
  initDraw();
}

  // all code goes in here

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
var supportsHtml5Storage=supports_html5_storage();

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
     pixelArray= new Array(5400);
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

  $("#Save").on('click',function(){
  localStorage.setItem("pixelArray",JSON.stringify(pixelArray));
  console.log("Saving array");

  });

  

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
function initDraw(){
  console.log("INIT Draw");

 $("div div").each(function(pos){

  var color = pixelArray[pos];
  var colorClass="black";
 
  if (color ==="#FFFFFF") colorClass="white";
  if (color ==="#FFFF00") colorClass="yellow";
  if (color ==="#FF0000") colorClass="red";
  if (color ==="#008000") colorClass="green";
  if (color ==="#0000FF") colorClass="blue";
  if (!color) pixelArray[pos]="#000000";
 
  $(this).removeClass(colors);
  $(this).addClass(colorClass);

 });
 console.log("END Init Draw");


}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
 $("div div").each(function(pos){

   
   var x = pos%100;
   var y  = Math.floor(pos/100);
   
   var pixelColor="#000000";
   var classNames=$(this).attr("class");
   if (classNames.indexOf("white")!==-1) pixelColor="#FFFFFF";
   if (classNames.indexOf("red")!==-1) pixelColor="#FF0000";
   if (classNames.indexOf("yellow")!==-1) pixelColor="#FFFF00";
   if (classNames.indexOf("green")!==-1) pixelColor="#008000";
  if (classNames.indexOf("blue")!==-1) pixelColor="#0000FF";


   if (pixelArray[pos] !== pixelColor){
    context.fillStyle=pixelColor;
    context.moveTo(x,y);
    context.fillRect(x,y,1,1);
    console.log("pixelArray at " + pos +" was " + pixelArray[pos]);
    pixelArray[pos]=pixelColor;
     console.log("pixelArray at " + pos +" NOW " + pixelArray[pos]);
   }

 
   

 }); // end .each loop


}


})
