import {Map} from 'immutable';
import {handleActions, createAction, handleAction} from 'redux-actions';

const SET_INPUT ='input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState =({
    value:''
});

export default handleAction({
    [SET_INPUT]:(state,action)=>{
        return state.set('value',action.payload)
    }
},initialState);