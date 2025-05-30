
const initialState = [
    {
        id: 1,
        description: "just testing",
        isDone: true
    },
    {
        id: 2,
        description: "to prove it",
        isDone: false
    }
];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET':
            return state; 

        case 'ADD':
            return [...state, action.payload]; 

        case 'ISDONE':
            return state.filter((ele) => ele.isDone !== true); 

        case 'ISNOT':
            return state.filter((ele) => ele.isDone !== false); 

        case 'DELETE':
            return state.filter((ele) => ele.id !== action.payload.id); 

        default:
            return state;
    }
};

export default rootReducer;
