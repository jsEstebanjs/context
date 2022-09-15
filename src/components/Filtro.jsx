import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import './User.css'
function Filtro(){
    const auth = useContext( AuthContext );
    return(
        <div className="main-buttons"> 
        <h2>Ver resultado como:</h2>
        <button onClick={()=> auth.Porcentaje()}>Porcentaje</button>
        <button onClick={()=> auth.Numerico()}>Numerico</button>

        <div className="escoger">
        <label className="label-escoger">Escoger: </label>
        <label htmlFor="C1">C1</label>
        <input type='checkbox' id="C1" onClick={(e)=> auth.inputs(e.target.id)}></input>

        
        <label htmlFor="C2">C2</label>
        <input type='checkbox' id="C2" onClick={(e)=> auth.inputs(e.target.id)} ></input>

        
        <label htmlFor="C3">C3</label>
        <input type='checkbox' id="C3" onClick={(e)=> auth.inputs(e.target.id)}></input>

        
        <label htmlFor="C4">C4</label>
        <input type='checkbox' id="C4" onClick={(e)=> auth.inputs(e.target.id)}></input>

        
        </div>

        </div>
    )
}

export default Filtro;