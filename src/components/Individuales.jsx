import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import './Individuales.css'

function Individuales(){
    const auth = useContext( AuthContext )
    return(
        <div className="container-individuales">
            <h2>Votos</h2>
            {auth.votes.po ? 
            <ul>
                {auth.input.C1 ? 
                <li>
                    {`C1 = ${parseInt((auth.votes.C1) * 100 / (auth.votes.Total === 0 ? 1 : auth.votes.Total))}%`}
                </li>
                 : null}
                {auth.input.C2 ? 
                <li>
                    {`C2 = ${parseInt((auth.votes.C2) * 100 / (auth.votes.Total === 0 ? 1 : auth.votes.Total))}%`}
                </li>
                 : null}
                {auth.input.C3 ? 
                <li>
                    {`C3 = ${parseInt((auth.votes.C3) * 100 / (auth.votes.Total === 0 ? 1 : auth.votes.Total))}%`}
                </li>
                 : null}
                {auth.input.C4 ? 
                <li>
                    {`C4 = ${parseInt((auth.votes.C4) * 100 / (auth.votes.Total === 0 ? 1 : auth.votes.Total))}%`}
                </li>
                 : null}
            </ul> :null }

            {auth.votes.nu ? 
            <ul>
                {auth.input.C1 ?
                <li>
                    {`C1 = ${auth.votes.C1}`}
                </li>
                : null }

                {auth.input.C2 ?
                <li>
                    {`C2 = ${auth.votes.C2}`}
                </li>
                : null }

                {auth.input.C3 ?
                <li>
                    {`C3 = ${auth.votes.C3}`}
                </li>
                : null }
                {auth.input.C4 ?
                <li>
                    {`C4 = ${auth.votes.C4}`}
                </li>
                : null }
            </ul> :null }

        </div>
    )
}
export default Individuales;