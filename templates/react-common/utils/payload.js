export function getPayload(payload) {
  switch ('{{{dataProtocol}}}') {
    case "infyom":
      if (payload) {
        payload = payload.data;
      }
      break;
      // do nothing
      default:
  }

  return payload;
}
