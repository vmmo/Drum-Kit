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
  {
    alert("You got clicked :-p"); //Alert is used to test that the loop works
  }  );
}
