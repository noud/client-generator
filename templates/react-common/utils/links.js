export function linkStringForFrontEnd(linkString, pluralEntityName) {
  return linkString.replace(encodeURIComponent('/' + pluralEntityName + '/'), '');
}

export function storeLinkSettings(pluralEntityName, options = {}) {
  options = {entity: pluralEntityName};
  return options;
}
