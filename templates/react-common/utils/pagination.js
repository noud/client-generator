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
    switch ('{{{dataProtocol}}}') {
      case "infyom":
          entryPoint += paginationSettings.entity;
        break;
      default:
        entryPoint += '/' + paginationSettings.entity;
    }
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
      options = {
        entity: pluralEntityName,
        page: '?page=' + page
      }
      break;
    default:
      // do nothing
  }

  return options;
}
