chrome.runtime.sendMessage({}, (response) => {
    var script = document.createElement('script');
    script.textContent = "window.EV = undefined;";
    (document.head || document.documentElement).appendChild(script);
    script.remove();
})