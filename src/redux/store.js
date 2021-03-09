import { createStore } from 'redux'
import { reducerKelas } from './reducer'
const storeState = createStore( reducerKelas );
export default storeState;