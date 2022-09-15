import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import './TotalVotos.css'

function TotalVotos(){
    const auth = useContext( AuthContext )
    return(
        <div className="container-total-votos">
            <p>{`El total de votos es ${auth.votes.Total}`}</p>

        </div>
    )
}
export default TotalVotos;