   // Slider-1
$(document).ready(function(){
      $( '#slider-1' ).slider({
        range: "min",
value : 1500,
  min : 100,
  max : 3000,
  step : 100,
  create: function( event, ui ) {
   val = $( '#slider-1' ).slider('value');
  $( '.value-slider-1').html( val);
},
slide: function( event, ui ) {
  $( '.value-slider-1').html( ui.value);
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
   val = $( '#slider-2' ).slider('value');
  $( '.value-slider-2' ).html(val);
},
slide: function( event, ui ) {
  $( '.value-slider-2' ).html( ui.value);
}
});
    });

   // Checkbox (add class='filter-checkbox' in html, section-2__block)
$("input:checkbox").change(function (){
  if($(this).is(':checked')){
    $('.filter-checkbox').hide();
  }else{
    $('.filter-checkbox').show();
  }
});

