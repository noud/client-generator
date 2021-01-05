export function getPayload(payload) {
  switch ('{{{dataProtocol}}}') {
    case "infyom":
      if (payload) {
        payload = payload.data;
      }
      break;
    default:
      // do nothing
  }

  return payload;
}
