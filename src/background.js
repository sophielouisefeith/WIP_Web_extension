import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    console.log("Hello");
  }
});