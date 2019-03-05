import {ADD,DEL} from '../state'


export function counter(state = 0,action){
    switch(action.type){
        case ADD:
            return state+1
        case DEL:
             return state-1
        default:
            return 10
    }
}