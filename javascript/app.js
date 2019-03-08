//The initial buttons on the page. Theme: Video Games.
var items = ["Mario Bros.", "Halo", "Angry Birds", "Minecraft", "Sonic the Hedgehog", "Skull Monkies"];

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=O6oRTuA1g25yXcfN1ELtk7n3mB3fzOQR&tag=video-games";

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

