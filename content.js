console.log("let's go dusk extension");
console.log("I would like to sent some information to the addon. ");


// When the button is clicked, inject setPageBackgroundColor into current page

// when click on launch wallet from the web wallet extension pop ups.


// when we filled in all the data in the webwallet we would like to receive the message
// so we can manipulte the dom of the webpage we are connected with the wallet 
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  let paragraphs = document.getElementsByTagName('p');
  for (elt of paragraphs) {
    elt.innerHTML = message.txt;
  }
}