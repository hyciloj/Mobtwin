import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import * as auth from "../redux/AuthRedux";
import {Navigate} from "react-router-dom";
import {PATH_AUTH} from "../../../routing/paths";
import {login, logout} from "../redux/AuthCRUD";

export default function Logout() {
    const dispatch = useDispatch()

    useEffect(() => {
        logout().then(r => {
            const {status} = r.data
            if (status === 200) {
                console.log("logout")
                dispatch(auth.actions.logout())
                // document.location.reload()
            }
        })
    }, [dispatch])

    return (
        <></>
        // <Navigate to={PATH_AUTH.login} />
    )
}