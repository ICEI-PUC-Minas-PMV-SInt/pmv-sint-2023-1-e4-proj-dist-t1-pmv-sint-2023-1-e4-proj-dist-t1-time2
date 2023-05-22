import React, {useState, createContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider =({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const recoveredUser= localStorage.getItem("user");
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, [])

    const login = (cpf, password) => {
        console.log("login auth", {cpf, password});
        
        const loggeduser ={
            id:"123",
            cpf,
        }
        localStorage.setItem("user", JSON.stringify(loggeduser));

        if (password === "secret"){ 
        setUser(loggeduser);
        navigate("/CentraldeCestas");
        }
    }
    const logout =() => {
        console.log('logout');
        localStorage.removeItem("user");
        setUser(null);
        navigate("/PortalFuncionario")
    }
    
    
    
    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login,logout}}>
        {children}
        </AuthContext.Provider>    
    )
}
