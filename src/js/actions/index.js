import { ADD_ARTICLE, DATA_LOAD } from '../constants/action-types';

export const addArticle = payload => {
  return { type: ADD_ARTICLE, payload };
};

export function getData() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'DATA_LOADED', payload: json });
      });
  };
}