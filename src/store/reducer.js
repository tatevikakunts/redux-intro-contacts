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
            const _arr = [...state.persons, state.person]
            return{...state, persons:_arr, person:{}}
        case "SET_PERSON":
            const {name, value}= action.payload
            return{...state, person:{...state.person,  [name]:value}}

        default:
            return state
    }
}
export default reducer