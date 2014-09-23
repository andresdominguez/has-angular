// Listen for tab changes.
// https://developer.chrome.com/extensions/tabs#event-onUpdated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('Changed', changeInfo.url);

  setTimeout(function() {
    console.log(tabId);

    chrome.tabs.executeScript(tabId,
        {code: "window.angular.version.full"},
        function(results) {
          if (!results) {
            return;
          }

          console.log(results[0]);
        });
    //  chrome.tabs.executeScript(tabId, {
    //    code: '1',
    //    runAt: 'document_idle'
    //  }, function(result) {
    //    console.log(result);
    //  });
    //}, 1000);

    chrome.pageAction.show(tabId);
  }, 3000);
});
