const SET_FILTER = 'filter/SET_FILTER';
export const setFilter = payload => ({ type: SET_FILTER, payload });
const initialState = 'percent';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
