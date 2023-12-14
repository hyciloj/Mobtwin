import {ChildrenProps} from "../../../config-global";
import { Navigate, useLocation } from 'react-router-dom';
import React, {useState} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../../setup";
import {PATH_AUTH} from "../../routing/paths";
import {UserModel} from "./models/UserModel";

function AuthGuard({children}: ChildrenProps) {

    const isAuthorized = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)

    const { pathname } = useLocation();

    const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

    if (!isAuthorized) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }
        return <Navigate to={PATH_AUTH.login} />;
    }

    if (requestedLocation && pathname !== requestedLocation) {

        setRequestedLocation(null);
        return <Navigate to={requestedLocation} />;
    }

    return <> {children} </>;
}

export {AuthGuard}