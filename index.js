/* A test for JS connection to HTML
 alert("hello"); */

/* document.querySelector("button").addEventListener("click", btnClick);
//
// function btnClick()
// {
//   alert("You got clicked :-p");
 } */

// With an anonymus function the previous statement can also be Made:

/* document.querySelector("button").addEventListener("click", function ()
//   {
//     alert("You got clicked :-p");
   }  ); */

//Now to create a way for all of the buttons to be selected:

var allDrumBtns = document.querySelectorAll(".drum");

for (i of allDrumBtns)
{
  i.addEventListener("click", function ()
  { //Buttons selected w/ Audio
    var btnInnerHTML = this.innerHTML;
      checkKey(btnInnerHTML); //detects clicked button
  }
      );
}

document.addEventListener("keydown", function(event) {
  // console.log(event); **checks within log which key was pressed
  // if(event.keyCode === 87 || event.keyCode === 65 || event.keyCode === 83 ||
  //   event.keyCode === 68 || event.keyCode === 74 || event.keyCode === 75 ||
  //   event.keyCode === 76 )
  //   return alert("key pressed"); //Utilized to assure that only the keys i wanted react
  var clickedKey = event.key;
    checkKey(clickedKey); //detects keyboard press
}  );

function checkKey(key){

  switch (key) {
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    default:
      console.log(this.innerHTML); //Test to show if none of the previous
                                 //keys were clicked or typed
        }
}
