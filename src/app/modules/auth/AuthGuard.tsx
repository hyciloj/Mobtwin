import {ChildrenProps} from "../../../config-global";
import { Navigate, useLocation } from 'react-router-dom';
import React, {useState} from "react";
import Login from "./components/Login";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../../setup";
import Search from "../../pages/search/Search";

function AuthGuard({children}: ChildrenProps) {

    const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)

    const { pathname } = useLocation();

    const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

    if (!isAuthorized) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }
        return <Login />;
        // return <Search />;
    }

    if (requestedLocation && pathname !== requestedLocation) {

        setRequestedLocation(null);
        return <Navigate to={requestedLocation} />;
    }

    return <> {children} </>;
}

export {AuthGuard}