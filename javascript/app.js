//The initial buttons on the page. Theme: Video Games.
var items = ["Mario Bros.", "Halo", "Angry Birds", "Minecraft", "Sonic the Hedgehog", "Skull Monkies"];


 function showVideoGames() {
    var videoGame = $("this").attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + items + "&api_key=O6oRTuA1g25yXcfN1ELtk7n3mB3fzOQR&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var gameRating = ('<div class="game-rating">');
        
        var rating = response.rated;

    });
//making the buttons

function makeBUttons() {

    $("#buttons").empty();

    for (var i = 0; i < items.length; i++); {

    var a = $("<button>");
    a.addClass("vgButton");
    a.attr("game-data", items[i]);
    a.text(items[i]);
    $("buttons").append(a);
    }
}

$("#add-game").on("click", function(event) {
    event.preventDeffault();
    var vgGame = $("game-input").val().trim();
    vgGame.push(vgGame);
    makeBUttons();
}); 
makeBUttons();

