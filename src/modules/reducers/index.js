/* External dependencies */
import { combineReducers } from 'redux';

/* Internal dependencies */
import filterReducer from './filterReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  filterReducer,
  categoryReducer,
});

export default rootReducer;
