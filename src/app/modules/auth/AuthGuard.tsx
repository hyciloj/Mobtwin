import React, { useState, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useAuthContext} from "../../auth/useAuthContext";
import {LoadingPrimary} from "../components/loading/LoadingPrimary";
import Login from "./components/Login";
import {PATH_AUTH} from "../../routing/paths";
// components
//
// ----------------------------------------------------------------------

type AuthGuardProps = {
    children: ReactNode;
};

function AuthGuard({ children }: AuthGuardProps) {
    const { isAuthenticated, isInitialized } = useAuthContext();

    const { pathname } = useLocation();

    const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

    if (!isInitialized) {
        return <LoadingPrimary />;
    }

    if (!isAuthenticated) {
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