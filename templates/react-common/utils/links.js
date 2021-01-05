export function linkStringForFrontEnd(linkString, pluralEntityName) {
  switch ('{{{dataProtocol}}}') {
    case "infyom":
      break;
    default:
      linkString = linkString.replace(encodeURIComponent('/' + pluralEntityName + '/'), '')
  }
  return linkString;
}

export function storeLinkSettings(pluralEntityName, options = {}) {
  options = {entity: pluralEntityName};
  return options;
}
