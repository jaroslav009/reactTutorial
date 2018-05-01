import dataNote from './dataNote';
import {combineReducers} from 'redux';
import activeReduce from './activeReduce'

export default combineReducers({
    data: dataNote,
    activeReduce: activeReduce
})
