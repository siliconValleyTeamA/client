const SET_CATEGORY = 'category/SET_CATEGORY';
export const setCategory = payload => ({ type: SET_CATEGORY, payload });
const initialState = '전체보기';

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
