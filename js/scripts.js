$(document).ready(function(){
  debugger;
  $("form#survey").submit(function(event){
    var pc = $("input:radio[name=pc]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var art = $("input:radio[name=art]:checked").val();
    var fb = $("input:radio[name=fb]:checked").val();
    var droid = $("input:radio[name=droid]:checked").val();

    //backend functions begin

    if (pc ==="0" && company === "0" && art === "1" && fb == "0" || fb === "1" && droid === "1"){
      $("#java").hide();
      $("#ruby").hide();
      $("#php").hide();
      $("#css").hide();
      $("#c").show();
    }
    else if (pc === "1" && company === "1"){
      $("#java").hide();
      $("#php").hide();
      $("#c").hide();
      $("#css").hide();
      $("#ruby").show();
    }
    else if (art === "0" && company === "0" || company === "1" ){
      $("#java").hide();
      $("#ruby").hide();
      $("#php").hide();
      $("#c").hide();
      $("#css").show();
    }
    else if (fb === "0" ){
      $("#java").hide();
      $("#ruby").hide();
      $("#c").hide();
      $("#css").hide();
      $("#php").show();
    }
    else if (droid === "0" ){
      $("#ruby").hide();
      $("#c").hide();
      $("#css").hide();
      $("#php").hide();
      $("#java").show();
    }


  event.preventDefault();
  });

});
