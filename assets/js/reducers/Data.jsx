define (['redux', '../Actions', '../utils/createReducer'], function (Redux, Actions, createReducer) {
  const { RECEIVE_PROTECTED_DATA, FETCH_PROTECTED_DATA_REQUEST } = Actions

  const initialState = {
	data: null,
	isFetching: false
  }

  return createReducer(initialState, {
  	[RECEIVE_PROTECTED_DATA]: (state, payload) => {
        return Object.assign({}, state, {
            'data': payload.data,
            'isFetching': false
        });
    },
    [FETCH_PROTECTED_DATA_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isFetching': true
        });
    }
  })
})
