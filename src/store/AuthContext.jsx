import React,{ useState, createContext } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [votes,setVotes] = useState(
    {
    "C1":0,
    "C2":0,
    "C3":0,
    "C4":0,
    Total:0,
    po:false,
    nu:true
  }
  );
  const [input,setInput] = useState(
    {
    "C1":false,
    "C2":false,
    "C3":false,
    "C4":false,
  }
  );
  const inputs=(item)=>{

    setInput({...input, [item]: !input[item] })
    

  }
  const addVote = (id)=>{
    setVotes({...votes , [id]: votes[id] +  1 ,Total: votes.Total + 1});
  }
  const Numerico=()=>{
    setVotes({...votes,po:false,nu:true})

  }
  const Porcentaje=()=>{
    setVotes({...votes,po:true,nu:false})

  }
    return (
      <AuthContext.Provider 
      value={{
        votes,
        setVotes,
        addVote,
        Porcentaje,
        Numerico,
        input,
        inputs
      }}>
        {children}
      </AuthContext.Provider>
    )
  }