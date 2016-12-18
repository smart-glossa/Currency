$(window).on(
      		'load',
      		function() {

      			$(document).on(
      					'click',
      					'#butt',
      					function() {
                  var one=$('#1').val();
                  var onem=one*1;
                  var two=$('#2').val();
                  var twom=two*2;
                  var five=$('#5').val();
                  var fivem=five*5;
                  var ten=$('#10').val();
                  var tenm=ten*10;
                  var twty=$('#20').val();
                  var twtym=twty*20;
                  var fif=$('#50').val();
                  var fifm=fif*50;
                  var hunt=$('#100').val();
                  var huntm=hunt*100;
                  var fhunt=$('#500').val();
                  var fhuntm=fhunt*500;
                  var thous=$('#1000').val();
                  var thousm=thous*1000;
                  var twthous=$('#2000').val();
                  var twthousm=twthous*2000;
                  var add=onem+twom+fivem+tenm+twtym+fifm+huntm+fhuntm+thousm+twthousm;
                  $('#answer').val(add);
      					});
      		});
          $(window).on(
          		'load',
          		function() {
          			$(document).on(
          					'click',
          					'#button',
          					function() {
                      var bin=$('#bin').val();
                      var octal=0;
                      var j=1;
                      var reminder;
                      while (bin != 0) {
                      reminder=bin%10;
                      octal=octal+reminder*j;
                      j=j*2;
                      bin=bin/10;
                    }
                    var oc=$('#oct').val(octal);
          					});
          		});
$(document).ready(function(){
    $("#h1").click(function(){
        $("#first").slideToggle("slow");
    });
});
          		