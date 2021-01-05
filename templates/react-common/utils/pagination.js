import { ENTRYPOINT } from '../config/entrypoint';

export function paginationStringForFrontEnd(paginationString, pluralEntityName) {
  switch ('{{{dataProtocol}}}') {
    case "infyom":
      paginationString = paginationString.replace('\?page=', '');
      break;
    default:
      paginationString = paginationString.replace('\/' + pluralEntityName + '\?page=', '');
  }

  return paginationString;
}

export function paginationStringForBackEnd(paginationSettings) {
  var entryPoint = ENTRYPOINT;

  if (paginationSettings.entity) {
    entryPoint += paginationSettings.entity;
    if (!paginationSettings.page) {
      entryPoint += '/';
    }
  }

  return entryPoint;
}

export function storePaginationSettings(page, pluralEntityName) {
  var options = {};

  switch ('{{{dataProtocol}}}') {
    case "infyom":
      page -= 1;
      break;
    default:
      // do nothing
  }

  options = {
    entity: pluralEntityName,
    page: '?page=' + page
  }

  return options;
}
