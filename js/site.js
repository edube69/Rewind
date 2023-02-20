// Get the string from the page
// controler function
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

// reverse the string
// logic function
function reverseString(userString){
    let revString = [];
    // The last position in an array is length - 1
    for(i = userString.length - 1 ; i >= 0 ; i--){
        revString += userString[i];
    }
    return revString;
}

// display the reverse string to the user
// view function
function displayString(revString){
    // Write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is : ${revString}`;
    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}
