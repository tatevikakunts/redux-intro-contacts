import React from "react";
import {connect} from "react-redux"
import store from "../store/store";

const App = ({person,submitHandle, changeFieldHandle})=>{

    return(
        <div className="container">
                <div className="w-50 mx-auto">
                    <form onSubmit={()=>{submitHandle(person)}}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" name="fName"  onChange={changeFieldHandle}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" name="lName"  onChange={changeFieldHandle}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" type="text" name="phone"  onChange={changeFieldHandle}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary w-100">Add</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}



const mapDispatchToProps = (dispatch)=>{
    return{
        changeFieldHandle:(event)=>dispatch({type:"SET_PERSON", payload:{[event.target.name]:event.target.value}}),
        submitHandle:(person)=>dispatch({type:"ADD_PERSON", payload:store.getState().person})
    }
}
store.subscribe((person)=>console.log(store.getState(person)))
export default connect(null, mapDispatchToProps)(App)