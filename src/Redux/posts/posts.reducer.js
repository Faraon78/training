import PostsActionTypes from './posts.actionTypes';

const initialState ={
    posts: [1, 2, 3, 4],
    isFetching: false,
    errorMessage: undefined
}
export const postsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS_START:
          return {
            ...state,
            isFetching: false
          };
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
          return {
            ...state,
            isFetching: true,
            posts: action.payload
          };
        case PostsActionTypes.FETCH_POSTS_FAILURE:
          return {
            ...state,
            isFetching: false,
            errorMessage: action.payload
          };
        default:
          return state;
      }
}