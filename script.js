// Get the URL parameter for the chosen hat
const params = new URLSearchParams(window.location.search);
const chosenHat = params.get("hat");
const chosenMask = params.get("mask");

// Display the chosen hat
if (chosenHat) {
    const hatImage = document.getElementById("chosen-hat");
    hatImage.src = `images/${chosenHat}.png`; // Load the hat image dynamically
    hatImage.alt = chosenHat;
}
// Step 3: Display the chosen mask
if (chosenMask) {
    const maskImage = document.getElementById("chosen-mask");
    maskImage.src = `images/${chosenMask}.png`; // Dynamically set the mask image
    maskImage.alt = chosenMask;
}