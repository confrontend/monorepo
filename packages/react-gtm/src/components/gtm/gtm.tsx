import { useFirebaseApp, useHandleAuth } from "@confrontend/shared";
import { User } from "firebase/auth";
import React, { useEffect } from "react";
import { pushUserToDataLayer } from "./gtm-utils";

declare global {
  interface Window {
    dataLayer: {
      event: string;
      [key: string]: string | Record<string, string>;
    }[];
  }
}

function GtmScript() {
  useEffect(() => {
    let script: HTMLScriptElement | undefined;
    script = document.createElement("script");
    script.innerHTML = `
      // Google Tag Manager Snippet
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-5FFB5CD");
      // End Google Tag Manager Snippet
      `;

    document["head"].appendChild(script);

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, []);

  return null;
}

function GtmCustomEvents() {
  window.dataLayer = window.dataLayer || [];
  const app = useFirebaseApp();
  const [user] = useHandleAuth(app);

  user && pushUserToDataLayer(user);

  return null;
}

export default function GoogleTagManager() {
  return (
    <>
      <GtmScript />
      <GtmCustomEvents />
    </>
  );
}
