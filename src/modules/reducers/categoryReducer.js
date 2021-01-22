const SET_CATEGORY = 'category/SET_CATEGORY';
export const setCategory = category => ({ type: SET_CATEGORY, category });

const initialState = {
  id: 1,
  key: 'all',
  label: 'All',
};

const LABELS = {
  all: '전체보기',
  tech: '테크-가전',
  fashion: '패션-잡화',
  beauty: '뷰티',
  food: '푸드',
  homeliving: '홈리빙',
  design: '디자인소품',
  travel: '여행-레저',
  sport: '스포츠-모빌리티',
  pet: '반려동물',
  meeting: '모임',
  culture: '공연-컬쳐',
  social: '소셜-캠페인',
  education: '교육-키즈',
  game: '게임-취미',
  publish: '출판',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default categoryReducer;
