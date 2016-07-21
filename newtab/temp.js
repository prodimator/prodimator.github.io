
function init(){
  $(".quote").fadeToggle(1000);

  $( document.body ).click(function() {
      $( ".quote" ).fadeOut(1250);
      setTimeout(function(){
        $( "#one" ).fadeIn();
        $( "#two" ).fadeIn();
        $( "#three" ).fadeIn();
        $( "#four" ).fadeIn();
      }, 1000);
  });

  //menu 1
  $("#menu").mouseenter(function(){
     $("#menu").animate({
            height: '+=200',
        });
  });
  $("#menu").mouseleave(function(){
     $("#menu").animate({
            height: '-=200',
        });
  });
  ////////

  //menu 2
  $("#menut").mouseenter(function(){
     $("#menut").animate({
            height: '+=200',
        });
  });
  $("#menut").mouseleave(function(){
     $("#menut").animate({
            height: '-=200',
        });
  });
  ///////

  //menu 3
  $("#menuth").mouseenter(function(){
     $("#menuth").animate({
            height: '+=200',
        });
  });
  $("#menuth").mouseleave(function(){
     $("#menuth").animate({
            height: '-=200',
        });
  });
  /////


  //menu 4
  $("#menuf").mouseenter(function(){
     $("#menuf").animate({
            height: '+=200',
        });
  });
  $("#menuf").mouseleave(function(){
     $("#menuf").animate({
            height: '-=200',
        });
  });
  /////
}

onload=init;
