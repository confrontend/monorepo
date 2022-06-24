import { User } from "firebase/auth";

export function pushUserToDataLayer(user: User) {
  window.dataLayer.push({
    event: "login",
    userInfo: {
      displayName: user.displayName || "no display name",
      email: user.email || "no email",
    },
  });
}
