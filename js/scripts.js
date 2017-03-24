$(document).ready(function(){
  $("#language").submit(function(event){

    $(".csharp, .ruby, .php").hide()
    var education = $("#eduacation").val();
    var location = $("#location").val();
    var start = $("#start").val();
    var size = $("#size").val();
    var design = $("#design").val();
    var build = $("#build").val();

    if (size === "Established company" && design === "Design/interaction"){
      $(".csharp").show();
    }
    else if ((size === "Start-up") && (design === "Behind the Scenes" || "Either" && design !== "Design/interaction")){
      $(".php").show();
    }
    else if(start === "April or May" || "June or June" || "Either"){
      $(".ruby").show();
    }

    // else if (start == "April or May" && size === "Start-up")
    //   $(".ruby").show();
    //
    // // else if ((start === "April or May") && (size === "Established company" || "Start-up" || "Either") && (design === "Design/interaction" || "Behind the Scenes" || "Either")){
    // //   $(".ruby").show();
    // // }
    // else if (size === "Either" && design === "Either" || "Behind the Scenes"){
    //   $(".php").show();
    // }
    // else if (start === "April or May" && size === "Established company" && design === "Design/interaction"){
    //   $(".csharp").show();
    // }






    event.preventDefault();
  })
});
