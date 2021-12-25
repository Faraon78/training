import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../posts/posts.rootReducer';
import  {fetchPostsAsyncStart } from '../posts/posts.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchPostsAsyncStart)

export default store;