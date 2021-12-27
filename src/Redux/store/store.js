import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../posts/rootReducer';
import  {fetchPostsAsyncStart } from '../posts/posts.saga';
import  {fetchUsersAsyncStart } from '../users/users.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchPostsAsyncStart)
sagaMiddleware.run(fetchUsersAsyncStart)

export default store;