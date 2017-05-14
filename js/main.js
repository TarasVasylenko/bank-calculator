   // Slider-1  
$(document).ready(function(){
      $( "#slider-1" ).slider({
        range: "min",
value : 1500,
  min : 100,
  max : 3000,
  step : 100,
  create: function( event, ui ) {
   val = $( "#slider-1" ).slider("value");
  $( "#content-slider-1" ).html( val + 'грн');
},
slide: function( event, ui ) {
  $( "#content-slider-1" ).html( ui.value + 'грн' );
}
});
        // Slider-2 
       $( "#slider-2" ).slider({
        range: "min",
value : 15,
  min : 1,
  max : 30,
  step : 1,
  create: function( event, ui ) {
   val = $( "#slider-2" ).slider("value");
  $( "#content-slider-2" ).html( val + 'дн');
},
slide: function( event, ui ) {
  $( "#content-slider-2" ).html( ui.value + 'дн' );
}
});
    });
