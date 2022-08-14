function bt() {
  n("a").click(function (i) {
    if (!i.isDefaultPrevented()) {
      const r = i.currentTarget;
      if (!i.metaKey && !i.ctrlKey && r.target === "" && r.href !== "" && r.id !== "top-registration-link" && r.id !== "top-login-link") {
        const u = s === "true" ? n(".ad-mobilewebinterstitial") : n(".ad-doubleclickwebinterstital");
        if (u.length !== 0) {
          const f = n("#overlay"),
            c = n("#interstitial-close-link-source");
          if (c.length === 0) {
            const t = n("<div/>", {
              id: "interstitial-close-link-source",
              "data-link": i.currentTarget.href,
            });
            e = i.currentTarget.href;
            n(f).after(t);
            i.preventDefault();
            u.length >= 1 && h(u);
          }
          t.setTimeout(function () {
            typeof u[0].children[0].children[0].children[0] == "undefined" && typeof o == "undefined" && t.open(e, "_self");
          }, 1e3);
        }
      }
    }
  });
}
