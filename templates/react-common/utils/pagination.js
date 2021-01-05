import { ENTRYPOINT } from '../config/entrypoint';

export function paginationStringForFrontEnd(paginationString, pluralEntityName) {
  return paginationString.replace('\/' + pluralEntityName + '\?page=', '');
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
