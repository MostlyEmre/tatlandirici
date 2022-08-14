if (window.location.pathname === "/") {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (!mutation.addedNodes) {
        return;
      }
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        if (mutation.addedNodes[i].id === "main") {
          mutation.addedNodes[i].remove();
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}
