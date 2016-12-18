$(window).on(
      		'load',
      		function() {

      			$(document).on(
      					'click',
      					'#butt',
      					function() {
                  var one=$('#rs1').val();
                  var rs1=one*1;
                  var two=$('#rs2').val();
                  var rs2=two*2;
                  var five=$('#rs5').val();
                  var rs5=five*5;
                  var ten=$('#rs10').val();
                  var rs10=ten*10;
                  var twty=$('#rs20').val();
                  var rs20=twty*20;
                  var fif=$('#rs50').val();
                  var rs50=fif*50;
                  var hunt=$('#rs100').val();
                  var rs100=hunt*100;
                  var fhunt=$('#rs500').val();
                  var rs500=fhunt*500;
                  var thous=$('#rs1000').val();
                  var rs1000=thous*1000;
                  var twthous=$('#rs2000').val();
                  var rs2000=twthous*2000;
                  var total=rs1+rs2+rs5+rs10+rs20+rs50+rs100+rs500+rs1000+rs2000;
                  $('#total').val(total);
                  var url="/currency/currency?operation=add&rs1="+rs1+"&rs2="+rs2+"&rs5="+rs5+"&rs10="+rs10+"&rs20="+rs20+"&rs50="+rs50+"&rs100="+rs100+"&rs500="+rs500+"&rs1000="+rs1000+"&rs2000="+rs2000+"&total="+total;
                  $.ajax(url)
                  .done(function(result){
                   //console.log();
                     //alert(result);
                    alert("your's sucessfully added");
                        }).
                    fail(function(result){
                    // console.log();
                     //alert(result);
                    })
                    
      					});
      		});
$(document).ready(function(){
    $("#h1").click(function(){
        $("#first").slideToggle("slow");
    });
});
