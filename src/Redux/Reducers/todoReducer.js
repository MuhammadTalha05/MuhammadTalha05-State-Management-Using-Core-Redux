const initialState = {todo:[]};

export const todoHandler = (state=initialState, actions)=>{
    switch(actions.type){
        case 'ADD_TODO':
            return {}
        case 'DELETE_TODO':
            return{};
        default:
            return state       
    }
}