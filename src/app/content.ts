chrome.runtime.sendMessage({}, (response) => {
    var article = false;

    for (var i of document.getElementsByTagName("script")) {
      if (i.type == "application/ld+json" ? JSON.parse(i.innerHTML)["@type"] == "NewsArticle" : "") {
        article = true;
        break;
      }
    }
    var script = document.createElement('script');
    script.textContent = "window.setTimeout = function(){};";
    (document.head || document.documentElement).appendChild(script);
    script.remove();
})