export function pushUserToDataLayer(method: string | undefined) {
  window.dataLayer.push({
    event: "MyLogin",
    method: method || "sign in method undefined",
  });
}
