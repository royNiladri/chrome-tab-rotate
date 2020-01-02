chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.getAllInWindow(tabs => {
        let x = 0
        setInterval(() => {
            chrome.tabs.highlight({tabs: x++})
            if (x >= tabs.length) {
                x = 0;
            }
        }, 3500);
    });
});