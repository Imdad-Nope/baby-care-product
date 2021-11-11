import { useContext } from "react";
import { AuthContext } from "../useContext/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;