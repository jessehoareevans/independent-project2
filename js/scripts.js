$(document).ready(function(){
  $("#language").submit(function(event){

    $(".csharp, .ruby, .php").hide()
    var size = $("#size").val();
    var design = $("#design").val();


    if (size === "Established company" && design === "Design/interaction"){
      $(".csharp").show();
    }




    event.preventDefault();
  })
});
