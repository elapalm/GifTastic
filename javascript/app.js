//The initial buttons on the page. Theme: Video Games.
var items = ["Mario Bros.", "Halo", "Angry Birds", "Minecraft", "Sonic the Hedgehog", "Skull Monkies"];

 //making the buttons
function makeButtons() {
   $("#buttons").empty();

    for (var i = 0; i < items.length; i++); {

    var newButton = $("<button>").text(items[i])
    button.addClass("vgButton")
    button.attr("game-data", items[i])
    $("buttons").append(newButton)
    }
};
 
 function showVideoGames() {
    var videoGame = $("this").attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + items + "&api_key=O6oRTuA1g25yXcfN1ELtk7n3mB3fzOQR&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    $("#add-game").on("click", function(event) {
      event.preventDeffault();
      var vgGame = $("game-input").val().trim();
      vgGame.push(vgGame);
      makeButtons();
}); 
makeButtons();

    
    
    .then(function(response) {
        var gameRating = ('<div class="game-rating">');
        
        var rating = response.rated;

    });



 };
