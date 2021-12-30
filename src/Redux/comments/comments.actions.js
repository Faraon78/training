import CommentsActionTypes from './comments.actionTypes';


export const fetchCommentsStart = () => ({
  type: CommentsActionTypes.FETCH_COMMENTS_START
});

export const fetchCommentsSuccess = data => ({
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
  payload: data
});

export const fetchCommentsFailure = errorMessage => ({
  type: CommentsActionTypes.FETCH_COMMENTS_FAILURE,
  payload: errorMessage
});
