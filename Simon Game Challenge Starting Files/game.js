
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

var level =0;
var keyPressed=false;

$(document).keydown(function(){
    if(!keyPressed){
        $("#level-title").text("level"+ level)
       nextSequence();
       keyPressed=true; 
    }
});

$(".btn").on("click",function(){
    var userChosenColour=$(this).attr("id");
     userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
  });

function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);


}

  
function playSound(name){
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    }

    function animatePress(currentColour){
        
     $("#" + currentColour).addClass("pressed")    
        setTimeout(function(){
            $("#" + currentColour).removeClass("pressed");
        },100);
        
    }

    function checkAnswer(currentLevel){
        if(gamePattern[currentLevel]===userClickedPattern){

            console.log("success")
            if(userClickedPattern.length===gamePattern.length){
                setTimeout(function(){
                    nextSequence();
                
            },1000);
        
         }
    }

else{

    console.log("wrong");

    playSound("wrong");
    $("body").addClass("game-over");
    $("level-title").text("Game Over,press Any Key to restart");

    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    
}
function startOver(){

}
    }
