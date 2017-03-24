$(document).ready(function(){
  $("#language").submit(function(event){

    $(".csharp, .ruby, .php").hide()
    var name1Input = $("input#name1").val();
    var education = $("#eduacation").val();
    var location = $("#location").val();
    var start = $("#start").val();
    var size = $("#size").val();
    var design = $("#design").val();
    var build = $("#build").val();

    $(".name1").text(name1Input);
    $("#form-text").show();
    if (size === "Established company" && design === "Design/interaction"){
      $(".csharp").show();
    }
    else if ((size === "Start-up") && (design === "Behind the Scenes" || "Either" && design !== "Design/interaction")){
      $(".php").show();
    }
    else if(start === "April or May" || "June or June" || "Either"){
      $(".ruby").show();
    }

    event.preventDefault();
  })
});
