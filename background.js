console.log("background running");

//listens for events , loads while loading a page.

chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
  let msg = {
    txt: 'hello'
  };
  chrome.tabs.sendMessage(tab.id, msg);
}