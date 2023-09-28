import React from 'react';
import { Navigate } from 'react-router-dom';
import {ChildrenProps} from "../../../config-global";
import {useSelector, shallowEqual} from "react-redux";
import {RootState} from "../../../setup";

function GuestGuard({ children }: ChildrenProps) {

    const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)

    if (isAuthorized) {
        return <Navigate to="/dashboard" />;
    }

    return <> {children} </>;
}

export {GuestGuard}