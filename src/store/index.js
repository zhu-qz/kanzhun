import { createStore, combineReducers} from 'redux';
import home from '@/views/home/store';

const reducer = combineReducers({
  home
})

const store = createStore(reducer);

export default store;