import React from "react";
import {useAuthContext} from "../../../auth/useAuthContext";
import {PATH_AUTH} from "../../../routing/paths";
import { useNavigate } from 'react-router-dom';
import axios from "../../../utils/axios";

export default function Logout() {

    const {logout} = useAuthContext()
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            logout();
            // delete axios.defaults.headers.common.Authorization;
            navigate(PATH_AUTH.login, { replace: true });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="col-1 offset-8 d-flex justify-content-center align-items-center">
            <button onClick={handleLogout} className="main_button-xl">logout</button>
        </div>
    )
}