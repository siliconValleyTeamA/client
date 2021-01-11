const SET_CATEGORY = 'category/SET_CATEGORY';
export const setCategory = key => ({ type: SET_CATEGORY, key });

const initialState = {
  key:'all',
  label:'전체보기'
}

const LABELS = {
  all: '전체보기',
  tech: '테크-가전',
  fashion: '패션-잡화',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        key:action.key,
        label:LABELS[action.key]
      }
    default:
      return state;
  }
};

export default categoryReducer;
