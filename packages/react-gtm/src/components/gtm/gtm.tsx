import { useFirebaseApp, useHandleAuth } from "@confrontend/shared";
import { User } from "firebase/auth";
import React, { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: {
      event: string;
      [key: string]: string | Record<string, string>;
    }[];
  }
}

function pushUserToDataLayer(user: User) {
  window.dataLayer.push({
    event: "login",
    userInfo: {
      displayName: user.displayName || "no display name",
      email: user.email || "no email",
    },
  });
}

export default function Gtm() {
  const app = useFirebaseApp();
  const [user] = useHandleAuth(app);

  user && pushUserToDataLayer(user);

  return null;
}
