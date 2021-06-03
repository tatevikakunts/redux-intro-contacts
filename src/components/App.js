import React, {useEffect} from "react";
import {connect} from "react-redux"
import store from "../store/store";

const App = ({person,persons, addPerson, changeFieldHandle})=>{

    useEffect(()=>{
        console.log(person)
    },[person])
    useEffect(()=>{
        console.log(persons)
    },[persons])

    const changeHandle = (event)=>{
        changeFieldHandle(event.target.name, event.target.value)
    }

    const submitHandle = (event)=>{
        event.preventDefault()
        addPerson(person)
    }
    return(
        <div className="container">
                <div className="w-50 mx-auto">
                    <form onSubmit={submitHandle}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" name="fName"  onChange={changeHandle}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" name="lName"  onChange={changeHandle}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" type="text" name="phone"  onChange={changeHandle}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary w-100">Add</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

const mapStateToProps=(state)=>{

    return{
        person:state.person,
        persons:state.persons
    }
}




const mapDispatchToProps = (dispatch)=>{
    return{
        changeFieldHandle:(name, value)=>dispatch({type:"SET_PERSON", payload: {name, value}}),
        addPerson:(person)=>dispatch({type:"ADD_PERSON", payload:person})
    }
}
// store.subscribe(()=>console.log(store.getState()))
export default connect(mapStateToProps, mapDispatchToProps)(App)