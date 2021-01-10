/* External dependencies */
import { combineReducers } from 'redux';

/* Internal dependencies */
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  filterReducer,
});

export default rootReducer;
