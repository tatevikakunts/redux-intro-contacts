const initState = {

    person:{
        fName:"",
        lName:"",
        phone:"",
    },
    persons:[]
}

const reducer = (state=initState, action)=>{
    switch (action.type){
        case "ADD_PERSON":
            const _arr = [...state.persons, action.payload]
            return{...state, persons:_arr}
        case "SET_PERSON":
            return{...state, person:action.payload}

        default:
            return state
    }
}
export default reducer