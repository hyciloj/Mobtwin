import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import {ChildrenProps} from "../../../config-global";
import {useSelector, shallowEqual} from "react-redux";
import {RootState} from "../../../setup";
import {PATH_DASHBOARD, ROOTS_BETA, ROOTS_DASHBOARD} from "../../routing/paths";

function GuestGuard({ children }: ChildrenProps) {

    const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)


    if (isAuthorized) {
        return <Navigate to={ROOTS_DASHBOARD} />;
        // return <Navigate to={ROOTS_BETA} />;
    }

    return <> {children} </>;
}

export {GuestGuard}