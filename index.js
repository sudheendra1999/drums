/**************************** Detecting the button press *****************************************/

var Drum_num = document.querySelectorAll(".drum").length;

for (var i = 0; i < Drum_num; i++) {

   document.querySelectorAll(".drum")[i].addEventListener("mouseover", function() {
      var buttonInnerHtml = this.innerHTML;

      makeSound(buttonInnerHtml);
      ButtonAnimation(buttonInnerHtml);
   });
}
/****************************** Detecting key Board press ******************************************/
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   ButtonAnimation(event.key);
});

/***************************** Sound function   *****************************************************/
function makeSound(key){
   switch (key) {
      case "w": //key "w"
         var crash = new Audio('sounds/crash.mp3');
         crash.play();
         break;
      case "a":
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();
         break;
      case "s":
         var snare = new Audio('sounds/snare.mp3');
         snare.play();
         break;
      case "d":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
         break;
      case "j":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         break;
      case "k":
         var tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play();
         break;
      case "l":
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play();
         break;
      default: //if doesn't match any key
         console.log("Invalid");
   }
}




/********************************************** ButtonAnimation **************************************/

function ButtonAnimation(keyName){

   var buttonPressed=document.querySelector("."+keyName);

   buttonPressed.classList.add("pressed");

   setTimeout(function(){
      buttonPressed.classList.remove("pressed");

   },100);
}
