import { ADD_ARTICLE, DATA_LOAD, ERROR_LOAD } from '../constants/action-types';

export const addArticle = payload => {
  return { type: ADD_ARTICLE, payload };
};

export function getData() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts1')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOAD, payload: json });
      })
      .catch(e => {
        dispatch({ type: ERROR_LOAD, payload: e });
      });
  };
}
