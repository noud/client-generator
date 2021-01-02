import { fetch } from '../../utils/dataAccess';

export function error(error) {
  return { type: '{{{uc}}}_DELETE_ERROR', error };
}

export function loading(loading) {
  return { type: '{{{uc}}}_DELETE_LOADING', loading };
}

export function success(deleted) {
  return { type: '{{{uc}}}_DELETE_SUCCESS', deleted };
}

export function del(item) {
  return dispatch => {
    dispatch(loading(true));

    let options = {
      method: 'DELETE'
    };
    switch ('{{{dataProtocol}}}') {
      case "infyom":
        options = {entity: '{{{lc}}}'};
        break;
      default:
        // do nothing
    }
    return fetch(item['{{{dataIdName}}}'], options)
      .then(() => {
        dispatch(loading(false));
        dispatch(success(item));
      })
      .catch(e => {
        dispatch(loading(false));
        dispatch(error(e.message));
      });
  };
}
