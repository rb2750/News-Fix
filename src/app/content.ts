chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)

            var script = document.createElement('script');
            script.textContent = "window.EV = undefined;";
            (document.head || document.documentElement).appendChild(script);
            script.remove();
        }
    })
})