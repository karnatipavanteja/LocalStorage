

*JavaScript*

// Get the textarea element //
const textbox = document.getElementById("txt-box");

// Function to save the textarea content to local storage
function saveLocalStrg(){
   localStorage.setItem("savedText", textbox.value);
}

// Check if there's existing data in local storage and populate the textarea
if(localStorage.getItem("savedText")){
   textbox.value = localStorage.getItem("savedText");
}

// Add an event listener to the textarea for input changes and save to local storage
textbox.addEventListener("input", saveLocalStrg);
