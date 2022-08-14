## nasil kullanilir?

Bu eklenti hesapsiz eksi sozluk kullanimi icin yapildi. Eksi'den cikis yapip oyle kullanmaniz tavsiye edilir. (Adblock gibi eklentileri devre disi birakabilirsiniz.)

- zip olarak indir ve zip'ten cikar
- chrome'u ac
- [chrome://extensions/](chrome://extensions/) adresine git
- Developer mode veya gelistirici modunu aktive et (sag ustte)
- "Load unpacked" veya turkcesi her ne ise ona tikla
- zipten cikardigin klasoru sec
- eksi'ye gir

## bu eklentiyle ilgili olmayan bir not

linklerin ancak cift tiklayarak acilmasi sorunu ublock origin, privacy badger gibi eklentilerden kaynakli. `tatlandirici` ile ilgisi yok. Hatta bak asagiya da buna sebep olan eksi kodunu yapistirayim belki biriniz de ona cozum ureten bi seyler yazar:

```js
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
```
