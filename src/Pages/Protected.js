import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({element}) => {
    const navigate = useNavigate();
    let login =  sessionStorage.getItem('login');
    useEffect(() => {
        
        if (!login) {
            navigate('/login');
        }
    }, [navigate,login]);

    return element
        
};

export default Protected;
