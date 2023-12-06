import React from 'react'
import {Navigate, useRoutes} from "react-router-dom";
import {AuthGuard, GuestGuard} from "../modules/auth";
import {Before, Beta, Charts, Home, Login, Plans, Register, ResetPassword, Search} from "./elements";
import {PATH_AFTER_LOGIN, PATH_AFTER_LOGIN_BETA, PATH_BEFORE_LOGIN} from "../../config-global";
import {DashboardWrapper, AuthPage, Demo} from "../pages";
import {ROOTS_AUTHENTICATION, ROOTS_DASHBOARD, ROOT_DEMO, PATH_AUTH, ROOTS_BETA} from "./paths";
import {MasterLayout} from "../../_theme/layout/MasterLayout";

export default function Router() {

    return useRoutes([
        {
            path: PATH_BEFORE_LOGIN,
            children: [
                {path: '', element: <Before/>},
                {path: '404', element: <h1>Page404</h1>},
                {path: 'demo', element: <Demo/>},
                {path: 'plans', element: <Plans />},

            ],
        },

        {
            path: ROOTS_AUTHENTICATION,
            element: (
                <GuestGuard>
                    <AuthPage/>
                </GuestGuard>
            ),
            children: [
                {element: <Navigate to={"/"} replace/>, index: true},
                {path: 'login', element: <Login/>},
                {path: 'register', element: <Register/>},
                {path: 'password-reset', element: <ResetPassword/>},
            ]
        },

        {
            path: ROOTS_BETA,
            element: (
                <AuthGuard>
                    <Beta />
                </AuthGuard>
            ),
        },

        {
            path: ROOTS_DASHBOARD,
            element: (
                <AuthGuard>
                    <MasterLayout>
                        <DashboardWrapper/>
                    </MasterLayout>
                </AuthGuard>

            ),
            children: [
                {element: <Navigate to={PATH_AFTER_LOGIN} replace/>, index: true},
                {path: 'home', element: <Home />},
                {path: 'search', element: <Search/>},
                {path: 'charts', element: <Charts />},
                {path: 'three', element: <h1>PageThree</h1>},
            ],
        },

        {path: '*', element: <Navigate to={ROOTS_AUTHENTICATION} replace/>},

    ]);
}
