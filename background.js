// Listen for tab changes.
// https://developer.chrome.com/extensions/tabs#event-onUpdated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('Changed', changeInfo.url);

  //chrome.tabs.executeScript({
  //  code: 'document.body.style.backgroundColor="red"'
  //});

  var details = {
    tabId: tabId,
    path: 'icon38.png'
  };
  chrome.pageAction.setIcon(details, function() {
    console.log('done');
  });
});
