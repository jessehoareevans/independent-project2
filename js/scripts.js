$(document).ready(function(){
  $("#language").submit(function(event){

    $(".csharp, .ruby, .php").hide()
    var education = $("#eduacation").val();
    var location = $("location").val();
    var size = $("#size").val();
    var design = $("#design").val();
    var build = $("build").val();

    if (size === "Established company" && design === "Design/interaction"){
      $(".csharp").show();
    }
    if (size === "Start-up" && design === "Behind the Scenes"){
      $(".ruby").show();
    }




    event.preventDefault();
  })
});
