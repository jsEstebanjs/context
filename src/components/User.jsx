import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import './User.css'

function Bts(){
    const auth = useContext( AuthContext )
    return(
        <div className="main-buttons">
            <button name="C1" onClick={(e)=> auth.addVote(e.target.innerHTML)}>C1</button>
            <button name="C2" onClick={(e)=> auth.addVote(e.target.innerHTML)}>C2</button>
            <button name="C3" onClick={(e)=> auth.addVote(e.target.innerHTML)}>C3</button>
            <button name="C4" onClick={(e)=> auth.addVote(e.target.innerHTML)}>C4</button>
        </div>
    )
}

export default Bts;