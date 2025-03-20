chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(
  (e) => console.log("onRuleMatchedDebug: " + JSON.stringify(e))
);

console.log("getMatchedRules: " + JSON.stringify(chrome.declarativeNetRequest.getMatchedRules()))

console.log("Background service worker is running.");
