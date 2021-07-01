// document.querySelector("button").addEventListener("click",handleClick);
//
//
// function handleClick(){
//    alert("I got clicked");
// }

/*Doing same thing with the ananmose function*/

// document.querySelector("button").addEventListener('click',function(){
//    alert("I got clicked");
// });

/**************************** Detecteing the button press *****************************************/

var Drum_num = document.querySelectorAll(".drum").length;
// var a=[];
for (var i = 0; i < Drum_num; i++) {

   document.querySelectorAll(".drum")[i].addEventListener("mouseover", function() {
      // Code to play when clicking buttons.
      // var audio = new Audio('sounds/tom-3.mp3');
      // audio.play();
      // this.style.color="red";
      // this.style.transform="scale(1.3)";
      var buttonInnerHtml = this.innerHTML;

      makeSound(buttonInnerHtml);
      ButtonAnimation(buttonInnerHtml);
   });
}
/****************************** Detecting key Board press ******************************************/
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   ButtonAnimation(event.key);
   // console.log(event);
});

/***************************** Sound function   *****************************************************/
function makeSound(key){
   switch (key) {
      case "w": //key "w"
         var crash = new Audio('sounds/crash.mp3');
         crash.play();
         // a.push("w");
         break;
      case "a":
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();
         // a.push('a');
         break;
      case "s":
         var snare = new Audio('sounds/snare.mp3');
         snare.play();
         // a.push('s');
         break;
      case "d":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
         // a.push('d');
         break;
      case "j":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         // a.push('j');
         break;
      case "k":
         var tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play();
         // a.push('k');
         break;
      case "l":
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play();
         // a.push('l');
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















// for(var j=0; j<a.length; j++){
//    if(a[j] == "w"){
//       var audio = new Audio('sounds/crash.mp3');
//       audio.play();
//    }else if(a[j] == "a"){
//       var audio = new Audio('sounds/kick.mp3');
//       audio.play();
//    }else if(a[j] == "s"){
//       var audio = new Audio('sounds/snare.mp3');
//       audio.play();
//    }else if(a[j] == "d"){
//       var audio = new Audio('sounds/tom-1.mp3');
//       audio.play();
//    }else if(a[j] == "j"){
//       var audio = new Audio('sounds/tom-2.mp3');
//       audio.play();
//    }else if(a[j] == "k"){
//       var audio = new Audio('sounds/tom-3.mp3');
//       audio.play();
//    }else{
//       var audio = new Audio('sounds/tom-4.mp3');
//       audio.play();
//    }
// }
