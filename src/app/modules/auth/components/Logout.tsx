import React from "react";
import {useDispatch} from "react-redux";
import {logout} from "../redux/AuthCRUD";
import * as auth from "../redux/AuthRedux";

export default function Logout() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        logout().then(r => {
            const {status} = r.data
            console.log(status)
            if (status === 200) {
                dispatch(auth.actions.logout())
            }
        })
    };


    return (
        <div className="col-1 offset-8 d-flex justify-content-center align-items-center">
            <button onClick={handleLogout} className="main_button-xl">logout</button>
        </div>
    )
}