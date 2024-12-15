//  let Fan = document.querySelector("Fan")
//  let Switch = document.querySelector(".button")
//  let Controller = document.querySelector(".controller")

//  let value1 = false;
//  let value2 = false;


//  function Fanrotate() {
//      // Condition when the swithch press current flows 
//      Fan = document.querySelector(".Fan")
//      value1 = !value1
//      if (value1) {
//          Switch.classList.add("On-Off")

//      } else {
//          Switch.classList.remove("On-Off")

//      }
//      //    If curent flow then it needed to see that the contriller also on 1.


//  }

//  function move() {
//      value2 = !value2
//      if (value2) {
//          Controller.classList.remove("rotate3")
//          Controller.classList.add("rotate2")
//          Controller.innerHTML = 1
//      } else {
//          Controller.classList.remove("rotate2")
//          Controller.classList.add("rotate3")
//          Controller.innerHTML = 0

//      }
//  }
// //  ###############
//  {
//      Fan.classList.add("rotate-2")
//  } else {
//      Fan.classList.remove("rotate-2")
//  }
let Fan = document.querySelector(".Fan");
let Switch = document.querySelector(".button");
let Controller = document.querySelector(".controller");

let value1 = false;
let value2 = false;

function Fanrotate() {
    // Condition when the switch is pressed current flows 
    Fan = document.querySelector(".Fan");
    value1 = !value1;
    if (value1) {
        Switch.classList.add("On-Off");
    } else {
        Switch.classList.remove("On-Off");
    }
    performAfterBothFunctions();
}

function move() {
    value2 = !value2;
    if (value2) {
        Controller.classList.remove("rotate3");
        Controller.classList.add("rotate2");
        Controller.innerHTML = 1;
    } else {
        Controller.classList.remove("rotate2");
        Controller.classList.add("rotate3");
        Controller.innerHTML = 0;
    }
    performAfterBothFunctions();
}

function performAfterBothFunctions() {
    if (value1 && value2) {
        Fan.classList.add("rotate-2")
            // Operation to perform when both functions' if statements are true
        console.log("Both functions' if statements are true");
    } else {
        Fan.classList.remove("rotate-2")
    }
}