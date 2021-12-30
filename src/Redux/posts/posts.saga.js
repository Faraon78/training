import {takeEvery, put, call} from 'redux-saga/effects';
import PostsActionTypes from './posts.actionTypes';
import {fetchPostsSuccess, fetchPostsFailure} from './posts.actions';

export function* fetchPostsAsync(){
    try {        
           
        let data = yield call(fetch,'https://jsonplaceholder.typicode.com/posts');
         data = yield data.json();
        yield put(fetchPostsSuccess(data));
      } catch (error) {
        yield put(fetchPostsFailure());
      }
}

export function* postsWatcher(){
    yield takeEvery(
        PostsActionTypes.FETCH_POSTS_START, 
        fetchPostsAsync)
}