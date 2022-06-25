export function pushUserToDataLayer(method: string | undefined) {
  window.dataLayer.push({
    event: "my-login",
    method: method || "sign in method undefined",
  });
}
