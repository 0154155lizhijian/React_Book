import {ADD,DEL} from '../state'

export const add= ()=>{
    return{
        type:ADD,
        // data:newUser
    }
}
export const del= ()=>{
    return{
        type:DEL,
        // data:newUser
    }
}