import {takeEvery, put, call} from 'redux-saga/effects';
import PostsActionTypes from './posts.actionTypes';
import {fetchPostsSuccess, fetchPostsFailure, fetchPostsStart} from './posts.actions';

export function* fetchPostsAsync(){
    try {        
        yield put(fetchPostsStart());        
        const data = yield call(() => {
          return fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(json => console.log(json))
          }
        );
        yield put(fetchPostsSuccess(data));
      } catch (error) {
        yield put(fetchPostsFailure());
      }
}

export function* fetchPostsAsyncStart(){
    yield takeEvery(
        PostsActionTypes.FETCH_POSTS_START, 
        fetchPostsAsync)
}