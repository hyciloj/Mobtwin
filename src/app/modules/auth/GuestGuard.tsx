import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import {ChildrenProps} from "../../../config-global";
import {useAuthContext} from "../../auth/useAuthContext";
import {PATH_AUTH, ROOTS_AUTHENTICATION, ROOTS_DASHBOARD} from "../../routing/paths";

function GuestGuard({ children }: ChildrenProps) {

    const { isAuthenticated, isInitialized } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={ROOTS_DASHBOARD} />;
    }

    if (!isInitialized) {
        return <Navigate to={PATH_AUTH.login} />;
    }


    return <> {children} </>;
}

export {GuestGuard}