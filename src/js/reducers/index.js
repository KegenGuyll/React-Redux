import { ADD_ARTICLE, DATA_LOAD, ERROR_LOAD } from '../constants/action-types';

const initialState = {
  articles: [],
  remoteArticles: [],
  fetchError: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === DATA_LOAD) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  if (action.type === ERROR_LOAD) {
    console.log(state);
  }
  return state;
}

export default rootReducer;
