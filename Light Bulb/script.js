// let bright = 1;

// function Click() {

//     let bulb = document.querySelector(".bulb")
//     if (bright === 1) {
//         bulb.style.filter = "brightness(2)"
//         bright = 2
//     } else if (bright === 2) {
//         bulb.style.filter = "brightness(3)"
//         bright = 3
//     } else {
//         bulb.style.filter = "brightness(1)"
//         bright = 1
//     }
// }
var brightnessLevels = [1, 1.10, 1.15, 1.20, 1.25, 1.30] // Define an array of brightness levels
var currentBrightnessIndex = 0; // Initialize the current brightness index

// Get the button element
let Button = document.querySelector(".bt");
var object = document.querySelector('.object');

Button.style.cssText = "font-size:9px;width:30px;height:30px;text-align:center"
var s = 0;
Button.innerHTML = s
    // Function to change the brightness level
function Click() {
    // Increment the brightness index
    s = currentBrightnessIndex = (currentBrightnessIndex + 1) % brightnessLevels.length;
    Button.innerHTML = s;


    // Set the brightness level based on the current index
    var brightness = brightnessLevels[currentBrightnessIndex];
    document.body.style.filter = "brightness(" + brightness + ")";
    console.log(s)
    if (s == 0) {
        object.style.filter = 'contrast(30)';
    } else {
        // Adjust brightness of the object
        object.style.filter = 'brightness(1)'; // Adjust the brightness value as needed
    }
}

if (s == 0) {
    object.style.filter = 'contrast(30)';
} else {
    // Adjust brightness of the object
    object.style.filter = 'brightness(1)'; // Adjust the brightness value as needed
}