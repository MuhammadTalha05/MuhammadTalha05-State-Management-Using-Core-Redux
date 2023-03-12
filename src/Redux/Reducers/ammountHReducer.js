
const initialState = 0;
export const ammountHReducer = (state = initialState, actions)=>{
    switch(actions.type){
        case 'INC_HANDLER':
            return state+1;

        case 'DEC_HANDLER':
            return state-1;

        default:
            return state;

    }

}