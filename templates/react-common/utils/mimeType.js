export function getMimeType() {
  let mimeType = 'application/ld+json';

  switch ('{{{dataProtocol}}}') {
    case "infyom":
      mimeType = 'application/json';
      break;
    default:
      // do nothing
  }

  return mimeType;
}
